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
      <h2 className="sm:text-5xl text-3xl">Projects</h2>
      <div className="flex gap-20 flex-wrap justify-center pt-10">
        <ProjectPreview
          id="project-software-1"
          title="PicShare"
          description="description, description, description"
          buttonText="View Project"
          buttonLink="/projects/picshare"
        />
        <ProjectPreview
          id="project-software-2"
          title="Path Tracing Renderer"
          description="description, description, description"
          buttonText="View Project"
          buttonLink="/projects/pathtrace"
        />
        <ProjectPreview
          id="project-software-3"
          title="idk"
          description="description, description, description"
          buttonText="View Project"
          buttonLink="/projects/picshare"
        />
      </div>
    </div>
  )
}
