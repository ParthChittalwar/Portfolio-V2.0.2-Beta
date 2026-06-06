import { motion } from 'framer-motion'
import Nav from '@/components/layout/Nav'
import ScrollProgress from '@/components/common/ScrollProgress'
import AppRouter from '@/router'

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ScrollProgress />
      <Nav />
      <main>
        <AppRouter />
      </main>
    </motion.div>
  )
}
