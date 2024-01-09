import React from 'react'
import { Link } from "react-router-dom"
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/motion'

const ProjectCard = ({ index, children }) => {
    return (
        <Tilt className="xs:w-[250px] w-full" tiltReverse={true}>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className='w-[320px] green-pink-gradient p-[1px] rounded-[10px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-tertiary rounded-[10px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
                >
                    {children}
                </div>
            </motion.div>
        </Tilt>
    )
}

export default function ProjectPreview({
    id,
    title,
    description,
    buttonText,
    buttonLink
}) {
    return (
        <div>
            <div className="mt-0 flex flex-wrap gap-10">
                <ProjectCard index={1}>
                    <h3 className="text-[30px]">{title}</h3>
                    <p>{description}</p>
                    <p>preview Image</p>
                    <Link to={buttonLink}>View Project</Link>
                </ProjectCard>
            </div>
        </div>
  )
}
