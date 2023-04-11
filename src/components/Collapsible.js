import React from 'react'

export default function Collapsible({ child }) {

    const [hidden, setHidden] = React.useState(true);
    const [childHeight, setChildHeight] = React.useState(0);
    const selfRef = React.useRef(null);

    React.useEffect(() => {
        const childHeightRaw = selfRef.current.clientHeight;
        console.log(childHeightRaw)

    });

    function toggle () {
        setHidden(!hidden);
    }
    return (
        <div ref={selfRef} className='collapsible'>
            <button onClick={toggle}></button>
            {hidden ? child : <div></div>}
        </div>
    )
}
