import React from 'react'
import styles from './Title.module.css'

import { motion } from 'framer-motion'

export default function Title() {
    const hr_variant = {
        visible: {
            width: "70vw",
            borderWidth: "3px"
        },
        hidden: {
            width: "0vw",
            borderWidth: "0px"
        }
    }
    return (
        <div id="title" className="relative w-full h-screen flex flex-col items-center justify-center">
            <h1 className="md:text-8xl text-6xl">Arda&nbsp;Turkvan</h1>
            <motion.hr
                className={`${styles.divider_title}`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={hr_variant}
            />
            <h3 className="md:text-xl text-base">Developer | Game Designer | Illustrator</h3>
        </div>
  )
}
