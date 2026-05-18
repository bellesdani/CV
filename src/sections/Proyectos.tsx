import { useI18n } from '../i18n/I18nProvider'
import SectionEyebrow from '../components/SectionEyebrow'
import styles from '../styles/Proyectos.module.css'

export default function Proyectos() {
  const { content } = useI18n()
  const featuredProjects = content.projects.filter(project => project.group === 'featured')
  const firstProjects = content.projects.filter(project => project.group === 'first')

  return (
    <div className={styles.section}>
      <SectionEyebrow label={content.copy.projectsEyebrow} />

      <header className={styles.header}>
        <h1 className={styles.title}>{content.copy.projectsHeading}</h1>
        <p className={styles.intro}>{content.copy.projectsIntro}</p>
      </header>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>{content.copy.projectsFeaturedHeading}</h2>
        <div className={styles.featuredGrid}>
          {featuredProjects.map(project => (
            <article key={project.title} className={styles.projectCard}>
              {project.media?.type === 'video' ? (
                <video className={styles.projectVideo} src={project.media.src} controls muted playsInline preload="metadata" />
              ) : null}
              {project.media?.type === 'image' ? (
                <img className={styles.projectMedia} src={project.media.src} alt={project.media.alt ?? project.title} />
              ) : null}
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              {project.link ? (
                <a className={styles.projectLink} href={project.link.href} target="_blank" rel="noreferrer">
                  {project.link.label}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>{content.copy.projectsFirstHeading}</h2>
        <div className={styles.firstGrid}>
          {firstProjects.map(project => (
            <article key={project.title} className={styles.compactCard}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
