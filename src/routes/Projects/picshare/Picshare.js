import React from 'react'
import { Link } from "react-router-dom"

import { motion } from 'framer-motion'

export default function Picshare() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
          <h2>PicShare</h2>
          <p>I did this and that and blahblahblah</p>
          <p>Here are some pictures</p>
          <p>(Pictures)</p>
          <Link to='/projects'>return to projects</Link>
      </motion.div>
  )
}
