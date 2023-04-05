import React from 'react'
import '../style/project.css'

/*
 * A component dedicated to displaying a project that I've worked on
 */

// TODO: Add a hard skills, soft skills distinction
export default function Project({ name, url, year, desc, skills }) {
  return (
    <div>
      <div className='project-content-container'>
        <h3><a href={url} target="_blank" rel="noreferrer">{name}</a> - {year}</h3>
        <p className='description'>{desc}</p>
        <div className='skills-section'>
          <h4>Skills</h4>
          <ul className='skills-list'>
            {skills.map((skill) => <li className='skill-container'><div className='skill'>{skill}</div></li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
