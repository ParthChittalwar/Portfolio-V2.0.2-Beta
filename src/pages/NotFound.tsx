import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <span
        className="font-mono text-xs tracking-[0.2em] uppercase mb-6"
        style={{ color: 'oklch(0.45 0 0)', fontFamily: 'var(--font-mono)' }}
      >
        404
      </span>
      <h1
        className="font-display font-bold mb-6"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          color: 'oklch(0.3 0 0)',
        }}
      >
        Not found.
      </h1>
      <Link
        to="/"
        className="font-mono text-sm px-6 py-3 transition-all duration-200 hover:bg-white hover:text-black"
        style={{
          border: '1px solid rgba(255,255,255,0.15)',
          color: 'oklch(0.72 0.005 270)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        ← Go home
      </Link>
    </motion.div>
  )
}
