import React from 'react'
import { motion } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import SectionWrapper from '../../components/SectionWrapper'
import SectionDivider from '../../components/SectionDivider'
import { textVariant } from '../../utils/motion'
import { experiences } from './WorkData'

const ExperiencePreview = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#303030", color: "#fff" }}
      contentArrowStyle={{ borderRight: '7px solid #303030' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white worktitle text-[20px]'>{experience.title}</h3>
        <h3>{experience.company}</h3>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.bullets.map((bullet, index) => {
            
            return <li key={`experience-point-${index}`} className='pl-1 tracking-wider'>
              {bullet}
            </li>
          })}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

export const Work = () => {
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
      <h2 className="sm:text-5xl text-3xl">Work</h2>
      <h3>WHAT I HAVE DONE SO FAR</h3>
      <SectionDivider center={false} width={2} />

      <div className='mt-24'>
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return <ExperiencePreview key={index} experience={experience} />
          })}
        </VerticalTimeline>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Work, "Work");
