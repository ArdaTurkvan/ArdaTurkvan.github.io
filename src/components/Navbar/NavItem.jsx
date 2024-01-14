import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// *NOTE: this will have a state and a link, which will take care of the animating and selected styling
export const NavItem = ({ to, children }) => {
  
  const navigate = useNavigate();
  const handleOnClick = () => { navigate(to); }

  return (
      <motion.div
          whileHover={{
              backgroundColor: 'rgba(80, 80, 80, 0.5)',
              scale: 1.2,
              borderRadius: 10,
              transition: {
                  duration: 0.1,
                  type: "tween"
              },
          }}
          whileTap={{
              backgroundColor: 'rgba(50, 50, 50, 0.5)',
              color: '#2196f3',
              scale: 0.995,
              transition: {
                duration: 0.05,
                type: "easeOut"
            },
          }}
          className='hover:cursor-pointer w-full h-full select-none'
          onClick={handleOnClick}
    >
      {children}
      </motion.div>
  )
}

export default NavItem;