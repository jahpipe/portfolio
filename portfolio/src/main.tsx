import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Rootlayout from './Rootlayout/Rootlayout.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Project from './pages/Project.tsx'

const Router = createBrowserRouter([{
  path: '/',
  element: <App/>,
children: [
  { path: 'rootlayout', element: <Rootlayout /> },
  { path: 'about', element: <About/> },
  { path: 'contact', element: <Contact/> },
  { path: 'project', element: <Project/> }
]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
