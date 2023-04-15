import React from 'react'
import '../style/text.css'

export default {
    "projects": [
        {
            "type": "software",
            "name": "Picshare",
            "url": "https://google.ca",
            "year": "2021",
            "content": <div>
                <p>An online image editing platform written using <span className="important">JavaScript</span>, <span className="important">HTML</span> and <span className="important">CSS</span>, with <span className="important">real-time collaboration</span>. Users can hop in and out of drawing rooms, save images to their profile, and reload them for continued editing in the future. Picshare is a <span className="important">full-stack</span> web application developed by me and my partner, <a href="https://github.com/JohnvadL" target="_blank" rel="noreferrer">John V. Lal</a>, as part of the <span className="important">Web Programming course</span> at <span className="important">University of Toronto Scarborough</span>.</p>
                <p>As part of the project, I made significant contributions to the early backend architecture through setting up our <span className="important">RESTful web API</span> with <span className="important">Express.js</span>. I was also fully in charge of the website front-end and peer-to-peer connectivity. I designed and wrote all of the UI, the title screen, and the chat.</p>
                <p className='important'><em>This GitHub repository is private and available upon request</em></p>
            </div>,
            "skills": ["React", "MongoDB", "JavaScript", "PeerJS", "Express.js", "AnimeJS", "Bootstrap", "CSS"]
        },
    
        {
            "type": "software",
            "name": "Path Tracing Renderer",
            "url": "",
            "year": "2022",
            "content": <div>
                <p>A <span className="important">rendering algorithm</span> that uses computer graphics math techniques to generate realistic visuals! Features include: <span className="important">Texture / Alpha / Normal Mapping, Area light sources, Reflection & Refraction, Depth of Field, Importance sampling, Recursive shapes,</span> and <span className="important">Accelerated rendering through use of Bounded Volue Hierarchies (BVH)</span>.</p>
                <p>Aside from starter code I was given as part of the <span className="important">Computer Graphics course</span> at <span className="important">University of Toronto Scarborough</span>, I created the entire rendering algorithm using <span className="important">C</span>. The project originally started as a more simple <span className="important">Phong Illumunation</span> ray tracer, which then served as a code base for the statistics-based Path Tracing version. I used recursion to simulate thousands of light rays being fired through each pixel of a 1024x1024 image, with each light ray having a maximum of 10 bounces.</p>
                <p>My render also won the <span className="important">award for being the best render</span> in the class, and I got a mug with the render on it as a prize!</p>
                <div className="image-display">
                    <img src="pathtracer1.png" alt="The final resulting render that I won an award for!"></img>
                    <img src="pathtracer2.png" alt="A process photo of the algorithm being ran on a 'Cornell Box', a simple box room with 2 different colored walls and 2 spheres - one reflective and one refractive."></img>
                </div>
                <p className='important'><em>This GitHub repository is private and available upon request</em></p>
            </div>,
            "skills": ["C", "Linear Algebra", "Statistics"]
        },
    
        {
            "type": "game",
            "name": "BugByte",
            "url": "",
            "year": "2023",
            "content": "A top-down 2D pixel-art dungeon-crawler roguelite creature-catching game. Build an ever-changing team of quirky creatures and keep them alive through strategic combat as you traverse deeper into the Drive to uncover the mysteries of the plague.",
            "skills": ["Unity", "C#", "Aseprite", "Photoshop"]
        },
        
        {
            "type": "game",
            "name": "Break the Card Tower",
            "url": "",
            "year": "2023",
            "content": <div>
                <p>Test content</p>
            </div>,
            "skills": ["Trello", "Interpersonal", "Unity", "C#", "Management"]
        },
    
        {
            "type": "game",
            "name": "Attack on Titan: Division",
            "url": "",
            "year": "2023",
            "content": <div>
                <p>Co-creator of an Attack on Titan fan boardgame, created in <span className="important">Tabletop Simulator</span>! I helped bring the game to life by taking part in early game design stages, designing the core gameplay loop and unique 3-player aspect. I then ported the game over to Tabletop Simulator. There I implemented plenty of quality-of-life <span className="important">Lua scripts</span> to make the game run smoother, and created all the custom art assets using a combination of <span className="important">Photoshop</span> and <span className="important">nanDECK</span>.</p>
            </div>,
            "skills": ["Miro", "TTS Workshop", "Lua", "Photoshop", "nanDECK", "Design"]
        },

        {
            "type": "game",
            "name": "MVTANT",
            "url": "",
            "year": "2015",
            "content": "A self-driven project where I created a core game prototype for a run-and-gun platforming game! Made entirely in Game Maker using its built in language, GML. All artwork in the game was hand-drawn by me using Game Maker's built in sprite editor!",
            "skills": ["Game Maker", "GML", "Art"]
        }
    ]
}