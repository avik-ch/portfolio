import Header from './Header.jsx'
import { motion } from 'motion/react'
import { useLocation } from 'react-router'
import { pageContainerVariants } from './pageAnimation.js'

export default function Layout({ children, theme, onToggleTheme }) {
  const location = useLocation()

  return (
    <div className="mx-auto flex min-h-svh w-full max-w-[550px] flex-col sm:px-8">
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <motion.main
        key={location.pathname}
        animate="visible"
        className="flex-1 pb-16"
        initial="hidden"
        variants={pageContainerVariants}
      >
        {children}
      </motion.main>
    </div>
  )
}
