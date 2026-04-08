import { useState } from 'react'
import type { SectionId } from '../types'

export function useSection(initial: SectionId = 'sobre-mi') {
  const [active, setActive] = useState<SectionId>(initial)
  return { active, setActive }
}