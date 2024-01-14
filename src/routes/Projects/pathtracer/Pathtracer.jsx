import React from 'react'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import SectionDivider from '../../../components/SectionDivider'
import BackButton from '../../../components/BackButton'
import { Carousel } from 'react-responsive-carousel'

export default function Pathtracer() {

  return (
    <motion.div
      initial={{opacity: 0, x: 100 }}
      animate={{opacity: 1, x: 0}}
      exit={{ opacity: 0, x: 100 }}
      transition={{
          ease: "easeOut",
          duration: 0.4
      }}
      className='mt-5'
    >
      <div className='flex'>
        <BackButton to='/projects' />
        <h2 className={"md:text-5xl text-3xl"}>Path Tracing Renderer</h2>
      </div>
      <h3>SOFTWARE PROJECT</h3>
      <SectionDivider center={false} width={2} />
      <div className='flex md:flex-row flex-col'>
        <div className="mt-6 mr-6 flex-grow">
            <p>A rendering algorithm that uses computer graphics math techniques to generate realistic visuals! The techniques used in this kind of technique are the very same that are used today in all kinds of 3D media, from movies to video games!</p>
            <p>Features include: Texture / Alpha / Normal Mapping, Area light sources, Reflection & Refraction, Depth of Field, Importance sampling, Recursive shapes, and Accelerated rendering through use of Bounded Volume Hierarchies (BVH) - all of which were implemented by me.</p>

            <p>Aside from starter code I was given as part of the Computer Graphics course at University of Toronto Scarborough, I created the entire rendering algorithm using C. MATLAB was used to ensure that the math was correct before implementation. The project originally started as a more simple Phong Illumination ray tracer, which then served as a code base for the statistics-based Path Tracing version. I used recursion to simulate thousands of light rays being fired through each pixel of a 1024x1024 image, with each light ray having a maximum of 10 bounces.</p>

            <p>My render also won the award for being the best render in the class, and I got a mug with the render on it as a prize!</p>

            <p>The first picture below is the final render, and the second picture is a progress photo taken of two simple spheres, one reflective and one refractive, inside of a <a href="https://en.wikipedia.org/wiki/Cornell_box" target="_blank" rel="noreferrer">Cornell Box</a>.</p>
        </div>
        <Carousel className='md:max-w-[40%] max-w-full mr-6 mt-6' showArrows={true} dynamicHeight={false}>
            <div>
                <img src="/pathtracer/carousel-1.png"></img>
                <p className='legend'>The final render</p>
            </div>
            <div>
                <img src="/pathtracer/carousel-2.png"></img>
                <p className='legend'>Cornell Box render</p>
            </div>
        </Carousel> 
      </div>
    </motion.div>
  )
}
