import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import AllProjects from "./pages/AllProjects.jsx"
import Contact from "./pages/Contact.jsx"
import ErrorPage from './pages/ErrorPage.jsx'
import Experience  from "./pages/Experience/Experience.jsx"
import AboutMe from './pages/AboutMe.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <ErrorPage/>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/projects", element: <AllProjects/>},
      {path:"/contact", element: <Contact/>},
      {path:"/experience", element: <Experience/>},
      {path:"/about-me", element: <AboutMe/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
