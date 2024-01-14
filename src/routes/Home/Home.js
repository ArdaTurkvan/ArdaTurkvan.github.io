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

            <div className='absolute xs:bottom-10 bottom-32 w-[95%] md:w-[90%] flex justify-center items-center'>
                <a href="#intro">
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white-100 flex justify-center items-start p-2'>
                        <motion.dev
                            animate={{
                                y: [0, 24, 0]
                            }}
                            transition={{
                                duration: 1.25,
                                repeat: Infinity,
                                repeatType: 'loop',
                                ease: "easeOut"
                            }}
                            className='w-3 h-3 rounded-full bg-white-100 mb-1'
                        />
                    </div>
                </a>
            </div>

            <StarsCanvas />

            <Intro></Intro>
        </motion.div>
    )
}
