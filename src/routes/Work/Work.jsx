import React from 'react'
import { motion } from 'framer-motion'

export const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="sm:text-5xl text-3xl">Work</h2>
      <p>Here is my work experience</p>
    </motion.div>
  )
}

export default Work;
