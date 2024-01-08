import React from 'react'
import Project from './Project'

export default function Projects() {

    const projects = [
        // Software Engineering projects
        {
          type: "software",
          name: "Picshare",
          year: "2021",
          desc: "An online image editing platform with real-time collaboration. Users can hop in and out of drawing rooms, save images to their profile, and reload them for continued editing in the future.",
          skills: ["React", "MongoDB", "JavaScript", "PeerJS", "AnimeJS", "Bootstrap", "CSS"]
        },
    
        {
          type: "software",
          name: "Path Tracing Renderer",
          year: "2022",
          desc: "A rendering algorithm that uses computer graphics math techniques to generate realistic visuals! Features include: Texture / Alpha / Normal Mapping, Area light sources, Reflection & Refraction, Depth of Field, Importance sampling, Accelerated rendering through use of Bounded Volue Hierarchies (BVH)",
          skills: ["C", "Linear Algebra", "Statistics"]
        },
    
        {
          type: "software",
          name: "BugByte",
          year: "2023",
          desc: "A top-down 2D pixel-art dungeon-crawler roguelite creature-catching game. Build an ever-changing team of quirky creatures and keep them alive through strategic combat as you traverse deeper into the Drive to uncover the mysteries of the plague.",
          skills: ["Unity", "C#", "Aseprite", "Photoshop"]
        },
    
        // Game Design projects
        {
          type: "game",
          name: "Break the Card Tower",
          year: "2023",
          desc: "desc",
          skills: ["a skill"]
        },
    
        {
          type: "game",
          name: "Attack on Titan: Division",
          year: "2023",
          desc: "desc",
          skills: ["a skill"]
        }
    ]
    
    return (
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
  )
}
