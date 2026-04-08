import { APTITUDES, AVAILABILITY, EDUCATION, EXPERIENCES } from '../assets/cv'
import SectionEyebrow from '../components/SectionEyebrow'
import styles from '../styles/Experiencia.module.css'

export default function Experiencia() {
  return (
    <div className={styles.section}>
      <SectionEyebrow label="// experiencia-y-formacion" />

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Formacion</h2>
        <div className={styles.educationGrid}>
          {EDUCATION.map(item => (
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
        <h2 className={styles.blockTitle}>Experiencia laboral</h2>
        <div className={styles.timeline}>
          {EXPERIENCES.map(exp => (
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
        <h2 className={styles.blockTitle}>Aptitudes</h2>
        <div className={styles.skillsGrid}>
          {APTITUDES.map(skill => (
            <span key={skill} className={styles.skillChip}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.block}>
        <h2 className={styles.blockTitle}>Disponibilidad</h2>
        <ul className={styles.availabilityList}>
          {AVAILABILITY.map(item => (
            <li key={item} className={styles.availabilityItem}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
