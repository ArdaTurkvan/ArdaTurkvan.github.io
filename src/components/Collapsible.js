import React from 'react'

export default function Collapsible({ child }) {

    const [hidden, setHidden] = React.useState(true);

    function toggle () {
        setHidden(!hidden);
    }
    return (
        <div className='collapsible'>
            <button onClick={toggle}></button>
            {hidden ? child : <div></div>}
        </div>
    )
}
