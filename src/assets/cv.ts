import type {
  ContactItem,
  EducationItem,
  Experience,
  HeroTag,
  Hobby,
  InfoCard,
  Locale,
  NavItem,
  ProjectItem,
  SectionId,
  StackCategory,
} from '../types'

type LocalizedText = {
  es: string
  en?: string
  fr?: string
  it?: string
}

const l = (es: string, en?: string, fr?: string, it?: string): LocalizedText => ({
  es,
  en,
  fr,
  it,
})

const t = (locale: Locale, value: LocalizedText): string => value[locale] ?? value.es

interface CvCopy {
  sectionLabelById: Record<SectionId, string>
  sidebarName: string
  sidebarRole: string
  sidebarNavigationLabel: string
  topbarStatusAvailable: string
  topbarLanguageLabel: string
  topbarThemeLabel: string
  topbarThemeDefaultOption: string
  topbarThemeDarkOption: string
  topbarThemeLightOption: string
  aboutEyebrow: string
  aboutIntroLines: [string, string, string]
  hobbiesEyebrow: string
  experienceEyebrow: string
  educationHeading: string
  workExperienceHeading: string
  projectsHeading: string
  projectsIntro: string
  aptitudesHeading: string
  availabilityHeading: string
  stackEyebrow: string
  stackIntro: string
}

export interface CvContent {
  navItems: NavItem[]
  heroTags: HeroTag[]
  infoCards: InfoCard[]
  hobbies: Hobby[]
  education: EducationItem[]
  experiences: Experience[]
  projects: ProjectItem[]
  stack: StackCategory[]
  aptitudes: string[]
  availability: string[]
  contactItems: ContactItem[]
  copy: CvCopy
}

export const LANGUAGE_OPTIONS: Array<{ value: Locale; label: string }> = [
  { value: 'es', label: 'ES' },
  { value: 'en', label: 'EN' },
  { value: 'fr', label: 'FR' },
  { value: 'it', label: 'IT' },
]

const SECTION_LABELS: Record<SectionId, LocalizedText> = {
  'sobre-mi': l('sobre mi', 'about me', 'profil', 'profilo'),
  experiencia: l('experiencia', 'experience', 'experience', 'esperienza'),
  stack: l('stack', 'stack', 'stack', 'stack'),
}

const NAV_SOURCE: Array<{ id: SectionId; label: LocalizedText }> = [
  { id: 'sobre-mi', label: SECTION_LABELS['sobre-mi'] },
  { id: 'experiencia', label: SECTION_LABELS.experiencia },
  { id: 'stack', label: SECTION_LABELS.stack },
]

const HERO_TAGS_SOURCE: Array<{ label: LocalizedText; accent: boolean }> = [
  { label: l('React', 'React', 'React', 'React'), accent: true },
  { label: l('TypeScript', 'TypeScript', 'TypeScript', 'TypeScript'), accent: true },
  { label: l('REST APIs', 'REST APIs', 'REST APIs', 'REST APIs'), accent: true },
  { label: l('JavaScript', 'JavaScript', 'JavaScript', 'JavaScript'), accent: false },
  { label: l('PHP', 'PHP', 'PHP', 'PHP'), accent: false },
  { label: l('HTML / CSS', 'HTML / CSS', 'HTML / CSS', 'HTML / CSS'), accent: false },
  { label: l('Angular', 'Angular', 'Angular', 'Angular'), accent: false },
  { label: l('Git', 'Git', 'Git', 'Git'), accent: false },
  { label: l('Sistemas', 'Systems', 'Systemes', 'Sistemi'), accent: false },
]

