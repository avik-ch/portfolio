import { Outlet } from 'react-router'
import { useEffect, useState } from 'react'
import Layout from './components/Layout.jsx'
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
    <Layout theme={theme} onToggleTheme={toggleTheme}>
      <Outlet />
    </Layout>
  )
}

export default App
