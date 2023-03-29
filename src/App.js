import logo from './logo.svg';
import './App.css';

// note: make the page beach themed cause i love beaches :D
function App() {
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

      <h2>Works (include images)</h2>
      <ul>
        <li>
          <h3>Picshare</h3>
          <p>
            An online image editing platform with real-time collaboration. Users can hop in and out of
            drawing rooms, save images to their profile, and reload them for continued editing in the future.
          </p>
          <h4>Skills</h4>
          <ul>
            <li>React</li>
            <li>MongoDB</li>
            <li>JavaScript</li>
            <li>PeerJS</li>
            <li>AnimeJS</li>
            <li>Bootstrap</li>
            <li>CSS</li>
          </ul>
        </li>

        <li>
          <h3>Path Tracing Renderer</h3>
          <p>A rendering algorithm that uses computer graphics math techniques to generate realistic visuals!</p>
          <p>Features include:</p>
          <ul>
            <li>Texture / Alpha / Normal Mapping</li>
            <li>Area light sources</li>
            <li>Reflection & Refraction</li>
            <li>Depth of Field</li>
            <li>Importance sampling</li>
            <li>Accelerated rendering through use of Bounded Volue Hierarchies (BVH)</li>
          </ul>
          <h4>Skills</h4>
          <ul>
            <li>C</li>
            <li>Linear Algebra</li>
            <li>Statistics</li>
          </ul>
        </li>

        <li>
          <h3>BugByte</h3>
          <p>
            A top-down 2D pixel-art dungeon-crawler roguelite creature-catching game. Build an
            ever-changing team of quirky creatures and keep them alive through strategic combat as you traverse
            deeper into the Drive to uncover the mysteries of the plague.
          </p>
          <h4>Skills</h4>
          <ul>
            <li>Unity</li>
            <li>C#</li>
            <li>Aseprite</li>
            <li>Photoshop</li>
          </ul>
        </li>

        <li>
          <h3></h3>
        </li>
      </ul>
    </div>
  );
}

export default App;
