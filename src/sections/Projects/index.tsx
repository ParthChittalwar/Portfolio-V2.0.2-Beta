import { useState } from 'react'
import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import AnimatedHeading from '@/components/animations/AnimatedHeading'

const projects = [
  {
    number: '01',
    name: 'AI-Powered Portfolio Website',
    category: 'Frontend',
    problem: 'Needed a professional platform to showcase my skills, projects, and learning journey.',
    solution:
      'Built a modern portfolio website using React and modern frontend technologies with a focus on responsiveness, clean design, and user experience.',
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ParthChittalwar',
  },
  {
    number: '02',
    name: 'Student Management System',
    category: 'C++ / OOP',
    problem: 'Managing student records manually becomes difficult as data grows.',
    solution:
      'Developed a C++ application using Object-Oriented Programming to store, update, and manage student information with persistent file-based storage.',
    tech: ['C++', 'OOP', 'File Handling'],
    github: 'https://github.com/ParthChittalwar',
  },
  {
    number: '03',
    name: 'Responsive Frontend Web Applications',
    category: 'HTML / CSS / JS',
    problem:
      'Wanted to sharpen frontend skills while focusing on usability, accessibility, and clean layouts.',
    solution:
      'Developed responsive UIs using semantic HTML5, Flexbox/Grid layouts, and vanilla JS event handling — optimised for cross-device compatibility and WCAG-aligned accessibility.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/ParthChittalwar',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative p-8 transition-all duration-300"
      style={{
        background: 'oklch(0.175 0 0)',
        border: hovered ? '1px solid rgba(255,255,255,0.15)' : '1px solid oklch(0.25 0 0)',
        outline: hovered ? '1px solid rgba(255,255,255,0.04)' : 'none',
        outlineOffset: '2px',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <span
            className="font-mono text-xs mb-2 block"
            style={{ color: 'oklch(0.35 0 0)', fontFamily: 'var(--font-mono)' }}
          >
            {project.number}
          </span>
          <h3
            className="font-display font-semibold text-xl"
            style={{ fontFamily: 'var(--font-display)', color: 'oklch(1 0 0)' }}
          >
            {project.name}
          </h3>
        </div>
        <span
          className="font-mono text-xs px-3 py-1 shrink-0"
          style={{
            background: 'oklch(0.2 0 0)',
            border: '1px solid oklch(0.28 0 0)',
            color: 'oklch(0.72 0.005 270)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Problem / Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <div
            className="font-mono text-xs mb-2 uppercase tracking-widest"
            style={{ color: 'oklch(0.45 0 0)', fontFamily: 'var(--font-mono)' }}
          >
            Problem
          </div>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-sans)' }}
          >
            {project.problem}
          </p>
        </div>
        <div>
          <div
            className="font-mono text-xs mb-2 uppercase tracking-widest"
            style={{ color: 'oklch(0.45 0 0)', fontFamily: 'var(--font-mono)' }}
          >
            Solution
          </div>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-sans)' }}
          >
            {project.solution}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2 py-0.5"
              style={{
                background: 'oklch(0.2 0 0)',
                border: '1px solid oklch(0.28 0 0)',
                color: 'oklch(0.55 0 0)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs flex items-center gap-1.5 transition-all duration-200 ml-4 shrink-0"
            style={{
              color: hovered ? 'oklch(1 0 0)' : 'oklch(0.55 0 0)',
              cursor: 'alias',
              fontFamily: 'var(--font-mono)',
            }}
          >
            GitHub ↗
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase"
            style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-mono)' }}
          >
            05 / Projects
          </span>
        </motion.div>

        <div className="mb-16">
          <AnimatedHeading
            className="font-display font-semibold leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            } as CSSProperties}
          >
            Projects and experiments. Learning by building.
          </AnimatedHeading>
        </div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
