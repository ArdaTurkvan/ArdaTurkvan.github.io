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
              color: '#2196f3',
              textDecoration: 'underline',
              backgroundColor: 'rgba(80, 80, 80, 0.5)',
              scale: 1.2,
              transition: {
                  duration: 0.3,
                  type: "tween"
              },
          }}
          whileTap={{
              scale: 0.9
          }}
          className='hover:cursor-pointer w-full'
          onClick={handleOnClick}
    >
      {children}
      </motion.div>
  )
}

export default NavItem;