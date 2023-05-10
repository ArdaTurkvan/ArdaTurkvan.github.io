import React from 'react'
import WavyText from './WavyText'

export default function Navbar() {
  return (
    <div className='navbar'>
        <p>Arda Turkvan</p>
        <a className='navbar-item' href="#home">Home</a>
        <a className='navbar-item' href="#section1">About Me</a>
        <a className='navbar-item' href="#section2">Projects</a>
        <a className='navbar-item' href="#section3">Get in touch!</a>
    </div>
  )
}
