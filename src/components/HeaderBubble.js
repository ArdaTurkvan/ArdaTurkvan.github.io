import React from 'react'
import anime from 'animejs'


export default function HeaderBubble({ title, url, child }) {

    // keep track of if the bubble is hovered
    // the ref lets us reference this specific instance of the bubble
    // (so all bubbles dont animate when one is hovered)
    const [hovered, setHovered] = React.useState(false);
    const bubble = React.useRef(null)

    // lets us control the animations
    const animationRef = React.useRef(null);

    // handles what happens when the header is clicked
    // currently opens a passed in url in a new window
    function handleOnClick() {
        window.open(url, "_blank");
    }

    // handles setting the hovered state based on if the mouse is over the component
    function handleOnMouseEnter() {
        setHovered(true);
    }

    function handleOnMouseLeave() {
        setHovered(false);
    }

    // hover animation

    React.useEffect(() => {
        if (hovered) {
            animationRef.current = anime({
                targets: bubble.current,
                loop: false,
                scale: 1.1,
                direction: "normal",
                elasticity: 200,
            });
        } else {
            animationRef.current = anime({
                targets: bubble.current,
                loop: false,
                scale: 1,
                direction: "normal",
                elasticity: 200
            });
        }
    });

    // cannot for the life of my figure out how to get this hover to work in tandem with the higlight animation
    // on the backburner for now
    /*React.useEffect(() => {
        animationRef.current = anime({
            targets: bubble.current,
            loop: true,
            translateY: 4,
            duration: 500,
            direction: 'alternate',
            easing: 'easeInOutSine'
        });
    });*/

    return (
    <div>
        <div ref={bubble} className='project-header-wrap' onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} onClick={handleOnClick}>
            <div className='project-header bubble'>
                <h4>{title}</h4>
            </div>
        </div>
    </div>
    )
}
