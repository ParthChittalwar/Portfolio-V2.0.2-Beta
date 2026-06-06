import { useRef, useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedHeading from '@/components/animations/AnimatedHeading'

const skillGroups = [
  {
    id: '01',
    label: 'Languages',
    items: ['C', 'C++', 'JavaScript'],
  },
  {
    id: '02',
    label: 'Frontend',
    items: ['HTML5', 'CSS3', 'React.js', 'Responsive UI'],
  },
  {
    id: '03',
    label: 'Backend',
    items: ['Node.js', 'REST APIs'],
  },
  {
    id: '04',
    label: 'Core CS',
    items: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
  },
  {
    id: '05',
    label: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    id: '06',
    label: 'Certifications',
    items: [
      'C++ Programming (Udemy)',
      'DSA (GFG)',
      'Web Dev Bootcamp (Odin)',
      'Git & GitHub (LinkedIn)',
    ],
  },
]

function SkillCard({ group, index }: { group: typeof skillGroups[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [displayId, setDisplayId] = useState('00')
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!inView) return
    const target = parseInt(group.id)
    let current = 0
    const duration = 600
    const steps = 20
    const interval = duration / steps
    const timer = setInterval(() => {
      current += target / steps
      if (current >= target) {
        setDisplayId(group.id)
        clearInterval(timer)
      } else {
        setDisplayId(String(Math.floor(current)).padStart(2, '0'))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [inView, group.id])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="p-8 transition-all duration-300"
      style={{
        background: 'oklch(0.175 0 0)',
        border: '1px solid oklch(0.25 0 0)',
        borderTop: hovered
          ? '1px solid rgba(255,255,255,0.12)'
          : '1px solid oklch(0.25 0 0)',
      }}
    >
      {/* Animated counter */}
      <div
        className="font-mono text-xs mb-6"
        style={{ color: 'oklch(0.35 0 0)', fontFamily: 'var(--font-mono)' }}
      >
        {displayId}
      </div>

      {/* Group label */}
      <h3
        className="font-display font-semibold text-base mb-5"
        style={{ fontFamily: 'var(--font-display)', color: 'oklch(1 0 0)' }}
      >
        {group.label}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="font-mono text-xs px-2.5 py-1"
            style={{
              background: 'oklch(0.2 0 0)',
              border: '1px solid oklch(0.28 0 0)',
              color: 'oklch(0.72 0.005 270)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
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
            03 / Skills
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
            Technologies and tools. What I use and what I'm learning.
          </AnimatedHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.id} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
