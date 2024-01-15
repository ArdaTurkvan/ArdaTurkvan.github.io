import React, { useEffect } from 'react'
import ProjectPreview from './ProjectPreview'

import { motion } from 'framer-motion'
import SectionDivider from '../../components/SectionDivider'
import SectionWrapper from '../../components/SectionWrapper'

const Projects = () => {
    
    /*return (
        <div>
            {
                projects.filter((project) => project.type === "software").map((project) => 
                <Project name={project.name} year={project.year} desc={project.desc} skills={project.skills} />)
            }

            <h2>Game Design (include images)</h2>
            {
                projects.filter((project) => project.type === "game").map((project) => 
                <Project name={project.name} year={project.year} desc={project.desc} skills={project.skills} />)
            }
        </div>
  )*/

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <div className='ml-3'>
        <h2 className="md:text-5xl text-3xl">Projects</h2>
        <h3>MY PORTFOLIO</h3>
        <SectionDivider center={false} width={2} />
      </div>
      <ProjectList />
    </motion.div>
  )
}

export const ProjectList = () => {
  return (
    <ul className="flex md:gap-4 gap-2 flex-wrap md:justify-start justify-center pt-10">
      <li><ProjectPreview
        index={1}
        id="project-software-1"
        title="PicShare"
        description="An online full-stack real-time collaborative image editing application I developed. Users can create profiles, make drawing rooms, and save images to the profile for later."
        buttonText="View Project"
        buttonLink="/projects/picshare"
        imgSrc="./picshare-preview.png"
      /></li>
      <li><ProjectPreview
        index={2}
        id="project-software-2"
        title="Path Tracing Renderer"
        description="A high-performance path tracing rendering algorithm I wrote in C. Path tracing is a technique used for high quality visual effects in 3D media such as games and movies."
        buttonText="View Project"
        buttonLink="/projects/pathtracer"
        imgSrc="./pathtracer-preview.png"

      /></li>
      <li><ProjectPreview
        index={3}
        id="project-software-3"
        title="BugByte"
        description="A game demo for an original game idea that I created from scratch. BugByte is a 2D strategy roguelike action game all about capturing creatures and exploring a vast dungeon."
        buttonText="View Project"
        buttonLink="/projects/bugbyte"
        imgSrc="./bugbyte-preview.png"

      /></li>
      <li><ProjectPreview
        index={4}
        id="project-software-4"
        title="Attack on Titan: Division"
        description="A fan-made board game created by myself and some partners. Assets and code were created and put into Tabletop Simulator, a digital platform for boardgames."
        buttonText="View Project"
        buttonLink="/projects/aotdivision"
        imgSrc="./aotdivision-preview.png"
      /></li>
      <li><ProjectPreview
        index={5}
        id="project-software-4"
        title="Break the Card Tower"
        description="A game demo for an original game idea created as a team for the Level Up Showcase in Toronto. Break the Card Tower is a roguelike deckbuilding card game about making crazy combinations to break the game."
        buttonText="View Project"
        buttonLink="/projects/bct"
        imgSrc="./bct-preview.png"
      /></li>
    </ul>
  )
}

export default SectionWrapper(Projects, "projects");