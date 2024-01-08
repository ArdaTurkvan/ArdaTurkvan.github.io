import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar/Navbar'

export default function RAppoot() {
  return (
    <>
      <div id="sidebar">
        <h1>Basic Root</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
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
