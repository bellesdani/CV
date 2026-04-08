import { STACK } from '../assets/cv'
import { StackIcon } from '../components/CvIcons'
import SectionEyebrow from '../components/SectionEyebrow'
import styles from '../styles/Stack.module.css'

export default function Stack() {
  return (
    <div className={styles.section}>
      <SectionEyebrow label="// conocimientos-tecnicos" />
      <p className={styles.intro}>
        Nivel orientativo segun experiencia real en proyectos, mantenimiento y soporte en produccion.
      </p>

      {STACK.map(category => (
        <div key={category.title} className={styles.categoryBlock}>
          <div className={styles.categoryTitle}>{category.title}</div>
          <div className={styles.grid}>
            {category.items.map(item => (
              <div key={item.name} className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.stackIcon}>
                    <StackIcon tech={item.name} className={styles.stackIconSvg} />
                  </span>
                  <div className={styles.cardName}>{item.name}</div>
                </div>
                <div className={styles.track}>
                  <div className={styles.fill} style={{ width: `${item.level}%` }} />
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.cardLabel}>{item.label}</span>
                  <span className={styles.cardPercent}>{item.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
