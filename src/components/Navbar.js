import React from 'react'
import WavyText from './WavyText'

export default function Navbar() {
  return (
    <div className='navbar'>
        <WavyText text="This will be a navbar at some point"></WavyText>
        <a href="#home">Home</a>
        <a href="#section1">A</a>
        <a href="#section2">B</a>
        <a href="#section3">C</a>
    </div>
  )
}
