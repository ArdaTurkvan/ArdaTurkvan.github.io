import React from 'react'
import '../style/skills.css'

export default function Skills({ skillsList }) {

    function renderSoftSkills() {
        return (
            <ul className='skills-list'>
                {skillsList.soft.map((skill, index) =>
                    <li className="skill soft short-shadow" key={index}>
                        <div className='icon soft-icon'></div>
                        <p>{skill}</p>
                    </li>
                )}
            </ul>
        )
    }

    function renderHardSkills() {
        return (
            <ul className='skills-list'>
                {skillsList.hard.map((skill, index) =>
                    <li className="skill hard short-shadow" key={index}>
                        <div className='icon hard-icon'></div>
                        <p>{skill}</p>
                    </li>
                )}
            </ul>
        )
    }

    function renderSubjects() {
        return (
            <ul className='skills-list'>
                {skillsList.subjects.map((skill, index) =>
                    <li className="skill subject short-shadow" key={index}>
                        <div className='icon subject-icon'></div>
                        <p>{skill}</p>
                    </li>
                )}
            </ul>
        )
    }

  return (
    <div className='skills-container'>
        {'soft' in skillsList ? renderSoftSkills() : <div></div>}
        {'hard' in skillsList ? renderHardSkills() : <div></div>}
        {'subjects' in skillsList ? renderSubjects() : <div></div>}
    </div>
  )
}