const INFO_CARDS_SOURCE: Array<{ label: LocalizedText; value: LocalizedText }> = [
  {
    label: l('// ubicacion', '// location', '// localisation', '// posizione'),
    value: l(
      'Castellon de la Plana, Espana',
      'Castellon de la Plana, Spain',
      'Castellon de la Plana, Espagne',
      'Castellon de la Plana, Spagna',
    ),
  },
  {
    label: l('// experiencia', '// experience', '// experience', '// esperienza'),
    value: l(
      '+2.5 anos en entorno real',
      '+2.5 years in production environments',
      '+2.5 ans en environnement reel',
      '+2.5 anni in ambiente reale',
    ),
  },
  {
    label: l('// idiomas', '// languages', '// langues', '// lingue'),
    value: l(
      'Castellano, Catalan, Ingles',
      'Spanish, Catalan, English',
      'Espagnol, Catalan, Anglais',
      'Spagnolo, Catalano, Inglese',
    ),
  },
  {
    label: l('// disponibilidad', '// availability', '// disponibilite', '// disponibilita'),
    value: l(
      'Inmediata, carnet B y vehiculo propio',
      'Immediate, driving license and own vehicle',
      'Immediate, permis B et vehicule personnel',
      'Immediata, patente B e auto propria',
    ),
  },
]

const HOBBIES_SOURCE: Array<{ icon: string; label: LocalizedText }> = [
  { icon: 'gym', label: l('entrenamiento', 'training', 'entrainement', 'allenamento') },
  { icon: 'surf', label: l('surf', 'surf', 'surf', 'surf') },
  { icon: 'mtb', label: l('montana', 'mountains', 'montagne', 'montagna') },
  { icon: 'fut', label: l('futbol', 'football', 'football', 'calcio') },
  { icon: 'dev', label: l('tecnologia', 'technology', 'technologie', 'tecnologia') },
]

const EDUCATION_SOURCE: Array<{
  title: LocalizedText
  center: LocalizedText
  location: LocalizedText
  detail?: LocalizedText
}> = [
  {
    title: l(
      'Tecnico Superior en Desarrollo de Aplicaciones Web',
      'Higher Technician in Web Application Development',
      'Technicien superieur en developpement d applications web',
      'Tecnico Superiore in Sviluppo di Applicazioni Web',
    ),
    center: l('IES El Caminas', 'IES El Caminas', 'IES El Caminas', 'IES El Caminas'),
    location: l(
      'Castellon de la Plana',
      'Castellon de la Plana',
      'Castellon de la Plana',
      'Castellon de la Plana',
    ),
  },
  {
    title: l(
      'Grado Online de Tecnicas de Aplicaciones de Software (en curso)',
      'Online Degree in Software Application Techniques (ongoing)',
      'Licence en ligne en techniques des applications logicielles (en cours)',
      'Laurea online in tecniche delle applicazioni software (in corso)',
    ),
    center: l('UOC', 'UOC', 'UOC', 'UOC'),
    location: l('Catalunya', 'Catalunya', 'Catalogne', 'Catalogna'),
    detail: l('Actualmente en curso', 'Currently in progress', 'Actuellement en cours', 'Attualmente in corso'),
  },
  {
    title: l(
      'Bachillerato cientifico',
      'Scientific high school diploma',
      'Baccalaureat scientifique',
      'Diploma scientifico',
    ),
    center: l('IES Ribalta', 'IES Ribalta', 'IES Ribalta', 'IES Ribalta'),
    location: l(
      'Castellon de la Plana',
      'Castellon de la Plana',
      'Castellon de la Plana',
      'Castellon de la Plana',
    ),
  },
  {
    title: l(
      'Monitor de Tiempo Libre y curso de socorrismo',
      'Leisure instructor certification and lifeguard training',
      'Formation animateur de loisirs et sauveteur',
      'Corso animatore tempo libero e salvataggio',
    ),
    center: l(
      'Formacion complementaria',
      'Complementary education',
      'Formation complementaire',
      'Formazione complementare',
    ),
    location: l(
      'Comunitat Valenciana',
      'Comunitat Valenciana',
      'Communaute valencienne',
      'Comunitat Valenciana',
    ),
  },
]

