import React from 'react'
import '../style/project.css'
import '../style/App.css'
import anime from 'animejs'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

/*
 * A component dedicated to displaying a project that I've worked on
 */

// TODO: Add a hard skills, soft skills distinction
export default function Project({ name, url, year, desc, skills }) {

  const animationRef = React.useRef(null);

  React.useEffect(() => {
    animationRef.current = anime({
      targets: ".project-header-wrap",
      loop: true,
      translateY: 4,
      duration: 500,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });
  });

  // Body bubble hover handlers

  function enterBodyBubble(el) {
    animationRef.current = anime({
      targets: el,
      loop: false,
      scale: 1.04,
      direction: "normal",
      elasticity: 200
    });
  }

  function leaveBodyBubble(el) {
    animationRef.current = anime({
      targets: el,
      loop: false,
      scale: 1,
      direction: "normal",
      elasticity: 200
    });
  }

  // Header bubble hover handlers

  function enterHeaderBubble(el) {
    animationRef.current = anime({
      targets: el,
      loop: false,
      scale: 1.1,
      direction: "normal",
      elasticity: 200,
    });
  }

  function leaveHeaderBubble(el) {
    animationRef.current = anime({
      targets: el,
      loop: false,
      scale: 1,
      direction: "normal",
      elasticity: 200,
    });
  }

  function headerOnClick() {
    window.open(url, "_blank");
  }


  return (
    <div className='project content-container'>
      <div>

        <div className='project-header-wrap'>
          <div className='project-header bubble' onMouseEnter={(e) => enterHeaderBubble(e.target)} onMouseLeave={(e) => leaveHeaderBubble(e.target)} onClick={headerOnClick}>
            <h4>{name}</h4>
          </div>
        </div>

        <div className='body-bubble' onMouseEnter={(e) => enterBodyBubble(e.target)} onMouseLeave={(e) => leaveBodyBubble(e.target)}>
          <p className='description'>{desc}</p>
          <div className='skills-section'>
            <h5>Skills</h5>
            <ul className='skills-list'>
              {skills.map((skill) => <li className='skill-container'><div className='skill'>{skill}</div></li>)}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
