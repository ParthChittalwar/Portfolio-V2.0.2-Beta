export interface Project {
  id: string
  number: string
  name: string
  category: string
  problem: string
  solution: string
  tech: string[]
  github?: string
  live?: string
}

export interface Certification {
  name: string
  issuer: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface JourneyMilestone {
  year: string
  title: string
  description: string
  align: 'left' | 'right'
}
