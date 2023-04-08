import React from 'react'
import '../style/project.css'
import '../style/App.css'
import HeaderBubble from './HeaderBubble'
import anime from 'animejs'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import BodyBubble from './BodyBubble'

/*
 * A component dedicated to displaying a project that I've worked on
 */

// TODO: Add a hard skills, soft skills distinction
export default function Project({ name, url, year, desc, skills }) {

  const animationRef = React.useRef(null);

  /*React.useEffect(() => {
    animationRef.current = anime({
      targets: ".project-header-wrap",
      loop: true,
      translateY: 4,
      duration: 500,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });
  });*/

  // Body bubble hover handlers

  return (
    <div className='project content-container'>
      <div>

        <HeaderBubble title={name} url={url}/>

        <BodyBubble child={
          <div>
            <p className='description'>{desc}</p>
            <div className='skills-section'>
              <h5>Skills</h5>
              <ul className='skills-list'>
                {skills.map((skill, index) => <li key={index} className='skill-container'><div className='skill'>{skill}</div></li>)}
              </ul>
            </div>
          </div>
        }></BodyBubble>

      </div>
    </div>
  )
}
