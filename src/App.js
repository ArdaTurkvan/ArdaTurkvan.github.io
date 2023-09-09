import React from 'react'
import { Outlet } from 'react-router-dom';

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
import Navbar from './components/Navbar';
import Hover from './components/Hover';

// note: make the page beach themed cause i love beaches :D

//TODO: make functions that return different sections to pass to the Collapsibles!

export default function App() {

  const animationRef = React.useRef(null);

  React.useEffect(() => {
    animationRef.current = anime.timeline();
    animationRef.current.add({
      targets: '.cool-header .letter',
      translateY: [-500, 0],
      opacity: [0.0, 1.0],
      duration: 800,
      easing: 'easeOutSine',
      direction: 'normal',
      delay: anime.stagger(60)
    })
    .add({
      targets: '.subheader',
      translateY: [50, 0],
      opacity: [0.0, 1.0],
      duration: 1000,
      easing: 'easeOutSine'
    });
  });


  function nameTitle() {
    return (
      <Hover>
        <div className='wavy-text header cool-header'>
          <h1>
            <span>{[..."Arda"].map((letter, index) => <span key={index} className='letter'>{letter}</span>)}</span>
            <span>{[..."Turkvan"].map((letter, index) => <span key={index} className='letter'>{letter}</span>)}</span>
          </h1>
        </div>
      </Hover>
    )
  }

  return (
    <div className="App">
      <Navbar />
      <div id="home" className='parallax header-container'>
        {nameTitle()}
        <div className='subheader-wrap'>
          <h2 className='subheader cool-subheader'><WavyText text="Software Engineer | "></WavyText></h2>
          <h2 className='subheader cool-subheader'><WavyText text="Game Designer"></WavyText></h2>
        </div>
      </div>

      <div className='scrolling-background page-container'>
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
