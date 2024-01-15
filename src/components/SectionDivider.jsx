import React from 'react'

import { motion } from 'framer-motion'

export const SectionDivider = ({ center=false, width=1, marginY=30, once=true, duration=1.1, delay=0 }) => {

    const hr_variant = {
        visible: {
            width: "50%",
            borderWidth: `${width}px`
        },
        hidden: {
            width: "0%",
            borderWidth: `${width}px`
        }
    }
    
  return (
    <motion.hr
          className={`md:w-100 w-[800px] border-secondary my-[${marginY}px] ` + ( center ? 'mx-auto' : 'mr-auto')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: once }}
        exit="hidden"
        variants={hr_variant}
        transition={{
          ease: "easeOut",
          duration: duration,
          delay: delay
        }}
    />
  )
}

export default SectionDivider;