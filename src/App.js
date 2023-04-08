import React from 'react'
import { Parallax, Background } from 'react-parallax';

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

// note: make the page beach themed cause i love beaches :D

//TODO: make functions that return different sections to pass to the Collapsibles!

export default function App() {

  const projects = [
    // Software Engineering projects
    {
      type: "software",
      name: "Picshare",
      url: "https://google.ca",
      year: "2021",
      desc: "An online image editing platform with real-time collaboration. Users can hop in and out of drawing rooms, save images to their profile, and reload them for continued editing in the future.",
      skills: ["React", "MongoDB", "JavaScript", "PeerJS", "AnimeJS", "Bootstrap", "CSS"]
    },

    {
      type: "software",
      name: "Path Tracing Renderer",
      url: "",
      year: "2022",
      desc: "A rendering algorithm that uses computer graphics math techniques to generate realistic visuals! Features include: Texture / Alpha / Normal Mapping, Area light sources, Reflection & Refraction, Depth of Field, Importance sampling, Accelerated rendering through use of Bounded Volue Hierarchies (BVH)",
      skills: ["C", "Linear Algebra", "Statistics"]
    },

    {
      type: "software",
      name: "BugByte",
      url: "",
      year: "2023",
      desc: "A top-down 2D pixel-art dungeon-crawler roguelite creature-catching game. Build an ever-changing team of quirky creatures and keep them alive through strategic combat as you traverse deeper into the Drive to uncover the mysteries of the plague.",
      skills: ["Unity", "C#", "Aseprite", "Photoshop"]
    },

    // Game Design projects
    {
      type: "game",
      name: "Break the Card Tower",
      url: "",
      year: "2023",
      desc: "Lead programmer on a George Brown College game project aaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      skills: ["Trello", "Interpersonal", "Unity", "C#"]
    },

    {
      type: "game",
      name: "Attack on Titan: Division",
      url: "",
      year: "2023",
      desc: "Co-creator of an Attack on Titan fan boardgame, created in Tabletop Simulator! aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa",
      skills: ["Miro", "TTS Workshop", "Lua", "Photoshop", "nanDECK"]
    }
  ];

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

  // renders content for the 'About me' section
  function sectionAboutMe() {
    return (
      <div>
        <div className='about-me content-container'>
          <BodyBubble child={
            <p className='description'>
            I'm a graduate of the University of Toronto Scarborough Computer Science program, specializing
            in Software Engineering.
            <br></br>
            I'm currently enrolled in the Postgraduate Game Design program at George Brown College.
            <br></br>
            One of my proudest accomplishments is writing a path tracing renderer from scratch in C.
            <br></br>
            My favorite pastimes include playing MapleStory and Hearthstone, <a href="https://www.instagram.com/arda_farda/" target="_blank" rel="noreferrer">drawing & painting</a>,
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
          projects.filter((project) => project.type === "software").map((project, index) => 
          <Project key={index} name={project.name} url={project.url} year={project.year} desc={project.desc} skills={project.skills}/>)
        }

        <h3>Game Design (include images)</h3>
        {
          projects.filter((project) => project.type === "game").map((project, index) => 
          <Project key={index} name={project.name} url={project.url} year={project.year} desc={project.desc} skills={project.skills} />)
        }
      </div>
    );
  }

  return (
    <div className="App">
      <div className='navbar'>This will be a navbar at some point</div>
      <div className='parallax header-container'>
        <div className='wavy-text'><h1>{[..."Arda Turkvan"].map((letter, index) => <span key={index} className='letter'>{letter}</span>)}</h1></div>
        <h2>Software Engineer, Game Designer, Nerd</h2>
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

          <div className='section'>
            <div className='socials-container'>
              <p><a href="https://ca.linkedin.com/in/arda-turkvan-8a6a96211" target="_blank" rel="noreferrer">LinkedIn</a></p>
              <p><a href="https://github.com/ArdaTurkvan" target="_blank" rel="noreferrer">GitHub</a></p>
              <p><a href="https://www.instagram.com/arda_farda/" target="_blank" rel="noreferrer">Instagram</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
