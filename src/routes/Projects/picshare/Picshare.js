import React from 'react'
import { Link } from "react-router-dom"

export default function Picshare() {
  return (
      <div>
          <h2>PicShare</h2>
          <p>I did this and that and blahblahblah</p>
          <p>Here are some pictures</p>
          <p>(Pictures)</p>
          <Link to='/projects'>return to projects</Link>
      </div>
  )
}
