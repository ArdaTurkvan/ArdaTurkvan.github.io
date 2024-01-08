import './style/App.css';
import './fonts/coolvetica.otf'
import Project from './components/Project'

// note: make the page beach themed cause i love beaches :D
export default function App() {

  const projects = [
    // Software Engineering projects
    {
      type: "software",
      name: "Picshare",
      year: "2021",
      desc: "An online image editing platform with real-time collaboration. Users can hop in and out of drawing rooms, save images to their profile, and reload them for continued editing in the future.",
      skills: ["React", "MongoDB", "JavaScript", "PeerJS", "AnimeJS", "Bootstrap", "CSS"]
    },

    {
      type: "software",
      name: "Path Tracing Renderer",
      year: "2022",
      desc: "A rendering algorithm that uses computer graphics math techniques to generate realistic visuals! Features include: Texture / Alpha / Normal Mapping, Area light sources, Reflection & Refraction, Depth of Field, Importance sampling, Accelerated rendering through use of Bounded Volue Hierarchies (BVH)",
      skills: ["C", "Linear Algebra", "Statistics"]
    },

    {
      type: "software",
      name: "BugByte",
      year: "2023",
      desc: "A top-down 2D pixel-art dungeon-crawler roguelite creature-catching game. Build an ever-changing team of quirky creatures and keep them alive through strategic combat as you traverse deeper into the Drive to uncover the mysteries of the plague.",
      skills: ["Unity", "C#", "Aseprite", "Photoshop"]
    },

    // Game Design projects
    {
      type: "game",
      name: "Break the Card Tower",
      year: "2023",
      desc: "desc",
      skills: ["a skill"]
    },

    {
      type: "game",
      name: "Attack on Titan: Division",
      year: "2023",
      desc: "desc",
      skills: ["a skill"]
    }
  ]


  return (
    <div className="App">
      <h1>Arda Turkvan</h1>
      <h2>Software Engineer, Game Designer, Nerd</h2>
      <p><a href="https://ca.linkedin.com/in/arda-turkvan-8a6a96211" target="_blank">LinkedIn</a></p>
      <p><a href="https://github.com/ArdaTurkvan" target="_blank">GitHub</a></p>
      <p><a href="https://www.instagram.com/arda_farda/" target="_blank">Instagram</a></p>

      <h2>About Me</h2>
      <p>
        I'm a graduate of the University of Toronto Scarborough Computer Science program, specializing
        in Software Engineering.
      </p>
      <p>I'm currently enrolled in the Postgraduate Game Design program at George Brown College.</p>
      <p>One of my proudest accomplishments is writing a path tracing renderer from scratch in C.</p>
      <p>
        My favorite pastimes include playing MapleStory and Hearthstone, <a href="https://www.instagram.com/arda_farda/" target="_blank">drawing & painting</a>,
        and biking along the Beaches in the summer!
      </p>

      <h2>Software Engineering (include images)</h2>
      {
        projects.filter((project) => project.type === "software").map((project) => 
        <Project name={project.name} year={project.year} desc={project.desc} skills={project.skills} />)
      }

      <h2>Game Design (include images)</h2>
      {
        projects.filter((project) => project.type === "game").map((project) => 
        <Project name={project.name} year={project.year} desc={project.desc} skills={project.skills} />)
      }

    </div>
  );
}
