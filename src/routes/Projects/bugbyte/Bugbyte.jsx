import React from 'react'
import { motion } from 'framer-motion'
import SectionDivider from '../../../components/SectionDivider'
import BackButton from '../../../components/BackButton'
import { Carousel } from 'react-responsive-carousel'


export default function Bugbyte() {

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
        <h2 className={"md:text-5xl text-3xl"}>BugByte</h2>
      </div>
      <div className="ml-3">
        <h3>GAME DEVELOPMENT PROJECT</h3>
            <SectionDivider center={false} width={2} />
          <div className='flex md:flex-row flex-col'>
              <div className="mt-6 mr-6 flex-grow">
                  <p>A 2D pixel-art dungeon-crawler roguelite creature-catching game, inspired by the idea of a <a href="https://bulbapedia.bulbagarden.net/wiki/Nuzlocke_Challenge" target="_blank" rel="noreferrer">Pokemon Nuzlocke</a> playthrough.</p>

                  <p>I created a vertical slice demonstration of the game's core ideas. I was the sole programmer, artist, and game designer on the project.</p>

                  <p>During the project, I managed myself by creating my own schedules and deadlines. I pushed myself to learn how to use Unity and write in C# by myself. I also drew and animated all of the art assets in the game. I programmed lots of designer-friendly systems like easy animation flipbooks, editable stat scaling curves, and easily creatable and modular attacks and creatures. I also implemented advanced concepts and algorithms like A* pathfinding and Behaviour Trees.</p>

                  <p>I detailed every step of my creation process in a devlog on my <a href="https://ardaturkvan.itch.io/" target="_blank" rel="noreferrer">itch.io</a> page! This includes technical explanations for code architecture, concept art, and my design thought process.</p>

                  <p>You can also try the game out below:</p>
                  <div className='flex flex-col items-center md:items-start mb-6'>
                      <iframe title='BugByte itch.io embedded link' className="flex-shrink-0" frameborder="0" src="https://itch.io/embed/2207393?dark=true" width="552" height="167"><a href="https://ardaturkvan.itch.io/bugbyte-vertical-slice-demo">BugByte - Vertical Slice Demo v1.3 by ArdaTurkvan</a></iframe>
                  </div>      
                  <p>This is a self-driven thesis project, part of the Game Design Postgraduate program at George Brown College.</p>
              </div>
              <Carousel className='md:max-w-[40%] max-w-full mr-6 mt-6' showArrows={true} dynamicHeight={false}>
                  <div>
                      <img src="/bugbyte/carousel-1.png" alt="bugbyte"></img>
                  </div>
                  <div>
                      <img src="/bugbyte/carousel-2.png" alt="bugbyte"></img>
                  </div>
                  <div>
                      <img src="/bugbyte/carousel-3.png" alt="bugbyte"></img>
                  </div>
                  <div>
                      <img src="/bugbyte/carousel-4.png" alt="bugbyte"></img>
                  </div>
              </Carousel>  
          </div>
        </div>
    </motion.div>
  )
}
