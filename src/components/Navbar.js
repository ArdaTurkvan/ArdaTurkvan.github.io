import React from 'react'
import WavyText from './WavyText'

export default function Navbar() {

  return (
    <div className='navbar'>
        <a className='navbar-item section0 short-shadow' href="#home">Home</a>
        <a className='navbar-item section1 short-shadow' href="#section1">About Me</a>
        <a className='navbar-item section2 short-shadow' href="#section2">Projects</a>
        <a className='navbar-item section3 short-shadow' href="#section3">Get in touch!</a>
    </div>
  )
}
