import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'

export default function AppRoot() {
  return (
    <>
      <div id="sidebar">
        <h1>Basic Root</h1>
        <nav>
          <Navbar></Navbar>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
