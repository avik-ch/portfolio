import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'
import DetailPage from './pages/DetailPage.jsx'
import HomePage from './pages/HomePage.jsx'
import SectionPage from './pages/SectionPage.jsx'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <BrowserRouter>
      <Layout theme={theme} onToggleTheme={toggleTheme}>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:sectionId" element={<SectionPage />} />
      <Route path="/:sectionId/:slug" element={<DetailPage />} />
    </Routes>
  )
}

export default App
