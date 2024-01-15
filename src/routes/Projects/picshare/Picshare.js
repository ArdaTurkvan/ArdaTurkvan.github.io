import React from 'react'
import { motion } from 'framer-motion'
import SectionDivider from '../../../components/SectionDivider'
import BackButton from '../../../components/BackButton'
import { Carousel } from 'react-responsive-carousel'

export default function Picshare() {

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
        <h2 className={"md:text-5xl text-3xl"}>PicShare</h2>
      </div>
      <h3>SOFTWARE PROJECT</h3>
      <SectionDivider center={false} width={2} />
      <div className='flex md:flex-row flex-col'>
        <div className="mt-6 mr-6 flex-grow">
          <p>An online full-stack image editing platform written using JavaScript, HTML and CSS, with real-time collaboration. Users can hop in and out of drawing rooms, save images to their profile, and reload them for continued editing in the future. Picshare is a full-stack web application developed by me and my partner, <a href="https://github.com/JohnvadL" target="_blank" rel="noreferrer">John V. Lal</a>, as part of the Web Programming course at University of Toronto Scarborough.</p>
          <p>As part of the project, I made significant contributions to the early backend architecture through setting up our RESTful web API with Express.js. I was also fully in charge of the website front-end and peer-to-peer connectivity. I designed and wrote all of the UI, the title screen, and the chat.</p>
          <p>Below is a demo video of the website in action:</p>
          <div className="flex">
            <iframe className="my-6" width="560" height="315" src="https://www.youtube.com/embed/wtXimtG0aaQ?si=MddpWsYxQg9PRvg_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <Carousel className='md:max-w-[40%] max-w-full mr-6 mt-6' showArrows={true} dynamicHeight={false}>
          <div>
            <img src="/picshare/carousel-1.png" alt="picshare"></img>
          </div>
          <div>
            <img src="/picshare/carousel-2.png" alt="picshare"></img>
          </div>
          <div>
            <img src="/picshare/carousel-3.png" alt="picshare"></img>
          </div>
        </Carousel>
      </div>
    </motion.div>
  )
}
