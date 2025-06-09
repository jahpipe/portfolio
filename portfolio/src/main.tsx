import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createHashRouter, RouterProvider } from 'react-router-dom' // ← change here

import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Project from './pages/Project.tsx'
import Notfoundpages from './404/Notfoundpages.tsx'



const router = createHashRouter([ // ← change here
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'project', element: <Project /> },
      { path: '*', element: <Notfoundpages/>},
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
