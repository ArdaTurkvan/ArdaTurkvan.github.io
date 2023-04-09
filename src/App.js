import React from 'react'
import { Parallax, Background } from 'react-parallax';
import projectData from './data/projectinfo.json'

// Styles
import './style/App.css';
import './style/aboutme.css';
import './style/project.css';
import './style/social.css';
import './style/navbar.css';
import './style/text.css';

// Fonts
import './fonts/coolvetica.otf'

// Components
import Project from './components/Project'
import anime from 'animejs';
import Collapsible from './components/Collapsible';
import BodyBubble from './components/BodyBubble';
import WavyText from './components/WavyText';

// note: make the page beach themed cause i love beaches :D

//TODO: make functions that return different sections to pass to the Collapsibles!

export default function App() {

  const animationRef = React.useRef(null);
  /*React.useEffect(() => {
    animationRef.current = anime({
      targets: ".letter",
      loop: true,
      translateY: [0, 8, 0],
      direction: 'normal',
      easing: 'easeInOutSine',
      delay: anime.stagger(120)
    });
  });*/


  // -------------------------------------------------
  //        SECTION CONTENT-RENDERING FUNCTIONS
  // -------------------------------------------------

  function nameTitle() {
    return (
      <div>Arda Turkvan</div>
    )
  }

  // renders content for the 'About me' section
  function sectionAboutMe() {
    return (
      <div>
        <div className='about-me content-container'>
          <BodyBubble child={
            <p className='description'>
            I'm a graduate of the <WavyText text="University of Toronto Scarborough Computer Science"/> program, specializing
            in <WavyText text="Software Engineering"/>.
            <br></br>
            I'm currently enrolled in the <WavyText text="Postgraduate Game Design program at George Brown College."/>
            <br></br>
            One of my proudest accomplishments is writing a <WavyText text="path tracing renderer"/> from scratch in C.
            <br></br>
            My favorite pastimes include playing <WavyText text="MapleStory"/> and <WavyText text="Hearthstone"/>, <a href="https://www.instagram.com/arda_farda/" target="_blank" rel="noreferrer">drawing & painting</a>,
            and biking along the Beaches in the summer!
          </p>
          }></BodyBubble>
      </div>
    </div>
    );
  }

  // renders content for the 'Projects' section
  function sectionProjects() {
    return (
      <div>
        <div className='subsection-header-wrap'>
          <div className='subsection-header'><h3>Software Engineering (include images)</h3></div>
        </div>
        {
          projectData.projects.filter((project) => project.type === "software").map((project, index) => 
          <Project key={index} name={project.name} url={project.url} year={project.year} desc={project.desc} skills={project.skills}/>)
        }

        <h3>Game Design (include images)</h3>
        {
          projectData.projects.filter((project) => project.type === "game").map((project, index) => 
          <Project key={index} name={project.name} url={project.url} year={project.year} desc={project.desc} skills={project.skills} />)
        }
      </div>
    );
  }

  function sectionSocials() {
    return (
      <div className='socials-container'>
        <p><a href="https://ca.linkedin.com/in/arda-turkvan-8a6a96211" target="_blank" rel="noreferrer">LinkedIn</a></p>
        <p><a href="https://github.com/ArdaTurkvan" target="_blank" rel="noreferrer">GitHub</a></p>
        <p><a href="https://www.instagram.com/arda_farda/" target="_blank" rel="noreferrer">Instagram</a></p>
      </div>
    );
  }

  return (
    <div className="App">
      <div className='navbar'><WavyText text="This will be a navbar at some point"></WavyText></div>
      <div className='parallax header-container'>
        {nameTitle()}
        <div className='wavy-text'><h1>{[..."Arda Turkvan"].map((letter, index) => <span key={index} className='letter'>{letter}</span>)}</h1></div>
        <h2><WavyText text="Software Engineer, Game Designer, Nerd"></WavyText></h2>
      </div>

      <div className='scrolling-background'>
        <div className='page-container'>

          <div className='section section1'>
            <div className='section-header-wrap'>
              <div className='section-header'><h2>About Me</h2></div>
            </div>    
            <Collapsible child={sectionAboutMe()}></Collapsible>
          </div>
        
          <div className='section section2'>
            <div className='section-header-wrap'>
              <div className='section-header'><h2>Projects</h2></div>
            </div>
            <Collapsible child={sectionProjects()}></Collapsible>
          </div>

          <div className='section section3'>
            <div className='section-header-wrap'>
              <div className='section-header'><h2>Get in touch!</h2></div>
            </div>
            <Collapsible child={sectionSocials()}></Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
}
