import React from 'react'
import anime from 'animejs'

export default function Hover(props) {

    const animationRef = React.useRef(null);
    const selfRef = React.useRef(null);

    React.useEffect(() => {
        animationRef.current = anime({
            targets: selfRef.current,
            translateY: [0, 6],
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine'
        });
    });

    return (
        <div className="front" ref={selfRef}>{props.children}</div>
    )
}
