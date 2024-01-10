import React from 'react'
import styles from './Title.module.css'

import { motion } from 'framer-motion'
import SectionDivider from '../../components/SectionDivider'

export default function Intro() {

  return (
      <div className="py-40 h-auto">
      <SectionDivider center={true} width={2} once={false} />
        <div id="intro" className="py-32 pr-10">
            <h2 className="sm:text-5xl text-3xl">Hi there</h2>
            <div className="flex gap-20 flex-wrap">
                <div className="flex flex-col flex-grow w-96">
                    <p className="">I'm Arda. I'm a graduate of the University of Toronto Scarborough, specializing in Software Engineering.
                        Recently I also graduated from the Postgraduate Game Design program at George Brown College.
                    </p>
                    <p className="">I live in Toronto where I am currently honing my skills in development. My areas of interest are UI/UX design, full-stack web development, and computer graphics.</p>
                    <p className="">In my downtime I like to illustrate, play video games, and play guitar. I also have a habit of working on developing games when I'm not doing any of those things.</p>
                    <p className="">I am always interested in learning and using new technologies (like I did when I made this website!), so if any of my work or skills interest you, please feel free to send me a message.</p>
                </div>
                <img width={'100px'} src={'/self.jpg'} alt="Profile picture" className='flex-grow rounded-md'></img>
            </div>
          </div>
    </div>
  )
}