const EXPERIENCE_SOURCE: Array<{
  company: string
  role: LocalizedText
  date: LocalizedText
  description: LocalizedText
  tags: Array<LocalizedText>
  current?: boolean
}> = [
  {
    company: 'Equipeceramicas',
    role: l(
      'Soporte IT (contrato indefinido)',
      'IT support (permanent contract)',
      'Support IT (contrat permanent)',
      'Supporto IT (contratto a tempo indeterminato)',
    ),
    date: l('2024 - actualidad', '2024 - present', '2024 - actuel', '2024 - attuale'),
    current: true,
    description: l(
      'Soporte IT en empresa de +400 empleados, gestion de redes y resolucion de incidencias. Soporte al area de logistica a traves del ERP.',
      'IT support in a company with 400+ employees, including network management and incident resolution. Also supporting logistics through the ERP.',
      'Support IT dans une entreprise de plus de 400 employes, gestion reseau et resolution d incidents. Support de la logistique via l ERP.',
      'Supporto IT in un azienda con oltre 400 dipendenti, gestione reti e risoluzione incidenti. Supporto alla logistica tramite ERP.',
    ),
    tags: [
      l('Soporte IT', 'IT Support', 'Support IT', 'Supporto IT'),
      l('Redes', 'Networking', 'Reseaux', 'Reti'),
      l('ERP', 'ERP', 'ERP', 'ERP'),
      l('Logistica', 'Logistics', 'Logistique', 'Logistica'),
      l('Incidencias', 'Incident Management', 'Gestion des incidents', 'Gestione incidenti'),
    ],
  },
  {
    company: 'NAIS',
    role: l(
      'Desarrollador fullstack (contrato indefinido)',
      'Fullstack developer (permanent contract)',
      'Developpeur fullstack (contrat permanent)',
      'Sviluppatore fullstack (contratto a tempo indeterminato)',
    ),
    date: l('2024 - actualidad', '2024 - present', '2024 - actuel', '2024 - attuale'),
    current: true,
    description: l(
      'Desarrollo fullstack con PHP y JavaScript, mas proyectos en React con TypeScript. Gestion del e-commerce con tareas integradas de HubSpot.',
      'Fullstack development with PHP and JavaScript, plus React projects in TypeScript. E-commerce management with integrated HubSpot tasks.',
      'Developpement fullstack avec PHP et JavaScript, plus projets React en TypeScript. Gestion e-commerce avec taches integrees HubSpot.',
      'Sviluppo fullstack con PHP e JavaScript, oltre a progetti React con TypeScript. Gestione e-commerce con attivita integrate HubSpot.',
    ),
    tags: [
      l('PHP', 'PHP', 'PHP', 'PHP'),
      l('JavaScript', 'JavaScript', 'JavaScript', 'JavaScript'),
      l('React', 'React', 'React', 'React'),
      l('TypeScript', 'TypeScript', 'TypeScript', 'TypeScript'),
      l('E-commerce', 'E-commerce', 'E-commerce', 'E-commerce'),
      l('HubSpot', 'HubSpot', 'HubSpot', 'HubSpot'),
    ],
  },
  {
    company: 'Consum & Capgemini',
    role: l(
      'Contrato de practicas (frontend)',
      'Internship contract (frontend)',
      'Contrat de stage (frontend)',
      'Contratto di tirocinio (frontend)',
    ),
    date: l('2023', '2023', '2023', '2023'),
    description: l(
      'Desarrollo para web de incentivos con Angular y SCSS (frontend) en un equipo IT.',
      'Development for an incentives web platform with Angular and SCSS (frontend) within an IT team.',
      'Developpement d une plateforme web d incentives avec Angular et SCSS (frontend) dans une equipe IT.',
      'Sviluppo di una piattaforma web incentivi con Angular e SCSS (frontend) in un team IT.',
    ),
    tags: [
      l('Angular', 'Angular', 'Angular', 'Angular'),
      l('SCSS', 'SCSS', 'SCSS', 'SCSS'),
      l('Frontend', 'Frontend', 'Frontend', 'Frontend'),
      l('Equipo IT', 'IT Team', 'Equipe IT', 'Team IT'),
    ],
  },
  {
    company: 'Cuatroochenta',
    role: l(
      'Becario en formacion',
      'Trainee intern',
      'Stagiaire en formation',
      'Tirocinante in formazione',
    ),
    date: l('2021', '2021', '2021', '2021'),
    description: l(
      'Empresa de informatica formandome en backend y frontend.',
      'Technology company where I trained in backend and frontend.',
      'Entreprise informatique ou je me suis forme en backend et frontend.',
      'Azienda informatica dove mi sono formato su backend e frontend.',
    ),
    tags: [
      l('Backend', 'Backend', 'Backend', 'Backend'),
      l('Frontend', 'Frontend', 'Frontend', 'Frontend'),
      l('Formacion', 'Training', 'Formation', 'Formazione'),
    ],
  },
  {
    company: 'Torresport Escuela de Verano',
    role: l(
      'Monitor de escuela de verano (contrato temporal)',
      'Summer school monitor (temporary contract)',
      'Animateur ecole d ete (contrat temporaire)',
      'Animatore scuola estiva (contratto temporaneo)',
    ),
    date: l('2021 - 2023', '2021 - 2023', '2021 - 2023', '2021 - 2023'),
    description: l(
      'Monitor de escuela de verano.',
      'Summer school monitor.',
      'Animateur d ecole d ete.',
      'Animatore scuola estiva.',
    ),
    tags: [
      l('Monitor', 'Monitor', 'Animateur', 'Animatore'),
      l('Contrato temporal', 'Temporary contract', 'Contrat temporaire', 'Contratto temporaneo'),
      l('Soporte IT', 'IT Support', 'Support IT', 'Supporto IT'),
    ],
  },
]

