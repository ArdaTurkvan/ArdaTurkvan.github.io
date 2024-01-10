import React from 'react'
import Title from './Title'
import Intro from './Intro'

import { motion } from 'framer-motion'
import StarsCanvas from '../../components/canvas/Stars'

// contains title and intro
// TODO: extract variants from this motion.div and provide all sections with it (section wrapper)

export default function Home() {
    return (
        <motion.div
            id="home"
            className='flex flex-col w-full'
            initial={{opacity: 0, y: -100 }}
            animate={{opacity: 1, y: 0}}
            exit={{ opacity: 0, y: -100 }}
            transition={{
                ease: "easeOut",
                duration: 0.4
            }}
        >
            <Title></Title>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    ease: "easeOut",
                    duration: 0.4
                }}
            >
                <StarsCanvas />
            </motion.div>
            <Intro></Intro>
        </motion.div>
    )
}
