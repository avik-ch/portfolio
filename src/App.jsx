import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import Layout from './components/Layout.jsx'
import { profile } from './content.js'
import DetailPage from './pages/DetailPage.jsx'
import HomePage from './pages/HomePage.jsx'
import SectionPage from './pages/SectionPage.jsx'
import './App.css'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <BrowserRouter>
      <Layout profile={profile} theme={theme} onToggleTheme={toggleTheme}>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RouteTransition><HomePage /></RouteTransition>} />
        <Route path="/:sectionId" element={<RouteTransition><SectionPage /></RouteTransition>} />
        <Route path="/:sectionId/:slug" element={<RouteTransition><DetailPage /></RouteTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function RouteTransition({ children }) {
  return (
    <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.16 }}>
      {children}
    </motion.div>
  )
}

export default App
