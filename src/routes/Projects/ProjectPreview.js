import React from 'react'
import { Link } from "react-router-dom"

export default function ProjectPreview({
    id,
    title,
    description,
    buttonText,
    buttonLink
}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>preview Image</p>
            <Link to={buttonLink}>View Project</Link>
        </div>
  )
}
