interface IconProps {
  className?: string
}

interface StackIconProps extends IconProps {
  tech: string
}

interface HobbyIconProps extends IconProps {
  hobby: string
}

function CodeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M7.25 5 3 10l4.25 5M12.75 5 17 10l-4.25 5M11.25 3 8.75 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LayersIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="m10 3 7 4-7 4-7-4 7-4ZM3 11l7 4 7-4M3 14l7 4 7-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ServerIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="3" y="4" width="14" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="11" width="14" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 6.5h2M6 13.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function GitIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="6" cy="15" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14" cy="10" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 7v6m2-8 4 3m-4 7 4-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function NetworkIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="8" y="3" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="13" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13" y="13" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 7v3m0 0H5m5 0h5M5 10v3m10-3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function ToolIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="m12.5 4.5 3 3m-1.25-4.25a3 3 0 0 0-3.98 3.99l-6.63 6.63a1.6 1.6 0 0 0 2.27 2.26l6.62-6.62a3 3 0 0 0 3.99-3.98Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DumbbellIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M3 8v4M6 7v6m8-6v6m3-5v4M6 10h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function WaveIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M2 11c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M2 14c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    </svg>
  )
}

function MountainIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="m2.5 15 5-8 2.6 3.9 2.8-4.4L17.5 15h-15Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m10.1 10.9 1.2-1.9 1.2 1.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function BallIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="m10 6 2.2 1.5-.8 2.6H8.6l-.8-2.6L10 6ZM7.2 12l1.4-1.9m4.2 0 1.4 1.9M8.6 14h2.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CpuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="6" y="6" width="8" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <rect x="8.5" y="8.5" width="3" height="3" rx="0.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 3v2M14 3v2M6 3v2M10 15v2M14 15v2M6 15v2M3 10h2M3 6h2M3 14h2M15 10h2M15 6h2M15 14h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function StackIcon({ tech, className }: StackIconProps) {
  const key = tech.toLowerCase()

  if (key === 'react' || key === 'angular') return <LayersIcon className={className} />
  if (key === 'javascript' || key === 'typescript' || key === 'html / css' || key === 'scss' || key === 'jquery') return <CodeIcon className={className} />
  if (key === 'php' || key === 'apis rest') return <ServerIcon className={className} />
  if (key === 'git') return <GitIcon className={className} />
  if (key === 'unifi' || key === 'vlans') return <NetworkIcon className={className} />
  if (key === 'soporte it') return <ToolIcon className={className} />

  return <CodeIcon className={className} />
}

export function HobbyIcon({ hobby, className }: HobbyIconProps) {
  const key = hobby.toLowerCase()

  if (key === 'entrenamiento') return <DumbbellIcon className={className} />
  if (key === 'surf') return <WaveIcon className={className} />
  if (key === 'montana') return <MountainIcon className={className} />
  if (key === 'futbol') return <BallIcon className={className} />
  if (key === 'tecnologia') return <CpuIcon className={className} />

  return <CpuIcon className={className} />
}
