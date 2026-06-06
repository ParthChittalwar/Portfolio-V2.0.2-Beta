import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'
import AnimatedHeading from '@/components/animations/AnimatedHeading'

const certifications = [
  { name: 'C++ Programming', issuer: 'Udemy' },
  { name: 'Data Structures & Algorithms', issuer: 'GeeksforGeeks' },
  { name: 'Web Development Bootcamp', issuer: 'The Odin Project' },
  { name: 'Git & GitHub Essentials', issuer: 'LinkedIn Learning' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 relative">
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
            04 / Certifications
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
            Credentials earned. Learning beyond the classroom.
          </AnimatedHeading>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 flex flex-col justify-between min-h-[180px]"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.06)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              {/* Issuer tag */}
              <div
                className="font-mono text-xs tracking-[0.15em] uppercase mb-4"
                style={{ color: 'oklch(0.45 0 0)', fontFamily: 'var(--font-mono)' }}
              >
                {cert.issuer}
              </div>

              {/* Cert name */}
              <h3
                className="font-display font-semibold text-xl leading-snug"
                style={{ fontFamily: 'var(--font-display)', color: 'oklch(1 0 0)' }}
              >
                {cert.name}
              </h3>

              {/* Check badge */}
              <div className="absolute bottom-6 right-6">
                <div
                  className="w-8 h-8 flex items-center justify-center text-sm font-mono"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'oklch(0.72 0.005 270)',
                  }}
                >
                  ✓
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
