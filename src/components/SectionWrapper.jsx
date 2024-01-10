import React from 'react'

import { staggerContainer } from '../utils/motion'
import { motion } from 'framer-motion'

const SectionWrapper = (Component, idName) =>
    () => {

        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
            >
                <Component />
            </motion.section>
        )
    }

export default SectionWrapper