import React from 'react'
import '../style/text.css'
import YoutubeEmbed from '../components/YoutubeEmbed'

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
                <p>Below is a demo video of the website in action:</p>
                <div className='image-display'>
                    <YoutubeEmbed embedId='wtXimtG0aaQ' />
                </div>
                <p className='important'><em>This GitHub repository is private and available upon request</em></p>
            </div>,
            "skills": {
                "soft": ["Self-learning", "Project Management", "Collaboration"],
                "hard": ["React", "MongoDB", "JavaScript", "PeerJS", "Express.js", "AnimeJS", "Bootstrap", "CSS", "Trello"],
            }
        },
    
        {
            "type": "software",
            "name": "Path Tracing Renderer",
            "url": "",
            "year": "2022",
            "content": <div>
                <p>A <span className="important">rendering algorithm</span> that uses computer graphics math techniques to generate realistic visuals! Features include: <span className="important">Texture / Alpha / Normal Mapping, Area light sources, Reflection & Refraction, Depth of Field, Importance sampling, Recursive shapes,</span> and <span className="important">Accelerated rendering through use of Bounded Volue Hierarchies (BVH)</span> - all of which were implemented by me.</p>
                <p>Aside from starter code I was given as part of the <span className="important">Computer Graphics course</span> at <span className="important">University of Toronto Scarborough</span>, I created the entire rendering algorithm using <span className="important">C</span>. <span className="important">MATLAB</span> was used to ensure that the math was correct before implementation. The project originally started as a more simple <span className="important">Phong Illumunation</span> ray tracer, which then served as a code base for the statistics-based Path Tracing version. I used recursion to simulate thousands of light rays being fired through each pixel of a 1024x1024 image, with each light ray having a maximum of 10 bounces.</p>
                <p>My render also won the <span className="important">award for being the best render</span> in the class, and I got a mug with the render on it as a prize!</p>
                <p>The first picture below is the final render, and the second picture is a progress photo taken of two simple spheres, one reflective and one refractive, inside of a <a href="https://en.wikipedia.org/wiki/Cornell_box" target="__blank">Cornell Box</a>.</p>
                <div className="image-display">
                    <div className="flex-image-display">
                        <img className="short-shadow" src="pathtracer1.png" alt="The final resulting render that I won an award for!"></img>
                    </div>
                    <div className="flex-image-display">
                        <img className="short-shadow" src="pathtracer2.png" alt="A progress step of the algorithm being ran on a 'Cornell Box', a simple box room with 2 different colored walls and 2 spheres - one reflective and one refractive."></img>
                    </div>
                </div>
                <p className='important'><em>This GitHub repository is private and available upon request</em></p>
            </div>,
            "skills": {
                "hard": ["C", "MATLAB"],
                "subjects": ["Linear Algebra", "Statistics"]
            }
        },
    
        {
            "type": "game",
            "name": "BugByte",
            "url": "",
            "year": "2023 - ???",
            "content": <div>
                <p>A 2D pixel-art dungeon-crawler roguelite creature-catching game, meant to capture the same emotions as a <a href="https://bulbapedia.bulbagarden.net/wiki/Nuzlocke_Challenge" target="__blank">Pokemon Nuzlocke</a> playthrough. Build an ever-changing team of quirky creatures and keep them alive through strategic combat as you traverse deeper into the Drive to uncover the mysteries of the plague.</p>
                <p>The game is currently a <span className='important'>work in progress</span>, but I intend to create every aspect of the game by myself. That includes original 32-bit animated <span className='important'>pixel art</span>, all of the <span className='important'>Unity</span> code, and all the <span className='important'>concept art</span> I need.</p>
                <p>This is a self-driven thesis project, part of the <span className='important'>Game Design program</span> at <span className='important'>George Brown College</span>.</p>
                <p><span className='important'>Stay tuned!</span></p>
            </div>,
            "skills": {
                "hard": ["Unity", "C#", "Aseprite", "Photoshop"],
                "subjects": ["Linear Algebra", "Art", "Animation"]
            }
        },
        
        {
            "type": "game",
            "name": "Break the Card Tower",
            "url": "",
            "year": "2023",
            "content": <div>
                <p>A Roguelike deck-building strategy game developed as part of <span className='important'>George Brown College</span>'s <span className='important'>Game Design</span> program. We developed a <span className='important'>vertical slice</span> which we then displayed at the <a href="https://levelupshowcase.com">2023 Level Up Student Showcase</a> in Toronto.</p>
                <p>I was the <span className='important'>Technical Director</span> of the project. As part of my responsibilities, I was in charge of managing and directing our group of talented student programmers to ensure that progress was smooth in converting game design documents into tangible gameplay. I would host regular <span className='important'>sprint meetings</span> and <span className='important'>stand-ups</span> to check in with the programmers. Additionally, I served as the <span className='important'>bridge</span> between our art and programming teams, as I had a lot of experience with both ends.</p>
                <p>I also contributed to the project directly, by writing the code for the hexagonal board, to help make the student programmers' workloads lighter!</p>
                <p>The project spanned a total of 6 months, from design and documentation to vertical slice.</p>
                <div className='image-display'>
                    <img className="short-shadow" src="bct1.png" alt="The logo for our game!"></img>
                    <YoutubeEmbed embedId="bj7SxtplFX8" />
                </div>
            </div>,
            "skills": {
                "soft": ["Interpersonal", "Management"],
                "hard": ["Unity", "C#", "Trello"],
            }
        },
    
        {
            "type": "game",
            "name": "Attack on Titan: Division",
            "url": "",
            "year": "2023",
            "content": <div>
                <p>Co-creator of an Attack on Titan fan boardgame, created in <span className="important">Tabletop Simulator</span>! I helped bring the game to life by taking part in early game design stages, designing the core gameplay loop and unique 3-player aspect. I then ported the game over to Tabletop Simulator. There I implemented plenty of quality-of-life <span className="important">Lua scripts</span> to make the game run smoother, and created all the custom art assets using a combination of <span className="important">Photoshop</span> and <span className="important">nanDECK</span>.</p>
                <p>The logo and all art depicting characters, including on cards and on the logo, are property of <em>Attack On Titan</em> and <em>Hajime Isayama</em>.</p>
                <div className='image-display'>
                    <div className="flex-image-display">
                        <img className="short-shadow" src="aotdivision1.png" alt="The logo for our game!"></img>
                    </div>
                    <div className='flex-image-display'>
                        <img className="short-shadow"src="aotdivision2.png" alt="An in-game screenshot of our board game inside Tabletop Simulator"></img>
                    </div>
                </div>
            </div>,
            "skills": {
                "soft": ["Game Design", "Gameplay Iteration"],
                "hard": ["Miro", "TTS Workshop", "Lua", "Photoshop", "nanDECK"],
            }
        },

        {
            "type": "game",
            "name": "MVTANT",
            "url": "",
            "year": "2015",
            "content": <div>
                <p>A self-driven project where I created a core game prototype for a run-and-gun platforming game! Made entirely in <span className='important'>Game Maker</span> using its built in language, <span className='important'>GML</span>. All artwork in the game was <span className='important'>hand-drawn by me</span> using Game Maker's built in sprite editor!</p>
                <p>As part of the project, I pushed myself to learn <span className='important'>GML</span> from scratch. I built all mechanics, including physics and combat mechanics for shooting and weapon-switching, myself. You can also shoot in all directions both on the ground and in the air!</p>
                <p>I am still to this day incredibly proud of what I was able to achieve!</p>
                <div className='image-display'>
                    <img className="short-shadow" src="mvtant1.png" alt="The logo for my game!"></img>
                    <YoutubeEmbed embedId='00uL37ako44' />
                </div>
            </div>,
            "skills": {
                "soft": ["Self-learning"],
                "hard": ["Game Maker", "GML", "Photoshop"],
                "subjects": ["Art", "Animation"]
            }
        }
    ]
}