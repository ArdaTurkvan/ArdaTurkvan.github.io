import React from 'react'
import { motion } from 'framer-motion'
import SectionDivider from '../../../components/SectionDivider'
import BackButton from '../../../components/BackButton'
import { Carousel } from 'react-responsive-carousel'

export default function Bct() {

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
        <h2 className={"md:text-5xl text-3xl"}>Break the Card Tower</h2>
      </div>
      <h3>GAME DEVELOPMENT PROJECT</h3>
      <SectionDivider center={false} width={2} />
      <div className='flex md:flex-row flex-col'>
        <div className="mt-6 mr-6 flex-grow">
            <p>A Roguelike deck-building strategy game developed as part of George Brown College's Game Design program. We developed a vertical slice which we then displayed at the <a href="https://levelupshowcase.com/" target="_blank" rel="noreferrer">2023 Level Up Student Showcase</a> in Toronto.</p>
            <p>I was the Technical Director of the project. As part of my responsibilities, I was in charge of managing and directing our group of talented student programmers to ensure that progress was smooth in converting game design documents into tangible gameplay. I would host regular sprint meetings and stand-ups to check in with the programmers. Additionally, I served as the bridge between our art and programming teams, as I had a lot of experience with both ends.</p>
            <p>I also contributed to the project directly, by writing the code for the hexagonal board, to help make the student programmers' workloads lighter!</p>
            <p>The project spanned a total of 6 months, from design and documentation to vertical slice.</p>
            <div className="flex">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bj7SxtplFX8?si=SOuenHWqICSU-iw1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
        <Carousel className='md:max-w-[40%] max-w-full min-w-[30%] mr-6 mt-6' showArrows={true} dynamicHeight={false}>
          <div>
            <img src="/bct/carousel-1.png" alt="Break the card tower logo"></img>
          </div>
          <div>
            <img src="/bct/carousel-2.png" alt="Break the card tower"></img>
          </div>
        </Carousel>
      </div>
    </motion.div>
  )
}
