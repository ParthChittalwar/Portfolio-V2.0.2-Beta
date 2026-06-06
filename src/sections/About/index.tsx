import { motion } from 'framer-motion'
import AnimatedHeading from '@/components/animations/AnimatedHeading'

const stats = [
  { value: '9.17', label: 'CGPA', desc: 'Academic standing' },
  { value: '2028', label: 'B.Tech', desc: 'Expected graduation' },
  { value: '4+', label: 'Core CS', desc: 'Subjects mastered' },
  { value: '3+', label: 'Languages', desc: 'C · C++ · JavaScript' },
]

const traits = ['Self-initiated projects', 'DSA daily practice', 'Full-stack curiosity', 'Clean code obsession']

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Top rule */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-6 mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.2em] uppercase shrink-0"
            style={{ color: 'oklch(0.35 0 0)', fontFamily: 'var(--font-mono)' }}
          >
            01 / About
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-px flex-1 origin-left"
            style={{ background: 'oklch(0.22 0 0)' }}
          />
        </div>

        {/* Heading — full width, massive */}
        <div className="mb-20">
          <AnimatedHeading
            className="font-display font-bold leading-none"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', letterSpacing: '-0.02em' }}
          >
            A student engineer focused on clean, performant software.
          </AnimatedHeading>
        </div>

        {/* Two-col: text + traits */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="font-sans text-base leading-[1.8]" style={{ color: 'oklch(0.65 0.005 270)', fontFamily: 'var(--font-sans)' }}>
              I'm Parth, a Computer Technology undergraduate at Priyadarshini College of Engineering, Nagpur. My work centers on the fundamentals: data structures, object-oriented design, and the craft of shipping real interfaces.
            </p>
            <p className="font-sans text-base leading-[1.8]" style={{ color: 'oklch(0.65 0.005 270)', fontFamily: 'var(--font-sans)' }}>
              Currently going deep on C++ and DSA, and branching into the MERN stack. Every project I take on is self-initiated and owned end to end — from architecture to deployment.
            </p>
            <p className="font-sans text-base leading-[1.8]" style={{ color: 'oklch(0.65 0.005 270)', fontFamily: 'var(--font-sans)' }}>
              Goal: become the kind of software engineer who builds things people remember.
            </p>
          </motion.div>

          {/* Traits list */}
          <div className="lg:col-span-2">
            <div className="font-mono text-xs tracking-widest uppercase mb-5" style={{ color: 'oklch(0.35 0 0)', fontFamily: 'var(--font-mono)' }}>
              What defines my approach
            </div>
            <div className="space-y-0">
              {traits.map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 py-3"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span className="font-mono text-xs" style={{ color: 'oklch(0.35 0 0)' }}>0{i + 1}</span>
                  <span className="font-sans text-sm" style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-sans)' }}>{t}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row — horizontal band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="p-8 relative"
              style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
            >
              <div className="font-display font-bold mb-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'oklch(1 0 0)', letterSpacing: '-0.02em' }}>
                {s.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-mono)' }}>{s.label}</div>
              <div className="font-sans text-xs" style={{ color: 'oklch(0.35 0 0)', fontFamily: 'var(--font-sans)' }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
