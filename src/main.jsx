import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactUs from './components/ContactUs.jsx'
import Login from './components/Login.jsx'
import Navbar from './components/Navbar.jsx'

const router = createBrowserRouter([
  {
    path: "/contactus",
    element: <><Navbar /><ContactUs /></>
  },
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <><Navbar /> <Login /></>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
