import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/motion'

const ProjectCard = ({ index, children }) => {

    const [hover, setHover] = useState(false);

    return (
        <Tilt className="xs:w-[360px] w-full py-6" tiltReverse={true}>
            <motion.div
                
                variants={fadeIn("right", "spring", 0.2 * index, 2)}
                className={'w-[360px] p-[3px] rounded-[10px] shadow-card transition duration-2000 ' + (hover ? 'green-blue-gradient' : 'bg-tertiary')}
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className={"hover:cursor-pointer rounded-[10px] py-5 px-12 min-h-[320px] flex flex-col justify-evenly items-center transition " + (hover ? 'bg-primary' : 'bg-tertiary')}
                    onPointerEnter={() => setHover(true)}
                    onPointerLeave={() => setHover(false)}
                >
                    {children}
                </div>
            </motion.div>
        </Tilt>
    )
}

export default function ProjectPreview({
    index,
    id,
    title,
    description,
    buttonText,
    buttonLink
}) {
    return (
        <div>
            <div className="mt-0 flex flex-wrap gap-10">
                <ProjectCard index={index}>
                    <h3 className="text-[30px]">{title}</h3>
                    <p>{description}</p>
                    <p>preview Image</p>
                    <Link to={buttonLink}>View Project</Link>
                </ProjectCard>
            </div>
        </div>
  )
}
