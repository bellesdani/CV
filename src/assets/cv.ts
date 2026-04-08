import type {
  ContactItem,
  EducationItem,
  Experience,
  Hobby,
  NavItem,
  StackCategory,
} from '../types'

export const NAV_ITEMS: NavItem[] = [
  { id: 'sobre-mi', label: 'sobre mi' },
  { id: 'experiencia', label: 'experiencia' },
  { id: 'stack', label: 'stack' },
]

export const HERO_TAGS = [
  { label: 'React', accent: true },
  { label: 'TypeScript', accent: true },
  { label: 'APIs REST', accent: true },
  { label: 'JavaScript', accent: false },
  { label: 'PHP', accent: false },
  { label: 'HTML / CSS', accent: false },
  { label: 'Angular', accent: false },
  { label: 'Git', accent: false },
  { label: 'Sistemas', accent: false },
]

export const INFO_CARDS = [
  { label: '// ubicacion', value: 'Castellon de la Plana, Espana' },
  { label: '// experiencia', value: '+2.5 anos en entorno real' },
  { label: '// idiomas', value: 'Castellano, Catalan, Ingles' },
  { label: '// disponibilidad', value: 'Inmediata, carnet B y vehiculo propio' },
]

export const HOBBIES: Hobby[] = [
  { icon: 'GYM', label: 'entrenamiento' },
  { icon: 'SURF', label: 'surf' },
  { icon: 'MTB', label: 'montana' },
  { icon: 'FUT', label: 'futbol' },
  { icon: 'DEV', label: 'tecnologia' },
]

export const EDUCATION: EducationItem[] = [
  {
    title: 'Tecnico Superior en Desarrollo de Aplicaciones Web',
    center: 'IES El Caminas',
    location: 'Castellon de la Plana',
  },
  {
    title: 'Grado Online de Tecnicas de Aplicaciones de Software (en curso)',
    center: 'UOC',
    location: 'Catalunya',
    detail: 'Actualmente en curso',
  },
  {
    title: 'Bachillerato cientifico',
    center: 'IES Ribalta',
    location: 'Castellon de la Plana',
  },
  {
    title: 'Monitor de Tiempo Libre y curso de socorrismo',
    center: 'Formacion complementaria',
    location: 'Comunitat Valenciana',
  },
]

export const EXPERIENCES: Experience[] = [
  {
    company: 'NAIS | Equipe Ceramicas',
    role: 'Fullstack developer e infraestructura IT',
    date: '2022 - actualidad',
    current: true,
    description:
      'Soporte tecnologico para mas de 500 empleados, desarrollo y mantenimiento web, redes, VLANs, sistemas y operativa IT diaria.',
    tags: ['HTML', 'JavaScript', 'PHP', 'Redes', 'VLANs', 'UniFi', 'Soporte IT'],
  },
  {
    company: 'Consum + Capgemini',
    role: 'Frontend developer (practicas)',
    date: '2023',
    description:
      'Desarrollo de casos de uso en entorno empresarial con Angular y SCSS, trabajando sobre dinamicas de equipo y entrega continua.',
    tags: ['Angular', 'SCSS', 'TypeScript', 'Trabajo en equipo'],
  },
  {
    company: 'Cuatroochenta',
    role: 'Developer en formacion',
    date: '2021',
    description:
      'Primera etapa profesional con exposicion a proyectos reales de frontend y backend en empresa tecnologica.',
    tags: ['Backend', 'Frontend', 'Aprendizaje continuo'],
  },
]

export const STACK: StackCategory[] = [
  {
    title: 'frontend',
    items: [
      { name: 'React', level: 82, label: 'solido' },
      { name: 'TypeScript', level: 75, label: 'solido' },
      { name: 'JavaScript', level: 88, label: 'avanzado' },
      { name: 'Angular', level: 65, label: 'intermedio' },
      { name: 'HTML / CSS', level: 95, label: 'avanzado' },
      { name: 'SCSS', level: 80, label: 'solido' },
    ],
  },
  {
    title: 'backend y apis',
    items: [
      { name: 'PHP', level: 72, label: 'solido' },
      { name: 'APIs REST', level: 70, label: 'intermedio' },
      { name: 'Git', level: 78, label: 'solido' },
      { name: 'jQuery', level: 75, label: 'solido' },
    ],
  },
  {
    title: 'sistemas y redes',
    items: [
      { name: 'UniFi', level: 65, label: 'intermedio' },
      { name: 'VLANs', level: 60, label: 'intermedio' },
      { name: 'Soporte IT', level: 80, label: 'solido' },
    ],
  },
]

export const APTITUDES = [
  'Trabajo en equipo',
  'Comunicacion',
  'Resolucion de problemas',
  'Aprendizaje rapido',
  'Adaptacion a cambios',
  'Proactividad',
]

export const AVAILABILITY = [
  'Carnet de conducir B y coche propio.',
  'Disponibilidad completa e incorporacion inmediata.',
]

export const CONTACT_ITEMS: ContactItem[] = [
  { type: '// email', value: 'bellesdani@gmail.com', href: 'mailto:bellesdani@gmail.com' },
  {
    type: '// linkedin',
    value: 'daniel-belles-vallet',
    href: 'https://linkedin.com/in/daniel-belles-vallet',
  },
  { type: '// telefono', value: '+34 601 073 561', href: 'tel:+34601073561' },
  { type: '// ubicacion', value: 'Castellon de la Plana, Espana' },
]
