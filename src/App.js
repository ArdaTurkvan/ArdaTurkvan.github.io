import React from 'react'

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
import Projects from './components/Projects.js';
import anime from 'animejs';
import Collapsible from './components/Collapsible';
import WavyText from './components/WavyText';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

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
      <div className='wavy-text'><h1>{[..."Arda Turkvan"].map((letter, index) => <span key={index} className='letter'>{letter}</span>)}</h1></div>
    )
  }

  return (
    <div className="App">
      <div className='navbar'><WavyText text="This will be a navbar at some point"></WavyText></div>
      <div className='parallax header-container'>
        {nameTitle()}
        <h2><WavyText text="Software Engineer, Game Designer, Nerd"></WavyText></h2>
      </div>

      <div className='scrolling-background page-container'>
        <AboutMe />
        <Projects />

          <div className='section section3'>
            <div className='section-header-wrap'>
              <div className='section-header'><h2>Get in touch! (put in resume)</h2></div>
            </div>
            <Collapsible child={<Contact />}></Collapsible>
          </div>
      </div>
    </div>
  );
}
