import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedHeading from '@/components/animations/AnimatedHeading'

const milestones = [
  {
    year: '2024',
    title: 'Started Engineering',
    description:
      'Began B.Tech in Computer Technology at Priyadarshini College of Engineering, Nagpur and began building a foundation in core computer science.',
    align: 'right' as const,
  },
  {
    year: '2025',
    title: 'Strengthening Fundamentals',
    description:
      'Going deep on C++, Data Structures & Algorithms, and OOP. Completed certifications while strengthening problem-solving skills.',
    align: 'left' as const,
  },
  {
    year: '2026',
    title: 'Building in the Open',
    description:
      'Expanded into the MERN stack. Learning modern development tools and practices through real project work.',
    align: 'right' as const,
  },
  {
    year: 'Future',
    title: 'Looking Ahead',
    description:
      'Planning to contribute to open source, deepen expertise, and evolve as a full-stack software engineer.',
    align: 'left' as const,
  },
]

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="journey" ref={sectionRef} className="py-32 relative">
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
            02 / Journey
          </span>
        </motion.div>

        <div className="mb-20">
          <AnimatedHeading
            className="font-display font-semibold leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            } as CSSProperties}
          >
            The journey so far. Learning one step at a time.
          </AnimatedHeading>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block overflow-hidden"
            ref={lineRef}
            style={{ background: 'oklch(0.2 0 0)' }}
          >
            <motion.div
              className="w-full origin-top"
              style={{ height: lineHeight, background: 'oklch(0.35 0 0)' }}
            />
          </div>

          <div className="space-y-20">
            {milestones.map((m) => (
              <div key={m.year} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
                {m.align === 'right' ? (
                  <>
                    {/* Left: year */}
                    <div className="flex md:justify-end md:pr-16 items-center">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <span
                          className="font-display font-bold"
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            color: 'oklch(0.25 0 0)',
                          }}
                        >
                          {m.year}
                        </span>
                      </motion.div>
                    </div>

                    {/* Dot */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.4, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: 'oklch(0.6 0 0)' }}
                      />
                    </motion.div>

                    {/* Right: content */}
                    <div className="md:pl-16">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                      >
                        <h3
                          className="font-display font-semibold text-xl mb-3"
                          style={{ fontFamily: 'var(--font-display)', color: 'oklch(1 0 0)' }}
                        >
                          {m.title}
                        </h3>
                        <p
                          className="font-sans leading-relaxed"
                          style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-sans)' }}
                        >
                          {m.description}
                        </p>
                      </motion.div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left: content */}
                    <div className="md:pr-16 md:text-right">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                      >
                        <h3
                          className="font-display font-semibold text-xl mb-3"
                          style={{ fontFamily: 'var(--font-display)', color: 'oklch(1 0 0)' }}
                        >
                          {m.title}
                        </h3>
                        <p
                          className="font-sans leading-relaxed"
                          style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-sans)' }}
                        >
                          {m.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Dot */}
                    <motion.div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.4, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ background: 'oklch(0.6 0 0)' }}
                      />
                    </motion.div>

                    {/* Right: year */}
                    <div className="flex md:justify-start md:pl-16 items-center">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        <span
                          className="font-display font-bold"
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            color: 'oklch(0.25 0 0)',
                          }}
                        >
                          {m.year}
                        </span>
                      </motion.div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
