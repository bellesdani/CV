import type { JSX } from 'react'
import { useI18n } from '../i18n/I18nProvider'
import type { SectionId } from '../types'
import styles from '../styles/Sidebar.module.css'

interface Props {
  active: SectionId
  onNavigate: (id: SectionId) => void
  isMobileOpen?: boolean
}

const NAV_ICONS: Record<SectionId, JSX.Element> = {
  'sobre-mi': (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="7" cy="4.5" r="2.5" />
      <path d="M2 12c0-2.76 2.24-5 5-5s5 2.24 5 5" />
    </svg>
  ),
  experiencia: (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="1" y="3" width="12" height="9" rx="1.5" />
      <path d="M5 3V2h4v1" />
    </svg>
  ),
  stack: (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M2 4l5-3 5 3-5 3-5-3zM2 7l5 3 5-3M2 10l5 3 5-3" />
    </svg>
  ),
}

export default function Sidebar({ active, onNavigate, isMobileOpen = false }: Props) {
  const { content } = useI18n()
  const sidebarClassName = `${styles.sidebar} ${isMobileOpen ? styles.sidebarOpen : ''}`

  return (
    <aside className={sidebarClassName}>
      <div className={styles.avatarBlock}>
        <div className={styles.avatar}>DB</div>
        <div>
          <div className={styles.name}>{content.copy.sidebarName}</div>
          <div className={styles.role}>{content.copy.sidebarRole}</div>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navLabel}>{content.copy.sidebarNavigationLabel}</div>
        {content.navItems.map(item => (
          <button
            key={item.id}
            className={`${styles.navItem} ${active === item.id ? styles.navItemActive : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <span className={styles.navIcon}>{NAV_ICONS[item.id]}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div className={styles.bottom}>
        {content.contactItems.map(item => (
          item.href ? (
            <a
              key={`${item.type}-${item.value}`}
              className={styles.contactItem}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className={styles.contactDot} />
              {item.value}
            </a>
          ) : (
            <div key={`${item.type}-${item.value}`} className={styles.contactItem}>
              <span className={styles.contactDot} />
              {item.value}
            </div>
          )
        ))}
      </div>
    </aside>
  )
}
