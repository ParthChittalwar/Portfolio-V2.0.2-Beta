import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const ROLES = ['C++ Engineer', 'DSA Practitioner', 'React Developer', 'CS Undergraduate']

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Animated dot-grid canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let mouse = { x: -999, y: -999 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('mousemove', onMove)

    const GAP = 36
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cols = Math.ceil(canvas.width / GAP)
      const rows = Math.ceil(canvas.height / GAP)
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * GAP + GAP / 2
          const y = r * GAP + GAP / 2
          const dist = Math.hypot(x - mouse.x, y - mouse.y)
          const proximity = Math.max(0, 1 - dist / 180)
          const radius = 0.8 + proximity * 2
          const alpha = 0.08 + proximity * 0.35
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255,255,255,${alpha})`
          ctx.fill()
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden" style={{ background: 'oklch(0.145 0 0)' }}>

      {/* Interactive dot grid */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />

      {/* SVG noise grain */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.025, zIndex: 1 }} xmlns="http://www.w3.org/2000/svg">
        <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>

      {/* Main layout: split left/right */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT column */}
        <div className="flex flex-col justify-between px-8 md:px-14 pt-36 pb-12">

          {/* Top: status pill */}
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-0" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs" style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-mono)' }}>Available for opportunities</span>
            </div>
          </motion.div>

          {/* Center: the name block */}
          <div className="py-12">
            {/* Vertical label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px" style={{ background: 'rgba(255,255,255,0.2)' }} />
              <span className="font-mono text-xs tracking-[0.25em] uppercase" style={{ color: 'oklch(0.45 0 0)', fontFamily: 'var(--font-mono)' }}>Portfolio 2025</span>
            </motion.div>

            {/* PARTH — huge, stacked */}
            <div className="overflow-hidden mb-1">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                className="font-display font-bold leading-none"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4.5rem, 12vw, 10rem)', letterSpacing: '-0.03em', color: 'oklch(1 0 0)' }}
              >
                PARTH
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                className="font-display font-bold leading-none"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4.5rem, 12vw, 10rem)', letterSpacing: '-0.03em', color: 'oklch(0.38 0 0)', WebkitTextStroke: '1px oklch(0.38 0 0)' }}
              >
                CHITTALWAR
              </motion.h1>
            </div>

            {/* Animated role ticker */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 flex items-center gap-3"
            >
              <span className="font-mono text-xs" style={{ color: 'oklch(0.35 0 0)', fontFamily: 'var(--font-mono)' }}>—</span>
              <RoleTicker roles={ROLES} />
            </motion.div>
          </div>

          {/* Bottom: CTA row */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.85 }} className="flex items-center gap-4 flex-wrap">
            <a href="#projects" className="font-mono text-sm px-6 py-3 transition-all duration-200 hover:bg-white hover:text-black" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', color: 'oklch(1 0 0)', fontFamily: 'var(--font-mono)' }}>
              View Projects ↓
            </a>
            <a href="#contact" className="font-mono text-sm px-6 py-3 transition-all duration-200 hover:border-white hover:text-white" style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'oklch(0.55 0 0)', fontFamily: 'var(--font-mono)' }}>
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* RIGHT column — vertical stats strip */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="hidden lg:flex flex-col justify-end pb-12 px-14 pt-36 relative"
          style={{ borderLeft: '1px solid rgba(255,255,255,0.05)' }}
        >
          {/* Large rotated label */}
          <div className="absolute top-48 right-10 origin-right" style={{ transform: 'rotate(90deg) translateX(50%)' }}>
            <span className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: 'oklch(0.22 0 0)', fontFamily: 'var(--font-mono)' }}>Computer Technology</span>
          </div>

          {/* Stats */}
          <div className="space-y-0">
            {[
              { val: '9.17', label: 'CGPA', sub: 'Priyadarshini College' },
              { val: '2028', label: 'Expected Graduation', sub: 'B.Tech' },
              { val: '4+', label: 'Certifications', sub: 'Self-driven' },
              { val: '3+', label: 'Languages', sub: 'C · C++ · JS' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
                className="flex items-end justify-between py-5"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div>
                  <div className="font-mono text-xs mb-1" style={{ color: 'oklch(0.4 0 0)', fontFamily: 'var(--font-mono)' }}>{s.label}</div>
                  <div className="font-sans text-xs" style={{ color: 'oklch(0.35 0 0)', fontFamily: 'var(--font-sans)' }}>{s.sub}</div>
                </div>
                <span className="font-display font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: '2.2rem', color: 'oklch(1 0 0)', letterSpacing: '-0.02em' }}>{s.val}</span>
              </motion.div>
            ))}
          </div>

          {/* Scroll indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 }} className="mt-10 flex items-center gap-3">
            <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15))' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'oklch(0.3 0 0)', fontFamily: 'var(--font-mono)' }}>Scroll</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function RoleTicker({ roles }: { roles: string[] }) {
  return (
    <div className="overflow-hidden" style={{ height: '1.4em' }}>
      <motion.div
        animate={{ y: [`0%`, `${-100 * (roles.length - 1)}%`] }}
        transition={{ duration: roles.length * 2.5, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
      >
        {[...roles, roles[0]].map((r, i) => (
          <div key={i} className="font-mono text-sm" style={{ color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-mono)', height: '1.4em', lineHeight: '1.4em' }}>{r}</div>
        ))}
      </motion.div>
    </div>
  )
}
