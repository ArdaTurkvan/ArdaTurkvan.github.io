import React from 'react'
import Project from './Project'
import ProjectPreview from './ProjectPreview'

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
    <div>
      <ProjectPreview
        id="project-software-1"
        title="PicShare"
        description="description, description, description"
        buttonText="View Project"
        buttonLink="/projects/picshare"
      />
    </div>
  )
}
