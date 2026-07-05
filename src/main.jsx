import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'
import DetailPage from './pages/DetailPage.jsx'
import HomePage from './pages/HomePage.jsx'
import Misc from './pages/misc/misc.jsx'
import Projects from './pages/projects/projects.jsx'
import Research from './pages/research/research.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'research', element: <Research showViewAll={false} /> },
      { path: 'projects', element: <Projects showViewAll={false} /> },
      { path: 'misc', element: <Misc showViewAll={false} /> },
      { path: ':sectionId/:slug', element: <DetailPage /> },
      { path: '*', element: <Navigate replace to="/" /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
