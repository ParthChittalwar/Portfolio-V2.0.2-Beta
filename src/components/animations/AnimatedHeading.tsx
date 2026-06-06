import { motion } from 'framer-motion'
import type { CSSProperties } from 'react'

interface AnimatedHeadingProps {
  children: string
  className?: string
  style?: CSSProperties
  staggerMs?: number
  as?: 'h1' | 'h2' | 'h3'
}

export default function AnimatedHeading({
  children,
  className = '',
  style,
  staggerMs = 80,
  as: Tag = 'h2',
}: AnimatedHeadingProps) {
  const words = children.split(' ')

  return (
    <Tag className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25em', ...style }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: i * (staggerMs / 1000),
          }}
          style={{ display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
