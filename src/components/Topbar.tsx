import type { SectionId } from '../types'
import styles from '../styles/Topbar.module.css'

interface Props {
  active: SectionId
}

export default function Topbar({ active }: Props) {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <span className={styles.logo}>
          <span className={styles.logoAccent}>daniel</span>.dev
        </span>
        <span className={styles.breadcrumb}>// {active}</span>
      </div>
      <div className={styles.right}>
        <div className={styles.statusPill}>
          <span className={styles.statusDot} />
          disponible
        </div>
      </div>
    </header>
  )
}
