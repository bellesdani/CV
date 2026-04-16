import { LANGUAGE_OPTIONS } from '../assets/cv'
import { useI18n } from '../i18n/I18nProvider'
import type { SectionId } from '../types'
import { useTheme, type ThemeMode } from '../theme/ThemeProvider'
import styles from '../styles/Topbar.module.css'

interface Props {
  active: SectionId
}

export default function Topbar({ active }: Props) {
  const { locale, setLocale, content } = useI18n()
  const { mode, setMode } = useTheme()

  const themeOptions: Array<{ value: ThemeMode; label: string }> = [
    { value: 'system', label: content.copy.topbarThemeDefaultOption },
    { value: 'dark', label: content.copy.topbarThemeDarkOption },
    { value: 'light', label: content.copy.topbarThemeLightOption },
  ]

  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <span className={styles.logo}>
          <span className={styles.logoAccent}>daniel</span>.dev
        </span>
        <span className={styles.breadcrumb}>// {content.copy.sectionLabelById[active]}</span>
      </div>
      <div className={styles.right}>
        <label className={styles.switchControl}>
          <span className={styles.switchLabel}>{content.copy.topbarThemeLabel}</span>
          <select
            className={styles.switchSelect}
            value={mode}
            onChange={event => setMode(event.target.value as ThemeMode)}
            aria-label={content.copy.topbarThemeLabel}
          >
            {themeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.langSwitch}>
          <span className={styles.langLabel}>{content.copy.topbarLanguageLabel}</span>
          <select
            className={styles.langSelect}
            value={locale}
            onChange={event => setLocale(event.target.value as typeof locale)}
            aria-label={content.copy.topbarLanguageLabel}
          >
            {LANGUAGE_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <div className={styles.statusPill}>
          <span className={styles.statusDot} />
          {content.copy.topbarStatusAvailable}
        </div>
      </div>
    </header>
  )
}
