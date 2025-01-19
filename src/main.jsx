import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home.jsx'
import Root from './layout/Root.jsx'
import About from './components/About.jsx'
import News from './components/News.jsx'
import Destination from './components/Destination.jsx'
import Blog from './components/Blog.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/news',
        element: <News></News>,
      },
      {
        path: '/destination',
        element: <Destination></Destination>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
