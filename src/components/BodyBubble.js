import React from 'react'
import anime from 'animejs'

export default function BodyBubble({ child }) {

    const [hovered, setHovered] = React.useState(false);
    const bubble = React.useRef(null);

    // lets us control the animations
    const animationRef = React.useRef(null);

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
                scale: 1.04,
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

    return (
    <div>
        <div ref={bubble} className='body-bubble' onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
            {child}
        </div>
    </div>
    )
}
