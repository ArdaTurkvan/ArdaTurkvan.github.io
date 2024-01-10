import React from 'react'
import Project from './Project'
import ProjectPreview from './ProjectPreview'

import { motion } from 'framer-motion'

export default function Projects() {
    
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="sm:text-5xl text-3xl">Projects</h2>
      <ul className="flex gap-40 flex-wrap sm:justify-start justify-center pt-10">
        <li><ProjectPreview
          id="project-software-1"
          title="PicShare"
          description="description, description, description"
          buttonText="View Project"
          buttonLink="/projects/picshare"
        /></li>
        <li><ProjectPreview
          id="project-software-2"
          title="Path Tracing Renderer"
          description="description, description, description"
          buttonText="View Project"
          buttonLink="/projects/pathtrace"
        /></li>
        <li><ProjectPreview
          id="project-software-3"
          title="idk"
          description="description, description, description"
          buttonText="View Project"
          buttonLink="/projects/picshare"
        /></li>
        <li><ProjectPreview
          id="project-software-3"
          title="idk"
          description="description, description, description"
          buttonText="View Project"
          buttonLink="/projects/picshare"
        /></li>
      </ul>
    </motion.div>
  )
}
