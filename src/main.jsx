import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

const router = createBrowserRouter([
  {
    element:<App></App>,
    children:[
     {
      path:"/",
      element: <Home></Home>
     },
     {
      path:"/about",
      element: <About></About>
     },
     {
      path:"/contact",
      element: <Contact></Contact>
     }

    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
