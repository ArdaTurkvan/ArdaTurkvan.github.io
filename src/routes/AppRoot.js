import React from 'react'

import { Outlet } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar'
import { styles } from '../styles.js'
import NavbarSocials from '../components/Navbar/NavbarSocials.js'
import { NavHamburger } from '../components/Navbar/NavHamburger.jsx'

import AnimatedRoutes from '../components/AnimatedRoutes.jsx';

// NOTE: make use of sm:... to have it so a hamburger menu shows up when the screen is <= sm

export default function AppRoot() {
  return (
    <div className="flex">

      <Router>
        <div className="hidden md:flex flex-col justify-between h-screen sticky top-0 left-0 pt-3">
          <Navbar />
          <NavbarSocials />
        </div>

        <div className="md:hidden flex fixed right-0 mx-4 my-4 z-20">
          <NavHamburger />
        </div>

        <div className='min-w-0 min-h-0 flex-grow'>
          <AnimatedRoutes />
        </div>

      </Router>

    </div>
  )
}
