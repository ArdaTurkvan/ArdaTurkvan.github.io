import React from 'react'
import styles from './Title.module.css'

import { motion } from 'framer-motion'
import SectionWrapper from '../../components/SectionWrapper'
import { fadeIn } from '../../utils/motion'


const Title = () => {
    const hr_variant = {
        visible: {
            width: "70vw",
        },
        hidden: {
            width: "0vw",
        }
    }
    return (
        <div id="title" className="relative w-full h-screen flex flex-col items-start justify-center">
            <motion.h1 variants={fadeIn("right", "tween", 0.3, 1)} initial="hidden" whileInView="show" viewport={{once: false}} className="lg:text-9xl md:text-7xl text-5xl">Arda&nbsp;Turkvan</motion.h1>
            <motion.hr
                className={`${styles.divider_title}`}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                variants={hr_variant}
                viewport={{ once: false }}
                transition={{
                    ease: "easeInOut",
                    duration: 1
                }}
            />
            <motion.h2 variants={fadeIn("right", "tween", 0.3, 1)} initial="hidden" whileInView="show" viewport={{once: false}} className="md:text-3xl text-base">Developer | Game Designer | Illustrator</motion.h2>
        </div>
  )
}

export default SectionWrapper(Title, "title");
