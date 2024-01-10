import React from 'react'
import { motion } from 'framer-motion'

export const Work = () => {
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
      <h2 className="sm:text-5xl text-3xl">Work</h2>
      <h3>WHAT I HAVE DONE SO FAR</h3>
    </motion.div>
  )
}

export default Work;
