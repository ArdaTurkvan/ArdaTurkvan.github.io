import React from 'react'
import anime from 'animejs'

export default function WavyText({ text, delay=1 }) {

    const [hovered, setHovered] = React.useState(false);

    const textRef = React.useRef(null);

    const animationRef = React.useRef(null);

    React.useEffect(() => {
        Array.from(textRef.current.children).forEach((span, index) => {
            setInterval(() => {
                span.classList.add("wavy");
            }, index*60*delay);
        });
    });

    /*React.useEffect(() => {
        if (hovered) {
            animationRef.current = anime({
                targets: textRef.current.children,
                loop: true,
                translateY: [0, -4, 4, 0],
                duration: 400,
                direction: 'normal',
                easing: 'easeInOutSine',
                delay: anime.stagger(70)
            });


        } else {
            animationRef.current = anime({
                targets: textRef.current.children,
                loop: false,
                color: '#000',
                easing: 'easeInOutSine',
            });
        }

    }, [hovered]);*/

    /*function handleOnMouseEnter() {
        setHovered(true);
        animationRef.current.reset()
        animationRef.current.play()
    }

    function handleOnMouseLeave() {
        setHovered(false);
        animationRef.current.pause()
        animationRef.current.reset()
    }*/

    /*return (
    <div ref={textRef} className={'clickable important'} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>{[...text].map((letter, index) => <span key={index} className='letter'>{letter}</span>)}</div>
    )*/

    return (
        <div className={"wavy-wrap"} ref={textRef}>
            { [...text].map((letter, index) => <span key={index} className='letter hover-letter'>{letter}</span>) }
        </div>
    )
}
