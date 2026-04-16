import { useI18n } from '../i18n/I18nProvider'
import SectionEyebrow from '../components/SectionEyebrow'
import styles from '../styles/Experiencia.module.css'

export default function Experiencia() {
  const { content } = useI18n()

  return (
    <div className={styles.section}>
      <SectionEyebrow label={content.copy.experienceEyebrow} />

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>{content.copy.educationHeading}</h2>
        <div className={styles.educationGrid}>
          {content.education.map(item => (
            <article key={item.title} className={styles.educationCard}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardMeta}>{item.center}</p>
              <p className={styles.cardMeta}>{item.location}</p>
              {item.detail ? <p className={styles.cardDetail}>{item.detail}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>{content.copy.workExperienceHeading}</h2>
        <div className={styles.timeline}>
          {content.experiences.map(exp => (
            <article key={exp.company} className={styles.timelineItem}>
              <span className={styles.dot} aria-hidden />
              <div className={styles.experienceCard}>
                <header className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.cardTitle}>{exp.company}</h3>
                    <p className={styles.role}>{exp.role}</p>
                  </div>
                  <p className={styles.date}>{exp.date}</p>
                </header>

                <p className={styles.description}>{exp.description}</p>

                <div className={styles.tags}>
                  {exp.tags.map(tag => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>{content.copy.projectsHeading}</h2>
        <p className={styles.projectsIntro}>{content.copy.projectsIntro}</p>
        <div className={styles.projectsGrid}>
          {content.projects.map(project => (
            <article key={project.title} className={styles.projectCard}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>{content.copy.aptitudesHeading}</h2>
        <div className={styles.skillsGrid}>
          {content.aptitudes.map(skill => (
            <span key={skill} className={styles.skillChip}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>{content.copy.availabilityHeading}</h2>
        <ul className={styles.availabilityList}>
          {content.availability.map(item => (
            <li key={item} className={styles.availabilityItem}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