const PROJECTS_SOURCE: Array<{ title: LocalizedText; description: LocalizedText }> = [
  {
    title: l(
      'Proximamente: prevision de oleaje con AEMET',
      'Coming soon: wave forecast with AEMET',
      'Bientot: prevision de houle avec AEMET',
      'Prossimamente: previsione onde con AEMET',
    ),
    description: l(
      'Integracion ya hecha: llamadas a la API de AEMET para consultar y mostrar datos de oleaje.',
      'Already implemented: API calls to AEMET to fetch and display wave data.',
      'Deja implemente: appels API AEMET pour consulter et afficher la houle.',
      'Gia implementato: chiamate API AEMET per consultare e mostrare dati del moto ondoso.',
    ),
  },
  {
    title: l(
      'Proximamente: chatbot con API de OpenAI',
      'Coming soon: chatbot with OpenAI API',
      'Bientot: chatbot avec API OpenAI',
      'Prossimamente: chatbot con API OpenAI',
    ),
    description: l(
      'Base funcional completada: asistente conversacional conectado y respondiendo desde la API.',
      'Functional base completed: conversational assistant connected and responding from the API.',
      'Base fonctionnelle completee: assistant conversationnel connecte a l API.',
      'Base funzionale completata: assistente conversazionale collegato all API.',
    ),
  },
  {
    title: l(
      'Proximamente: visualizador 3D de ambientes (Maticad)',
      'Coming soon: 3D environment viewer (Maticad)',
      'Bientot: visualiseur 3D d environnements (Maticad)',
      'Prossimamente: visualizzatore 3D di ambienti (Maticad)',
    ),
    description: l(
      'Primer desarrollo terminado: vista 3D con implementacion de azulejos y navegacion del entorno.',
      'First implementation finished: 3D view with tile integration and scene navigation.',
      'Premiere implementation terminee: vue 3D avec carrelages et navigation de scene.',
      'Prima implementazione conclusa: vista 3D con piastrelle e navigazione ambiente.',
    ),
  },
  {
    title: l(
      'Proximamente: imagenes 360 con Gemini (nanoBanana)',
      'Coming soon: 360 images with Gemini (nanoBanana)',
      'Bientot: images 360 avec Gemini (nanoBanana)',
      'Prossimamente: immagini 360 con Gemini (nanoBanana)',
    ),
    description: l(
      'Avance completado: generador y visor inicial conectados a la API de Google Gemini.',
      'Progress completed: initial generator and viewer connected to the Google Gemini API.',
      'Avancement realise: generateur et visualiseur initiaux relies a l API Google Gemini.',
      'Avanzamento completato: generatore e visualizzatore iniziali collegati all API Google Gemini.',
    ),
  },
]

