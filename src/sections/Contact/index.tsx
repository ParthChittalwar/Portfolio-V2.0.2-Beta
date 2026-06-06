import { useState } from 'react'
import { motion } from 'framer-motion'

const contactLinks = [
  {
    label: 'Email',
    value: 'chittalwarparth@gmail.com',
    href: 'mailto:chittalwarparth@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'ParthChittalwar',
    href: 'https://github.com/ParthChittalwar',
  },
  {
    label: 'LinkedIn',
    value: 'parth-chittalwar',
    href: 'https://linkedin.com/in/parth-chittalwar-3186963a1',
  },
  {
    label: 'Twitter / X',
    value: '@parth_chittalwar',
    href: 'https://twitter.com/parth_chittalwar',
  },
]

const headingWords = ["Let's", 'connect.']

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      {/* Divider */}
      <div
        className="absolute top-0 left-6 right-6 h-px"
        style={{ background: 'oklch(0.22 0 0)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span
            className="font-mono text-xs tracking-[0.2em] uppercase"
            style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-mono)' }}
          >
            06 / Contact
          </span>
        </motion.div>

        {/* Heading with word stagger */}
        <h2
          className="font-display font-bold mb-20"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.3em',
          }}
        >
          {headingWords.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.12,
              }}
              style={{ display: 'inline-block' }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Contact links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => (
            <ContactLink key={link.label} link={link} index={i} />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 pt-8 flex items-center justify-between"
          style={{ borderTop: '1px solid oklch(0.2 0 0)' }}
        >
          <span
            className="font-mono text-xs"
            style={{ color: 'oklch(0.35 0 0)', fontFamily: 'var(--font-mono)' }}
          >
            Parth Chittalwar — {new Date().getFullYear()}
          </span>
          <span
            className="font-mono text-xs"
            style={{ color: 'oklch(0.35 0 0)', fontFamily: 'var(--font-mono)' }}
          >
            Built with React + Vite
          </span>
        </motion.div>
      </div>
    </section>
  )
}

function ContactLink({
  link,
  index,
}: {
  link: { label: string; value: string; href: string }
  index: number
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-between p-6 transition-all duration-200 group"
      style={{
        background: hovered ? 'oklch(0.19 0 0)' : 'oklch(0.175 0 0)',
        border: hovered ? '1px solid rgba(255,255,255,0.1)' : '1px solid oklch(0.25 0 0)',
      }}
    >
      <div>
        <div
          className="font-mono text-xs mb-1 uppercase tracking-widest"
          style={{ color: 'oklch(0.45 0 0)', fontFamily: 'var(--font-mono)' }}
        >
          {link.label}
        </div>
        <div
          className="font-sans text-sm"
          style={{ color: hovered ? 'oklch(1 0 0)' : 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-sans)' }}
        >
          {link.value}
        </div>
      </div>

      {/* Diagonal arrow */}
      <span
        className="font-mono text-lg transition-transform duration-300"
        style={{
          color: hovered ? 'oklch(1 0 0)' : 'oklch(0.35 0 0)',
          transform: hovered ? 'translate(-3px, -3px)' : 'translate(0, 0)',
          display: 'inline-block',
          fontFamily: 'var(--font-mono)',
        }}
      >
        ↗
      </span>
    </motion.a>
  )
}
