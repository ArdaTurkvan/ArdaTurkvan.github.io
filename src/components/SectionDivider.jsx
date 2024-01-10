import React from 'react'

import styles from '../routes/Home/Title.module.css'
import { motion } from 'framer-motion'

export const SectionDivider = ({ center, width }) => {

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
          className={'md:w-100 w-[800px] border-secondary my-[30px] ' + ( center ? 'mx-auto' : 'mr-auto')}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        exit="hidden"
        variants={hr_variant}
        transition={{
          ease: "easeOut",
          duration: 1.1
        }}
    />
  )
}

export default SectionDivider;