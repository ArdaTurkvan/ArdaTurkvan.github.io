import React from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { motion } from 'framer-motion'

export default function NavbarSocials() {
    return (
        <div className="flex flex-col items-center py-6">
            <motion.div
                whileHover={{
                    color: '#2196f3',
                    textDecoration: 'underline',
                    fill: "red" ,
                    scale: 1.2,
                    transition: {
                        duration: 0.3,
                        type: "tween"
                    },
                }}
                whileTap={{
                    scale: 0.9
                }}
            >
                <a href="https://ca.linkedin.com/in/arda-turkvan-8a6a96211" target="_blank"><p className={styles.linkedinicon + " " + styles.icon} /></a>
            </motion.div>
            <motion.div
                whileHover={{
                    color: '#2196f3',
                    textDecoration: 'underline',
                    scale: 1.2,
                    transition: {
                        duration: 0.3,
                        type: "tween"
                    },
                }}
                whileTap={{
                    scale: 0.9
                }}
            >
                <a href="https://github.com/ArdaTurkvan" target="_blank"><p className={styles.githubicon + " " + styles.icon} /></a>
            </motion.div>
        </div>
    )
}