const STACK_SOURCE: Array<{
  title: LocalizedText
  items: Array<{ name: string; level: number; label: LocalizedText }>
}> = [
  {
    title: l('frontend', 'frontend', 'frontend', 'frontend'),
    items: [
      { name: 'React', level: 82, label: l('solido', 'solid', 'solide', 'solido') },
      { name: 'TypeScript', level: 75, label: l('solido', 'solid', 'solide', 'solido') },
      { name: 'JavaScript', level: 88, label: l('avanzado', 'advanced', 'avance', 'avanzato') },
      { name: 'Angular', level: 65, label: l('intermedio', 'intermediate', 'intermediaire', 'intermedio') },
      { name: 'HTML / CSS', level: 95, label: l('avanzado', 'advanced', 'avance', 'avanzato') },
      { name: 'SCSS', level: 80, label: l('solido', 'solid', 'solide', 'solido') },
    ],
  },
  {
    title: l('backend y apis', 'backend and apis', 'backend et apis', 'backend e apis'),
    items: [
      { name: 'PHP', level: 72, label: l('solido', 'solid', 'solide', 'solido') },
      { name: 'REST APIs', level: 70, label: l('intermedio', 'intermediate', 'intermediaire', 'intermedio') },
      { name: 'Git', level: 78, label: l('solido', 'solid', 'solide', 'solido') },
      { name: 'jQuery', level: 75, label: l('solido', 'solid', 'solide', 'solido') },
    ],
  },
  {
    title: l('sistemas y redes', 'systems and networking', 'systemes et reseaux', 'sistemi e reti'),
    items: [
      { name: 'UniFi', level: 65, label: l('intermedio', 'intermediate', 'intermediaire', 'intermedio') },
      { name: 'VLANs', level: 60, label: l('intermedio', 'intermediate', 'intermediaire', 'intermedio') },
      { name: 'IT Support', level: 80, label: l('solido', 'solid', 'solide', 'solido') },
    ],
  },
]

const APTITUDES_SOURCE: LocalizedText[] = [
  l('Trabajo en equipo', 'Teamwork', 'Travail en equipe', 'Lavoro in team'),
  l('Comunicacion', 'Communication', 'Communication', 'Comunicazione'),
  l('Resolucion de problemas', 'Problem solving', 'Resolution de problemes', 'Problem solving'),
  l('Aprendizaje rapido', 'Fast learning', 'Apprentissage rapide', 'Apprendimento rapido'),
  l('Adaptacion a cambios', 'Adaptability', 'Adaptation', 'Adattabilita'),
  l('Proactividad', 'Proactivity', 'Proactivite', 'Proattivita'),
]

const AVAILABILITY_SOURCE: LocalizedText[] = [
  l(
    'Carnet de conducir B y coche propio.',
    'Driving license and own vehicle.',
    'Permis B et vehicule personnel.',
    'Patente B e auto propria.',
  ),
  l(
    'Disponibilidad completa e incorporacion inmediata.',
    'Full availability and immediate start.',
    'Disponibilite totale et integration immediate.',
    'Disponibilita completa e inserimento immediato.',
  ),
]

const CONTACT_ITEMS_SOURCE: Array<{ type: LocalizedText; value: LocalizedText; href?: string }> = [
  {
    type: l('// email', '// email', '// email', '// email'),
    value: l('bellesdani@gmail.com', 'bellesdani@gmail.com', 'bellesdani@gmail.com', 'bellesdani@gmail.com'),
    href: 'mailto:bellesdani@gmail.com',
  },
  {
    type: l('// linkedin', '// linkedin', '// linkedin', '// linkedin'),
    value: l(
      'linkedin / daniel-belles-vallet',
      'linkedin / daniel-belles-vallet',
      'linkedin / daniel-belles-vallet',
      'linkedin / daniel-belles-vallet',
    ),
    href: 'https://linkedin.com/in/daniel-belles-vallet',
  },
  {
    type: l('// telefono', '// phone', '// telephone', '// telefono'),
    value: l('+34 601 073 561', '+34 601 073 561', '+34 601 073 561', '+34 601 073 561'),
    href: 'tel:+34601073561',
  },
  {
    type: l('// ubicacion', '// location', '// localisation', '// posizione'),
    value: l(
      'Castellon de la Plana, Espana',
      'Castellon de la Plana, Spain',
      'Castellon de la Plana, Espagne',
      'Castellon de la Plana, Spagna',
    ),
  },
]

