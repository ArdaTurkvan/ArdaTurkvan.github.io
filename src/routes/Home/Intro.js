import React from 'react'
import styles from './Title.module.css'

import { motion } from 'framer-motion'

export default function Intro() {

  const hr_variant = {
    visible: {
        width: "50%",
        borderWidth: "1px"
    },
    hidden: {
        width: "0%",
        borderWidth: "0px"
    }
  }

  return (
      <div className="py-40">
      <motion.hr
        className={`${styles.divider_section}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={hr_variant}
        transition={{
          ease: "easeOut",
          duration: 1.5
        }}
      />
        <div id="intro" className="py-40 pr-10">
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
                <img width={'10px'} src={'/self.jpg'} alt="Profile picture" className='flex-grow rounded-md'></img>
            </div>
          </div>
    </div>
  )
}
