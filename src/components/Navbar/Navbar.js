import React from 'react'
import NavbarSocials from './NavbarSocials'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <div>navbar stuff</div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <NavbarSocials></NavbarSocials>
            </nav>
        </div>
  )
}
