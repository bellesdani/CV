import { HobbyIcon } from '../components/CvIcons'
import { useI18n } from '../i18n/I18nProvider'
import SectionEyebrow from '../components/SectionEyebrow'
import styles from '../styles/SobreMi.module.css'

export default function SobreMi() {
  const { content } = useI18n()

  return (
    <div className={styles.section}>
      <SectionEyebrow label={content.copy.aboutEyebrow} />

      <h1 className={styles.heroName}>
        Daniel
        <br />
        <em>Belles.</em>
      </h1>

      <p className={styles.heroDesc}>
        {content.copy.aboutIntroLines[0]}
        <br />
        {content.copy.aboutIntroLines[1]}
        <br />
        {content.copy.aboutIntroLines[2]}
      </p>

      <div className={styles.tags}>
        {content.heroTags.map(tag => (
          <span
            key={tag.label}
            className={`${styles.tag} ${tag.accent ? styles.tagAccent : ''}`.trim()}
          >
            {tag.label}
          </span>
        ))}
      </div>

      <div className={styles.infoGrid}>
        {content.infoCards.map(card => (
          <div key={card.label} className={styles.infoCard}>
            <div className={styles.infoLabel}>{card.label}</div>
            <div className={styles.infoValue}>{card.value}</div>
          </div>
        ))}
      </div>

      <SectionEyebrow label={content.copy.hobbiesEyebrow} style={{ marginTop: 8 }} />

      <div className={styles.hobbies}>
        {content.hobbies.map(h => (
          <div key={h.label} className={styles.hobbyChip}>
            <span className={styles.hobbyIcon}>
              <HobbyIcon hobbyKey={h.icon} className={styles.hobbyIconSvg} />
            </span>
            {h.label}
          </div>
        ))}
      </div>
    </div>
  )
}