const COPY_SOURCE = {
  sidebarName: l('Daniel Belles', 'Daniel Belles', 'Daniel Belles', 'Daniel Belles'),
  sidebarRole: l('Fullstack Developer', 'Fullstack Developer', 'Developpeur Fullstack', 'Fullstack Developer'),
  sidebarNavigationLabel: l('navegacion', 'navigation', 'navigation', 'navigazione'),
  topbarStatusAvailable: l('disponible', 'available', 'disponible', 'disponibile'),
  topbarLanguageLabel: l('idioma', 'language', 'langue', 'lingua'),
  topbarThemeLabel: l('tema', 'theme', 'theme', 'tema'),
  topbarThemeDefaultOption: l('predeterminado', 'default', 'par defaut', 'predefinito'),
  topbarThemeDarkOption: l('oscuro', 'dark', 'sombre', 'scuro'),
  topbarThemeLightOption: l('luz', 'light', 'clair', 'chiaro'),
  aboutEyebrow: l('// sobre-mi', '// about-me', '// profil', '// profilo'),
  aboutIntroLines: [
    l(
      'Tecnico Superior en Desarrollo de Aplicaciones Web.',
      'Higher Technician in Web Application Development.',
      'Technicien superieur en developpement d applications web.',
      'Tecnico Superiore in Sviluppo di Applicazioni Web.',
    ),
    l(
      'Perfil informatico con experiencia en desarrollo y operativa IT.',
      'IT profile with experience in software development and IT operations.',
      'Profil IT avec experience en developpement logiciel et operations IT.',
      'Profilo IT con esperienza nello sviluppo software e nelle operazioni IT.',
    ),
    l(
      'Del frontend al sistema, con incorporacion inmediata.',
      'From frontend to systems, ready for immediate onboarding.',
      'Du frontend aux systemes, disponible immediatement.',
      'Dal frontend ai sistemi, con disponibilita immediata.',
    ),
  ] as const,
  hobbiesEyebrow: l('// fuera del trabajo', '// outside-work', '// hors-travail', '// fuori-dal-lavoro'),
  experienceEyebrow: l(
    '// experiencia-y-formacion',
    '// experience-and-education',
    '// experience-et-formation',
    '// esperienza-e-formazione',
  ),
  educationHeading: l('Formacion', 'Education', 'Formation', 'Formazione'),
  workExperienceHeading: l(
    'Experiencia laboral',
    'Work experience',
    'Experience professionnelle',
    'Esperienza lavorativa',
  ),
  projectsHeading: l(
    'Proyectos destacables',
    'Highlighted projects',
    'Projets remarquables',
    'Progetti rilevanti',
  ),
  projectsIntro: l(
    'Version portfolio proximamente. Aqui dejo un resumen breve de lo que ya tengo implementado.',
    'Portfolio version coming soon. Here is a brief summary of what is already implemented.',
    'Version portfolio bientot. Voici un resume bref de ce qui est deja implemente.',
    'Versione portfolio in arrivo. Qui c e un breve riepilogo di cio che e gia implementato.',
  ),
  aptitudesHeading: l('Aptitudes', 'Skills', 'Aptitudes', 'Competenze personali'),
  availabilityHeading: l('Disponibilidad', 'Availability', 'Disponibilite', 'Disponibilita'),
  stackEyebrow: l(
    '// conocimientos-tecnicos',
    '// technical-stack',
    '// competences-techniques',
    '// competenze-tecniche',
  ),
  stackIntro: l(
    'Nivel orientativo segun experiencia real en proyectos, mantenimiento y soporte en produccion.',
    'Indicative level based on real project work, maintenance and production support.',
    'Niveau indicatif base sur l experience reelle en projets, maintenance et support de production.',
    'Livello indicativo basato su esperienza reale in progetti, manutenzione e supporto in produzione.',
  ),
}

