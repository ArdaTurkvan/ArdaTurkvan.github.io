import React from 'react'
import Title from './Title'
import Intro from './Intro'

import { motion } from 'framer-motion'

// contains title and intro

export default function Home() {
    return (
        <motion.div
            id="home"
            className='flex flex-col w-full'
            initial={{opacity: 0, y: -100 }}
            animate={{opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
        >
            <Title></Title>
            <Intro></Intro>
        </motion.div>
    )
}
