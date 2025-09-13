import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import DisasterModules from './Components/DisasterModules'
import Drills from './Components/Drills'
import Emergency from './Components/Emergency'
import Footer from './Components/Footer'
import Login from './Routes/login'
import Dashboard from './Routes/dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/home",
      element: <>
      <Navbar/>
      <Hero/>
      <DisasterModules/>
      <Drills/>
      <Emergency/>
      <Footer/>
    </>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    },
  ])

  return (
    <><RouterProvider router={router} /></>
  )
}

export default App
