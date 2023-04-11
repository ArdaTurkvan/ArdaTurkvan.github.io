import React from 'react';
import { useInView } from "react-intersection-observer";
import '../style/project.css';
import '../style/App.css';
import HeaderBubble from './HeaderBubble';
import anime from 'animejs';
import BodyBubble from './BodyBubble';

/*
 * A component dedicated to displaying a project that I've worked on
 */

// TODO: Add a hard skills, soft skills distinction
export default function Project({ name, url, year, content, skills }) {

  const animationRef = React.useRef(null);
  const selfRef = React.useRef(null);


  const [viewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
    delay: 1000
  })

  React.useEffect(() => {
    animationRef.current = anime({
      targets: selfRef.current,
      loop: false,
      duration: 1000,
      scale: [0.8, 1.0],
      opacity: [0.0, 1.0],
      direction: 'normal',
      easing: 'easeOutQuad'
    });

    if (inView === true) {
      animationRef.current.reset();
      animationRef.current.play();
    } else {
      animationRef.current.reset();
      animationRef.current.pause();
    }
  }, [inView]);

  // Body bubble hover handlers

  return (
    <div className='project content-container'>
      <div ref={selfRef}>

        <HeaderBubble title={name} url={url}/>

        <BodyBubble child={
          <div ref={viewRef}>
            <p className='description'>{content}</p>
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
