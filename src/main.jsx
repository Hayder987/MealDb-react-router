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
import ErrorPage from './Pages/ErrorPage.jsx';
import Foods from './Pages/Foods.jsx';
import DetailsData from './Pages/DetailsData.jsx';

const router = createBrowserRouter([
  {
    element:<App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
     {
      path:"/",
      loader:()=> fetch("https://www.themealdb.com/api/json/v1/1/categories.php"), 
      element: <Home></Home>
     },
     {
      path:"/about",
      element: <About></About>
     },
     {
      path:"/contact",
      element: <Contact></Contact>
     },
     {
      path:"/category/:category",
      loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`),
      element: <Foods></Foods>
     },
     {
      path:"/posts/:postId",
      loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.postId}`),
      element: <DetailsData></DetailsData>
     }

    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
