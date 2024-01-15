import React, { Suspense } from 'react'

import { HashRouter as Router } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar'
import NavbarSocials from '../components/Navbar/NavbarSocials.js'
import { NavHamburger } from '../components/Navbar/NavHamburger.jsx'

import AnimatedRoutes from './AnimatedRoutes.jsx';

// NOTE: make use of sm:... to have it so a hamburger menu shows up when the screen is <= sm

export default function AppRoot() {
  return (
    <div className="flex">

      <Router>
        <div className="hidden md:flex flex-col justify-between h-screen sticky top-0 left-0 pt-3 z-[1]">
          <Navbar />
          <NavbarSocials />
        </div>

        <div className="md:hidden md:opacity-0 flex fixed right-0 z-20 h-full transition-all">
          <NavHamburger />
        </div>

        <Suspense>
          <div className='min-w-0 min-h-0 m-0 flex-grow'>
            <AnimatedRoutes />
          </div>
        </Suspense>

        <div className='h-screen w-screen radial-gradient z-[-2]'></div>

      </Router>

    </div>
  )
}
