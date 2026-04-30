import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import DisasterModules from './Components/DisasterModules'
import Drills from './Components/Drills'
import Emergency from './Components/Emergency'
import Footer from './Components/Footer'
import SchoolLogin from './Routes/school_login'
import StudentLogin from './Routes/student_login'
import Dashboard from './Routes/dashboard'
import StudentSignInPage from './Routes/student_signin'
import SchoolSignInPage from './Routes/school_signin'
import Landing_Page from './Routes/landing_page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing_Page/>
    },
    {
      path: "/schoollogin",
      element: <SchoolLogin/>
    },
    {
      path: "/studentlogin",
      element: <StudentLogin/>
    },
    {
      path: "/studentsignin",
      element: <StudentSignInPage/>
    },
    {
      path: "/schoolsignin",
      element: <SchoolSignInPage/>
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
