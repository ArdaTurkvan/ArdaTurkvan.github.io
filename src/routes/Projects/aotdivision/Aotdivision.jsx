import React from 'react'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import SectionDivider from '../../../components/SectionDivider'
import BackButton from '../../../components/BackButton'
import { Carousel } from 'react-responsive-carousel'


export default function Aotdivision() {

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
      <div className='flex'>
        <BackButton to='/projects' />
        <h2 className={"md:text-5xl text-3xl"}>Attack on Titan: Division</h2>
      </div>
      <h3>GAME DESIGN PROJECT</h3>
          <SectionDivider center={false} width={2} />
        <div className='flex md:flex-row flex-col'>
            <div className="mt-6 mr-6 flex-grow">
                  <p>Co-creator of an Attack on Titan fan boardgame, created in Tabletop Simulator! I helped bring the game to life by taking part in early game design stages, designing the core gameplay loop and unique 3-player aspect. I then ported the game over to Tabletop Simulator. There I implemented plenty of quality-of-life Lua scripts to make the game run smoother, and created all the custom art assets using a combination of Photoshop and nanDECK.</p>
                  <p>In addition, I contributed to running guided and unguided playtests with feedback forms in order to iterate more effectively and improve the game.</p>
                  <p>The game is available to download and try on <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2926235422&searchtext=" target="_blank" rel="noreferrer">Steam Workshop</a>.</p>
                <p className='text-sm italic'>The logo and all art depicting characters, including on cards and on the logo, are property of Attack On Titan and Hajime Isayama. Arda Turkvan is not affiliated in any way, this is solely a fan creation.</p>
            </div>
            <Carousel className='md:max-w-[40%] max-w-full mr-6 mt-6' showArrows={true} dynamicHeight={false}>
                <div>
                    <img src="/aotdivision/carousel-1.png"></img>
                </div>
                <div>
                    <img src="/aotdivision/carousel-2.png"></img>
                </div>
            </Carousel>  
        </div>
    </motion.div>
  )
}
