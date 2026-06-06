import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['about', 'journey', 'skills', 'certifications', 'projects', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) => activeSection === href.replace('#', '')

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 0 0 rgba(255,255,255,0.04)' : 'none',
          transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-sm tracking-widest uppercase transition-opacity hover:opacity-60"
            style={{ color: 'oklch(1 0 0)', fontFamily: 'var(--font-mono)' }}
          >
            PC
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm transition-colors duration-200 relative"
                style={{
                  color: isActive(link.href) ? 'oklch(1 0 0)' : 'oklch(0.55 0 0)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: 'rgba(255,255,255,0.4)' }}
                  />
                )}
              </a>
            ))}
            <a
              href="https://github.com/ParthChittalwar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-4 py-2 transition-all duration-200 hover:bg-white hover:text-black"
              style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'oklch(0.72 0.005 270)', fontFamily: 'var(--font-mono)' }}
            >
              GitHub ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 transition-opacity hover:opacity-70"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              className="block w-6 h-px bg-white origin-center"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-px bg-white"
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-px bg-white origin-center"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 flex flex-col justify-center px-8"
            style={{ background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <div className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="flex items-center justify-between py-5 group"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span
                    className="font-display font-semibold"
                    style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 8vw, 3rem)', color: isActive(link.href) ? 'oklch(1 0 0)' : 'oklch(0.4 0 0)' }}
                  >
                    {link.label}
                  </span>
                  <span style={{ color: 'oklch(0.3 0 0)', fontSize: '1.2rem' }}>↗</span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-12"
            >
              <span className="font-mono text-xs" style={{ color: 'oklch(0.3 0 0)', fontFamily: 'var(--font-mono)' }}>
                chittalwarparth@gmail.com
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
