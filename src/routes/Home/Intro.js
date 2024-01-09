import React from 'react'
import styles from './Title.module.css'

export default function Intro() {
  return (
      <div>
        <hr className={`${styles.divider_section}`} />
        <div id="intro" className="py-40">
            <h2 className="sm:text-5xl text-3xl">Hi there</h2>
            <div className="flex gap-20">
                <div className="flex flex-col">
                    <p className="flex-grow">I'm Arda. I'm a graduate of the University of Toronto Scarborough, specializing in Software Engineering.
                        Recently I also graduated from the Postgraduate Game Design program at George Brown College.
                    </p>
                    <p className="flex-grow">I live in Toronto where I am currently honing my skills in development. My areas of interest are UI/UX design, full-stack web development, and computer graphics.</p>
                    <p className="flex-grow">In my downtime I like to illustrate, play video games, and play guitar. I also have a habit of working on developing games when I'm not doing any of those things.</p>
                    <p className="flex-grow">I am always interested in learning and using new technologies (like I did when I made this website!), so if any of my work or skills interest you, please feel free to send me a message.</p>
                </div>
                <img width={'300px'} src={'/self.jpg'} alt="Profile picture"></img>
            </div>
          </div>
    </div>
  )
}
