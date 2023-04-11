import React from 'react'
import projectData from '../data/projectinfo.jsx'
import Project from './Project.js';
import Collapsible from './Collapsible.js';
import { useInView } from 'react-intersection-observer';
import Hover from './Hover.js';

export default function Projects() {

    const selfRef = React.useRef(null);
    const [viewRef, inView] = useInView({
        triggerOnce: false,
        rootMargin: '0px 0px',
        delay: 1000
    })

    const [hidden, setHidden] = React.useState(true);

    /*React.useEffect(() => {
        animationRef.current = anime({
            targets: selfRef.current,
            loop: false,
            duration: 500,
            scale: [0.8, 1.0],
            opacity: [0.0, 1.0],
            direction: 'normal',
            easing: 'easeOutQuad'
        });
    }, [hidden]);*/

    /*function toggle() {
        setHidden(!hidden);
    }*/

    function renderContent() {
        return (
            <div ref={selfRef}>
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
        <div ref={viewRef} className='section section2 shadow'>
            <a className='anchor' id='section2'></a>
            <Hover>
                <div className='section-header-wrap shadow'>
                    <div className='section-header'><h2>Projects (put in more detail)</h2></div>
                </div>
            </Hover>
            {renderContent()}
        </div>
    );
}
