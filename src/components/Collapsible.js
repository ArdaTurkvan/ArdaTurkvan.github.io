import React from 'react'

export default function Collapsible({ child }) {

    const [hidden, setHidden] = React.useState(true);

    return (
        <div>{child}</div>
    )
}
