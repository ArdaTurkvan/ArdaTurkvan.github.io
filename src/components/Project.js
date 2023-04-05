import React from 'react'
import '../style/project.css'
import '../style/App.css'

/*
 * A component dedicated to displaying a project that I've worked on
 */

// TODO: Add a hard skills, soft skills distinction
export default function Project({ name, url, year, desc, skills }) {
  return (
    <div className='project content-container'>
      <div>
        <h4><a href={url} target="_blank" rel="noreferrer">{name}</a> - {year}</h4>
        <p className='description'>{desc}</p>
        <div className='skills-section'>
          <h5>Skills</h5>
          <ul className='skills-list'>
            {skills.map((skill) => <li className='skill-container'><div className='skill'>{skill}</div></li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
