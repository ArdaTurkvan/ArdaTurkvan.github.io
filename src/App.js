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

// note: make the page beach themed cause i love beaches :D

//TODO: make functions that return different sections to pass to the Collapsibles!

export default function App() {

  const animationRef = React.useRef(null);

  function nameTitle() {
    return (
      <div className='wavy-text header'><h1>{[..."Arda Turkvan"].map((letter, index) => <span key={index} className='letter'>{letter}</span>)}</h1></div>
    )
  }

  return (
    <div className="App">
      <Navbar />
      <div id="home" className='parallax header-container'>
        {nameTitle()}
        <h2 className='header'><WavyText text="Software Engineer, Game Designer, Nerd"></WavyText></h2>
      </div>

      <div className='scrolling-background page-container'>
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
