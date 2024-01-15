import React from 'react'
import styles from './Intro.module.css'

import SectionDivider from '../../components/SectionDivider'

export default function Intro() {

  return (
      <div className="py-40 h-auto">
      <SectionDivider center={true} width={2} once={false} />
      <div id="intro" className="py-32 pr-10">
            <h2 className="sm:text-5xl text-3xl">Hi there</h2>
            <div className="flex gap-20 flex-wrap">
              <div className="flex flex-col justify-between flex-grow">
                <p className="">I'm Arda. I'm a graduate of the University of Toronto Scarborough, specializing in Software Engineering.
                    Recently I also graduated from the Postgraduate Game Design program at George Brown College.
                </p>
                <p>I live in Toronto where I am currently honing my skills in development. My areas of interest are UI/UX design, full-stack web development, and computer graphics.</p>
                <p>My areas of expertise are:</p>
                <ul className={`${styles.listtext} flex flex-col flex-wrap min-h-20`}>
                  <li><strong>Languages:</strong> Python, C, C++, C#, JavaScript, HTML, CSS</li>
                  <li><strong>Frameworks:</strong> MongoDB, Express.js, React, Node.js,</li>
                  <li><strong>Game Development:</strong> Unreal Engine 5, Unity</li>
                  <li><strong>Networking:</strong> HTTPS (SSL, TLS Handshake), RESTful API</li>
                  <li><strong>Agile Development:</strong> Scrum and Kanban (Trello, Jira)</li>
                  <li><strong>Computer Graphics:</strong> Path tracing, multi-threading</li>
                  
                </ul>
                <p className="">In my downtime I like to illustrate, play video games, and play guitar. I also have a habit of working on developing games when I'm not doing any of those things.</p>
                <p className="">I am always interested in learning and using new technologies (like I did when I made this website!), so if any of my work or skills interest you, please feel free to send me a message.</p>
              </div>
              <img width={'100px'} src={'/self.jpg'} alt="Me" className='flex-grow rounded-md max-w-[50%] max-h-[50%] min-w-[30%]'></img>
            </div>
      </div>
      <p className='text-sm text-gray-400 mt-auto text-center'>Arda Turkvan, 2024</p>
    </div>
  )
}
