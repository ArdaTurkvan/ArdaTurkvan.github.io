import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const BackButton = ({ to }) => {

    const navigate = useNavigate();
    const handleOnClick = () => { navigate(to); }
    return (
        <motion.div
            whileHover={{
                x: -10,
                transition: {
                    duration: 0.3,
                    type: "tween"
                },
            }}
            whileTap={{
                scale: 0.9
            }}
            className='back-arrow hover:cursor-pointer'
            onClick={handleOnClick}
        >
        </motion.div>
  )
}

export default BackButton