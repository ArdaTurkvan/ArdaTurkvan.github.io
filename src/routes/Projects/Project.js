import React from 'react'

/*
 * A component dedicated to displaying a project that I've worked on
 */
export default function Project({ name, year, desc, skills }) {
  return (
    <div>
        <h3>{name} {year}</h3>
          <p>{desc}</p>
          <h4>Skills</h4>
          <ul>
            {skills.map((skill) => <li>{skill}</li>)}
          </ul>
    </div>
  )
}
