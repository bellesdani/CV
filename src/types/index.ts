export type SectionId = 'sobre-mi' | 'experiencia' | 'stack'
export type Locale = 'es' | 'en' | 'fr' | 'it'

export interface NavItem {
  id: SectionId
  label: string
}

export interface HeroTag {
  label: string
  accent: boolean
}

export interface InfoCard {
  label: string
  value: string
}

export interface Experience {
  company: string
  role: string
  date: string
  description: string
  tags: string[]
  current?: boolean
}

export interface ProjectItem {
  title: string
  description: string
}

export interface EducationItem {
  title: string
  center: string
  location: string
  detail?: string
}

export interface StackItem {
  name: string
  level: number // 0-100
  label: string
}

export interface StackCategory {
  title: string
  items: StackItem[]
}

export interface Hobby {
  icon: string
  label: string
}

export interface ContactItem {
  type: string
  value: string
  href?: string
}
