import React from 'react'
import { useState } from 'react'
import { styles } from '../../styles'
import navstyles from './Navbar.module.css'
import NavItem from './NavItem'
import { layout } from './NavData'
import { motion } from 'framer-motion'
import { textVariant } from '../../utils/motion'
import SectionDivider from '../SectionDivider'

export const NavHamburger = () => {

  const [open, setOpen] = useState(false);
  const handleOnClick = () => {
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <div className={' flex flex-col content-center'}>
      <nav className={ (open ? ' flex flex-col content-center bg-primary opacity-85 h-full w-screen' : 'hidden') + ' transition-all'}>
        <NavHamburgerItems setOpen={ setOpen } /> 
      </nav>
      <motion.div className={navstyles.menuicon + ' ' + navstyles.icon + ' fixed right-0 mt-6 mr-6'} onClick={handleOnClick}
        whileHover={{
          scale: 1.2,
          backgroundColor: "bg-secondary",
          transition: {
            duration: 0.3,
            type: "tween"
          }
        }}
        whileTap={{
          scale: 0.9,
          transition: {
            duration: 0.1,
            type: "tween"
          }
        }}
      >
      </motion.div>
    </div>
  )
}

const NavHamburgerItems = ({ setOpen }) => {

  return (
    <div className={`${styles.paddingX} flex flex-col flex-grow`} onClick={() => { setOpen(false); }}>
        {
            layout.map((item, index) => {
                return (
                  <div className='flex-grow flex flex-col justify-center' key={index}>
                    <motion.div
                      initial="hidden"
                      whileInView="show"
                      variants={textVariant(0.1)}
                      className=''
                    >
                      <NavItem to={item.url} className=''><h2 className='text-center mx-8 rounded-[30px] whitespace-nowrap pb-0'>{item.text}</h2></NavItem>
                      <SectionDivider width={2} center={true} marginY={0} once={false} duration={0.5} delay={0.1} />
                    </motion.div> 
                  </div>
                )
            })
        }
    </div>
  )
}
