import { HERO_TAGS, HOBBIES, INFO_CARDS } from '../assets/cv'
import { HobbyIcon } from '../components/CvIcons'
import SectionEyebrow from '../components/SectionEyebrow'
import styles from '../styles/SobreMi.module.css'

export default function SobreMi() {
  return (
    <div className={styles.section}>
      <SectionEyebrow label="// sobre-mi" />

      <h1 className={styles.heroName}>
        Daniel
        <br />
        <em>Belles.</em>
      </h1>

      <p className={styles.heroDesc}>
        Tecnico Superior en Desarrollo de Aplicaciones Web.
        <br />
        Perfil informatico con experiencia en desarrollo y operativa IT.
        <br />
        Del frontend al sistema, con incorporacion inmediata.
      </p>

      <div className={styles.tags}>
        {HERO_TAGS.map(tag => (
          <span
            key={tag.label}
            className={`${styles.tag} ${tag.accent ? styles.tagAccent : ''}`.trim()}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <div className={styles.infoGrid}>
        {INFO_CARDS.map(card => (
          <div key={card.label} className={styles.infoCard}>
            <div className={styles.infoLabel}>{card.label}</div>
            <div className={styles.infoValue}>{card.value}</div>
          </div>
        ))}
      </div>

      <SectionEyebrow label="// fuera del trabajo" style={{ marginTop: 8 }} />

      <div className={styles.hobbies}>
        {HOBBIES.map(h => (
          <div key={h.label} className={styles.hobbyChip}>
            <span className={styles.hobbyIcon}>
              <HobbyIcon hobby={h.label} className={styles.hobbyIconSvg} />
            </span>
            {h.label}
          </div>
        ))}
      </div>
    </div>
  )
}
