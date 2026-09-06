export type Project = {
  slug: 'tor-system' | 'bayani'
  title: string
  eyebrow: string
  description: string
  purpose: string
  role: string
  technologies: string[]
  repository?: string
  features: string[]
  future: string[]
  status: string
  visual: 'system' | 'game'
  screenshots?: string[]
}

export const projects: Project[] = [
  {
    slug: 'tor-system',
    title: 'Student Appointment and Academic Service Request System for NORSU Bais Campus 1',
    eyebrow: 'TOR System',
    description: 'A web-based academic service and appointment system being developed as a local academic project.',
    purpose: 'To support a more organized way of handling student appointment and academic service requests at NORSU Bais Campus I.',
    role: 'Development & system analysis',
    technologies: ['PHP', 'Laravel', 'MySQL', 'MVC', 'Tailwind CSS', 'Flowbite', 'Font Awesome', 'XAMPP'],
    repository: 'https://github.com/Gai2x/norsu-tor-system',
    features: ['Academic service request workflows', 'Appointment-focused system design', 'Database-driven application structure', 'Responsive interface work'],
    future: ['Refine request and appointment workflows', 'Document the complete feature set', 'Continue testing and improving the user experience'],
    status: 'In Development · Local academic project',
    visual: 'system',
    screenshots: [
      '/images/tor-system/TorLandingPage.png',
      '/images/tor-system/Screenshot 2026-04-25 144533.png',
      '/images/tor-system/Screenshot 2026-05-13 120705.png',
      '/images/tor-system/Screenshot 2026-05-13 120300.png',
    ],
  },
  {
    slug: 'bayani',
    title: 'BAYANI',
    eyebrow: 'Filipino-inspired roguelite',
    description: 'A team-developed 2D/2.5D roguelite survival game drawing from Filipino culture, mythology, heroes, and artifacts.',
    purpose: 'To create a survival game experience shaped by Filipino-inspired characters, creatures, items, and world concepts.',
    role: 'Game developer / programmer · Team project',
    technologies: ['Godot Engine', 'GDScript'],
    features: ['Wave-based survival concepts', 'Combat, health, score, and progression systems', 'Character abilities and selection concepts', 'Filipino-inspired agimat and mythical creatures', 'Map, dialogue, cinematic, and navigation concepts'],
    future: ['Share gameplay captures and videos', 'Refine core systems with the team', 'Add repository link when available'],
    status: 'In Development · Team project',
    visual: 'game',
  },
]

export const skills = [
  { title: 'Programming & development', level: 'Working knowledge', items: ['PHP', 'GDScript', 'C#', 'HTML', 'CSS', 'JavaScript / TypeScript'] },
  { title: 'Frameworks & tools', level: 'Familiar with / currently learning', items: ['Laravel', 'Tailwind CSS', 'Flowbite', 'Godot', 'Unity', 'Git', 'GitHub', 'XAMPP'] },
  { title: 'Data', level: 'Working knowledge', items: ['MySQL', 'Database-driven applications'] },
]
