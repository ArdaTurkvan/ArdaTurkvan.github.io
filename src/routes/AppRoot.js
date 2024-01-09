import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'
import { styles } from '../styles.js'
import NavbarSocials from '../components/Navbar/NavbarSocials.js'
import { NavHamburger } from '../components/Navbar/NavHamburger.jsx'

// NOTE: make use of sm:... to have it so a hamburger menu shows up when the screen is <= sm

export default function AppRoot() {
  return (
    <div className="flex">

      <div className="hidden sm:flex flex-col justify-between h-screen sticky top-0 left-0 pt-3">
        <Navbar />
        <NavbarSocials />
      </div>

      <div className="sm:hidden flex fixed right-0 mx-4 my-4">
        <NavHamburger />
      </div>

      <div className={"pt-3 px-6 w-full"}>
        <Outlet />
      </div>
      
    </div>
  )
}
