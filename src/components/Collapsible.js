import React from 'react'
import anime from 'animejs'

export default function Collapsible({ child, state }) {

    //const [hidden, setHidden] = React.useState(true);
    //const [childHeight, setChildHeight] = React.useState(0);
    const selfRef = React.useRef(null);
    const heightRef = React.useRef(null);
    const animationRef = React.useRef(null);

    /*React.useEffect(() => {
        const childHeightRaw = selfRef.current.clientHeight;
        console.log(childHeightRaw)

    });*/

    React.useEffect(() => {
        if (state === false) {
            animationRef.current = anime({
                targets: selfRef.current,
                maxHeight: [0, heightRef.current.clientHeight],
                duration: 1000,
                loop: false,
                easing: "easeInOutSine",
                direction: 'normal'
            })
        } else {
            animationRef.current = anime({
                targets: selfRef.current,
                maxHeight: [heightRef.current.clientHeight, 0],
                duration: 100,
                loop: false,
                easing: "easeInOutSine",
                direction: 'normal'
            })
        }
    }, [state])

    /*function toggle () {
        setHidden(!hidden);
    }*/

    return (
        <div ref={selfRef} className={state ? 'hidden' : 'visible'}>
            <div ref={heightRef}>{child}</div>
        </div>
    )
}
