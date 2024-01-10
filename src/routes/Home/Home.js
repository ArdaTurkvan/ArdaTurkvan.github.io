import React, { useEffect } from 'react'
import Title from './Title'
import Intro from './Intro'

import { motion } from 'framer-motion'
import StarsCanvas from '../../components/canvas/Stars'

// contains title and intro
// TODO: extract variants from this motion.div and provide all sections with it (section wrapper)

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
            <StarsCanvas />
            <Intro></Intro>
        </motion.div>
    )
}
