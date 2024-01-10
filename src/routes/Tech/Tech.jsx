import React from 'react'
import { motion } from 'framer-motion'

export const Tech = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="sm:text-5xl text-3xl">Tech</h2>
    </motion.div>
  )
}

export default Tech;