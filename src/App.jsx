import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
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
    <LayoutGroup>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div key={location.pathname} layout className="w-full">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/:sectionId" element={<SectionPage />} />
            <Route path="/:sectionId/:slug" element={<DetailPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  )
}

export default App
