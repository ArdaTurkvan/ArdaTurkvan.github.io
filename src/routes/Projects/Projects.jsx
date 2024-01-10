import React from 'react'
import Project from './Project'
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
      <h2 className="sm:text-5xl text-3xl">Projects</h2>
      <h3>MY PORTFOLIO</h3>
      <SectionDivider center={false} width={2} />
      <ProjectList />
    </motion.div>
  )
}

export const ProjectList = () => {
  return (
    <ul className="flex md:gap-14 flex-wrap md:justify-start justify-center pt-10">
      <li><ProjectPreview
        index={1}
        id="project-software-1"
        title="PicShare"
        description="description, description, description"
        buttonText="View Project"
        buttonLink="/projects/picshare"
      /></li>
      <li><ProjectPreview
        index={2}
        id="project-software-2"
        title="Path Tracing Renderer"
        description="description, description, description"
        buttonText="View Project"
        buttonLink="/projects/pathtrace"
      /></li>
      <li><ProjectPreview
        index={3}
        id="project-software-3"
        title="idk"
        description="description, description, description"
        buttonText="View Project"
        buttonLink="/projects/picshare"
      /></li>
      <li><ProjectPreview
        index={4}
        id="project-software-3"
        title="idk"
        description="description, description, description"
        buttonText="View Project"
        buttonLink="/projects/picshare"
      /></li>
    </ul>
  )
}

export default SectionWrapper(Projects, "projects");