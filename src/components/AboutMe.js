import React from 'react'
import BodyBubble from './BodyBubble';
import Collapsible from './Collapsible';

export default function AboutMe() {

    function renderContent() {
        return (
            <div>
                <div className='content-container'>
                    <BodyBubble child={
                        <p className='description'>
                        I'm a graduate of the <span className="important">University of Toronto Scarborough Computer Science</span> program, specializing
                        in <span className="important">Software Engineering</span>.
                        <br></br>
                        I'm currently enrolled in the <span className="important">Postgraduate Game Design</span> program at <span className="important">George Brown College.</span>
                        <br></br>
                        One of my proudest accomplishments is writing a <span className="important">path tracing renderer</span> from scratch in <span className="important">C</span>.
                        <br></br>
                        My <span className="important">favorite pastimes</span> include playing MapleStory and Hearthstone, <a href="https://www.instagram.com/arda_farda/" target="_blank" rel="noreferrer">drawing & painting</a>,
                        and biking along the Beaches in the summer!
                        </p>
                    }></BodyBubble>
                </div>
            </div>
        );
    }

    return (
      <div className='section section1'>
            <div className='section-header-wrap'>
              <div className='section-header'><h2>About Me</h2></div>
            </div>    
            <Collapsible child={renderContent()}></Collapsible>
        </div>
      );
}
