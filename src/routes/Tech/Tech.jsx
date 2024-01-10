import React from 'react'
import { motion } from 'framer-motion'

export const Tech = () => {
  return (
    <motion.div
      initial={{opacity: 0, x: 100 }}
      animate={{opacity: 1, x: 0}}
      exit={{ opacity: 0, x: 100 }}
      transition={{
          ease: "easeOut",
          duration: 0.4
      }}
      className='mt-5'
    >
      <h2 className="sm:text-5xl text-3xl">Tech</h2>
      <h3>WHAT I LIKE TO USE</h3>
    </motion.div>
  )
}

export default Tech;