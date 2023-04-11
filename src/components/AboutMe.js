import React from 'react'
import anime from 'animejs'
import { useInView } from 'react-intersection-observer';
import BodyBubble from './BodyBubble';
import Collapsible from './Collapsible';

export default function AboutMe() {

    const animationRef = React.useRef(null);
    const selfRef = React.useRef(null);
    const [viewRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px 0px',
        delay: 1000
    })

    const [hidden, setHidden] = React.useState(false);

    React.useEffect(() => {
        animationRef.current = anime({
            targets: selfRef.current,
            loop: false,
            duration: 500,
            scale: [0.8, 1.0],
            opacity: [0.0, 1.0],
            direction: 'normal',
            easing: 'easeOutQuad'
        });
    }, [hidden]);

    function toggle() {
        setHidden(!hidden);
    }

    function renderContent() {
        return (
            <div>
                <div ref={selfRef} className='content-container'>
                    <BodyBubble child={
                        <div className='description'>
                            <p>
                                I'm a graduate of the <span className="important">University of Toronto Scarborough Computer Science</span> program, specializing
                                in <span className="important">Software Engineering</span>.
                            </p>
                            <p>
                                I'm currently enrolled in the <span className="important">Postgraduate Game Design</span> program at <span className="important">George Brown College.</span>
                            </p>
                            <p>
                                One of my proudest accomplishments is writing a <span className="important">path tracing renderer</span> from scratch in <span className="important">C</span>.
                            </p>
                            <p>
                                My <span className="important">favorite pastimes</span> include playing MapleStory and Hearthstone, <a href="https://www.instagram.com/arda_farda/" target="_blank" rel="noreferrer">drawing & painting</a>,
                                and biking along the Beaches in the summer!
                            </p>
                        </div>
                    }></BodyBubble>
                </div>
            </div>
        );
    }

    return (
      <div ref={viewRef} className='section section1'>
            <div className='section-header-wrap shadow'>
              <div className='section-header'><h2>About Me</h2></div>
            </div>    
            {renderContent()}
        </div>
      );
}
