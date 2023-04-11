import React from 'react'
import projectData from '../data/projectinfo.jsx'
import Project from './Project.js';
import Collapsible from './Collapsible.js';

export default function Projects() {

    function renderContent() {
        return (
            <div>
                <div className='subsection-header-wrap'>
                    <div className='subsection-header'><h3>Software</h3></div>
                </div>
                {
                    projectData.projects.filter((project) => project.type === "software").map((project, index) => 
                    <Project key={index} name={project.name} url={project.url} year={project.year} content={project.content} skills={project.skills}/>)
                }
        
                <h3>Games</h3>
                {
                    projectData.projects.filter((project) => project.type === "game").map((project, index) => 
                    <Project key={index} name={project.name} url={project.url} year={project.year} content={project.content} skills={project.skills} />)
                }
            </div>
        );
    }

    return (
        <div className='section section2'>
            <div className='section-header-wrap'>
              <div className='section-header'><h2>Projects (put in more detail)</h2></div>
            </div>
            <Collapsible child={renderContent()}></Collapsible>
        </div>
    );
}
