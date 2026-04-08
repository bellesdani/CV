import type { CSSProperties } from 'react'
import styles from '../styles/SectionEyebrow.module.css'

interface Props {
  label: string
  style?: CSSProperties
}

export default function SectionEyebrow({ label, style }: Props) {
  const trimmed = label.trim()
  const hasCommentPrefix = trimmed.startsWith('//')
  const text = hasCommentPrefix ? trimmed.slice(2).trim() : trimmed

  return (
    <div className={styles.eyebrow} style={style}>
      {hasCommentPrefix ? <span className={styles.commentSlash}>//</span> : null}
      <span className={styles.commentText}>{text}</span>
    </div>
  )
}
