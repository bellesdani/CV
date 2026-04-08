import type { JSX } from 'react'
import { NAV_ITEMS } from '../assets/cv'
import type { SectionId } from '../types'
import styles from '../styles/Sidebar.module.css'

interface Props {
  active: SectionId
  onNavigate: (id: SectionId) => void
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

export default function Sidebar({ active, onNavigate }: Props) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.avatarBlock}>
        <div className={styles.avatar}>DB</div>
        <div>
          <div className={styles.name}>Daniel Belles</div>
          <div className={styles.role}>Fullstack Developer</div>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navLabel}>navegacion</div>
        {NAV_ITEMS.map(item => (
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
        <a className={styles.contactItem} href="mailto:bellesdani@gmail.com">
          <span className={styles.contactDot} />
          bellesdani@gmail.com
        </a>
        <a
          className={styles.contactItem}
          href="https://linkedin.com/in/daniel-belles-vallet"
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.contactDot} />
          linkedin / daniel-belles-vallet
        </a>
        <a className={styles.contactItem} href="tel:+34601073561">
          <span className={styles.contactDot} />
          +34 601 073 561
        </a>
      </div>
    </aside>
  )
}