export function getCvContent(locale: Locale): CvContent {
  return {
    navItems: NAV_SOURCE.map(item => ({
      id: item.id,
      label: t(locale, item.label),
    })),
    heroTags: HERO_TAGS_SOURCE.map(tag => ({
      label: t(locale, tag.label),
      accent: tag.accent,
    })),
    infoCards: INFO_CARDS_SOURCE.map(card => ({
      label: t(locale, card.label),
      value: t(locale, card.value),
    })),
    hobbies: HOBBIES_SOURCE.map(hobby => ({
      icon: hobby.icon,
      label: t(locale, hobby.label),
    })),
    education: EDUCATION_SOURCE.map(item => ({
      title: t(locale, item.title),
      center: t(locale, item.center),
      location: t(locale, item.location),
      detail: item.detail ? t(locale, item.detail) : undefined,
    })),
    experiences: EXPERIENCE_SOURCE.map(item => ({
      company: item.company,
      role: t(locale, item.role),
      date: t(locale, item.date),
      description: t(locale, item.description),
      tags: item.tags.map(tag => t(locale, tag)),
      current: item.current,
    })),
    projects: PROJECTS_SOURCE.map(project => ({
      title: t(locale, project.title),
      description: t(locale, project.description),
    })),
    stack: STACK_SOURCE.map(category => ({
      title: t(locale, category.title),
      items: category.items.map(item => ({
        name: item.name,
        level: item.level,
        label: t(locale, item.label),
      })),
    })),
    aptitudes: APTITUDES_SOURCE.map(item => t(locale, item)),
    availability: AVAILABILITY_SOURCE.map(item => t(locale, item)),
    contactItems: CONTACT_ITEMS_SOURCE.map(item => ({
      type: t(locale, item.type),
      value: t(locale, item.value),
      href: item.href,
    })),
    copy: {
      sectionLabelById: {
        'sobre-mi': t(locale, SECTION_LABELS['sobre-mi']),
        experiencia: t(locale, SECTION_LABELS.experiencia),
        stack: t(locale, SECTION_LABELS.stack),
      },
      sidebarName: t(locale, COPY_SOURCE.sidebarName),
      sidebarRole: t(locale, COPY_SOURCE.sidebarRole),
      sidebarNavigationLabel: t(locale, COPY_SOURCE.sidebarNavigationLabel),
      topbarStatusAvailable: t(locale, COPY_SOURCE.topbarStatusAvailable),
      topbarLanguageLabel: t(locale, COPY_SOURCE.topbarLanguageLabel),
      topbarThemeLabel: t(locale, COPY_SOURCE.topbarThemeLabel),
      topbarThemeDefaultOption: t(locale, COPY_SOURCE.topbarThemeDefaultOption),
      topbarThemeDarkOption: t(locale, COPY_SOURCE.topbarThemeDarkOption),
      topbarThemeLightOption: t(locale, COPY_SOURCE.topbarThemeLightOption),
      aboutEyebrow: t(locale, COPY_SOURCE.aboutEyebrow),
      aboutIntroLines: [
        t(locale, COPY_SOURCE.aboutIntroLines[0]),
        t(locale, COPY_SOURCE.aboutIntroLines[1]),
        t(locale, COPY_SOURCE.aboutIntroLines[2]),
      ],
      hobbiesEyebrow: t(locale, COPY_SOURCE.hobbiesEyebrow),
      experienceEyebrow: t(locale, COPY_SOURCE.experienceEyebrow),
      educationHeading: t(locale, COPY_SOURCE.educationHeading),
      workExperienceHeading: t(locale, COPY_SOURCE.workExperienceHeading),
      projectsHeading: t(locale, COPY_SOURCE.projectsHeading),
      projectsIntro: t(locale, COPY_SOURCE.projectsIntro),
      aptitudesHeading: t(locale, COPY_SOURCE.aptitudesHeading),
      availabilityHeading: t(locale, COPY_SOURCE.availabilityHeading),
      stackEyebrow: t(locale, COPY_SOURCE.stackEyebrow),
      stackIntro: t(locale, COPY_SOURCE.stackIntro),
    },
  }
}
