<?php

declare(strict_types=1);

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use RuntimeException;

class TranslateCvWithDeepl extends Command
{
    protected $signature = 'cv:translate-deepl
        {input : Path to the base JSON file}
        {--output= : Output path (defaults to input path)}
        {--target=en,fr,it : Target locales separated by commas}
        {--dry-run : Process data but do not write output file}';

    protected $description = 'Fill missing CV translations with DeepL using Spanish (es) as source.';

    /** @var array<string, string> */
    private array $cache = [];

    private string $apiKey = '';

    public function handle(): int
    {
        $this->apiKey = (string) (config('services.deepl.key') ?: env('DEEPL_API_KEY', ''));

        if ($this->apiKey === '') {
            $this->error('DEEPL_API_KEY is missing. Add it to .env or config/services.php.');
            return self::FAILURE;
        }

        $inputPath = $this->resolvePath((string) $this->argument('input'));
        if (! is_file($inputPath)) {
            $this->error("Input file not found: {$inputPath}");
            return self::FAILURE;
        }

        $raw = file_get_contents($inputPath);
        if ($raw === false) {
            $this->error("Cannot read input file: {$inputPath}");
            return self::FAILURE;
        }

        $data = json_decode($raw, true);
        if (! is_array($data)) {
            $this->error('Input file must be valid JSON object/array.');
            return self::FAILURE;
        }

        $targets = $this->parseTargets((string) $this->option('target'));
        if ($targets === []) {
            $this->error('No valid target locales. Use --target=en,fr,it');
            return self::FAILURE;
        }

        $stats = [
            'translated' => 0,
            'skipped' => 0,
            'failed' => 0,
        ];

        $translated = $this->translateNode($data, $targets, $stats);

        $output = (string) $this->option('output');
        $outputPath = $output !== '' ? $this->resolvePath($output) : $inputPath;

        $json = json_encode($translated, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        if (! is_string($json)) {
            $this->error('Could not encode output JSON.');
            return self::FAILURE;
        }

        if (! $this->option('dry-run')) {
            $directory = dirname($outputPath);
            if (! is_dir($directory) && ! mkdir($directory, 0777, true) && ! is_dir($directory)) {
                $this->error("Cannot create output directory: {$directory}");
                return self::FAILURE;
            }

            if (file_put_contents($outputPath, $json . PHP_EOL) === false) {
                $this->error("Cannot write output file: {$outputPath}");
                return self::FAILURE;
            }
        }

        $this->line('Done.');
        $this->line('Translated: ' . $stats['translated']);
        $this->line('Skipped: ' . $stats['skipped']);
        $this->line('Failed: ' . $stats['failed']);
        $this->line('Output: ' . $outputPath);
        if ($this->option('dry-run')) {
            $this->warn('Dry run enabled, no file was written.');
        }

        return self::SUCCESS;
    }

    /**
     * @param  mixed  $node
     * @param  list<string>  $targets
     * @param  array{translated:int,skipped:int,failed:int}  $stats
     * @return mixed
     */
    private function translateNode(mixed $node, array $targets, array &$stats): mixed
    {
        if (! is_array($node)) {
            return $node;
        }

        if ($this->isLocalizedBlock($node)) {
            return $this->translateLocalizedBlock($node, $targets, $stats);
        }

        if (array_is_list($node)) {
            foreach ($node as $index => $value) {
                $node[$index] = $this->translateNode($value, $targets, $stats);
            }
            return $node;
        }

        foreach ($node as $key => $value) {
            $node[$key] = $this->translateNode($value, $targets, $stats);
        }

        return $node;
    }

    /**
     * @param  array<string, mixed>  $node
     * @param  list<string>  $targets
     * @param  array{translated:int,skipped:int,failed:int}  $stats
     * @return array<string, mixed>
     */
    private function translateLocalizedBlock(array $node, array $targets, array &$stats): array
    {
        $source = trim((string) ($node['es'] ?? ''));
        if ($source === '') {
            return $node;
        }

        foreach ($targets as $locale) {
            $existing = $node[$locale] ?? null;
            if (is_string($existing) && trim($existing) !== '') {
                $stats['skipped']++;
                continue;
            }

            try {
                $translated = $this->translateText($source, $locale);
                if ($translated === null || trim($translated) === '') {
                    $stats['failed']++;
                    continue;
                }

                $node[$locale] = $translated;
                $stats['translated']++;
            } catch (RuntimeException $exception) {
                $stats['failed']++;
                $this->warn("DeepL error for locale {$locale}: {$exception->getMessage()}");
            }
        }

        return $node;
    }

    private function translateText(string $text, string $targetLocale): ?string
    {
        $cacheKey = $targetLocale . '|' . $text;
        if (isset($this->cache[$cacheKey])) {
            return $this->cache[$cacheKey];
        }

        $response = Http::asForm()
            ->timeout(45)
            ->post($this->deeplEndpoint(), [
                'auth_key' => $this->apiKey,
                'text' => [$text],
                'source_lang' => 'ES',
                'target_lang' => strtoupper($targetLocale),
                'preserve_formatting' => '1',
                'split_sentences' => '1',
            ]);

        if (! $response->successful()) {
            throw new RuntimeException('HTTP ' . $response->status() . ': ' . (string) $response->body());
        }

        $translated = data_get($response->json(), 'translations.0.text');
        if (! is_string($translated)) {
            return null;
        }

        $this->cache[$cacheKey] = $translated;
        return $translated;
    }

    private function deeplEndpoint(): string
    {
        return Str::endsWith($this->apiKey, ':fx')
            ? 'https://api-free.deepl.com/v2/translate'
            : 'https://api.deepl.com/v2/translate';
    }

    /**
     * @param  array<string, mixed>  $node
     */
    private function isLocalizedBlock(array $node): bool
    {
        $allowedKeys = ['es', 'en', 'fr', 'it'];

        if (! array_key_exists('es', $node) || ! is_string($node['es'])) {
            return false;
        }

        foreach (array_keys($node) as $key) {
            if (! in_array((string) $key, $allowedKeys, true)) {
                return false;
            }
        }

        return true;
    }

    /**
     * @return list<string>
     */
    private function parseTargets(string $rawTargets): array
    {
        $allowed = ['en', 'fr', 'it'];
        $targets = array_filter(array_map(static fn (string $v) => strtolower(trim($v)), explode(',', $rawTargets)));
        $targets = array_values(array_unique(array_intersect($targets, $allowed)));

        return $targets;
    }

    private function resolvePath(string $path): string
    {
        $isWindowsAbsolute = (bool) preg_match('/^[a-zA-Z]:[\\\\\\/]/', $path);
        $isUnixAbsolute = Str::startsWith($path, '/');

        if ($isWindowsAbsolute || $isUnixAbsolute) {
            return $path;
        }

        return base_path($path);
    }
}
