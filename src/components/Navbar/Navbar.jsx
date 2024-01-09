import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../../styles'

export default function Navbar() {
    return (
        <nav>
            <div className={`${styles.paddingX} flex flex-col gap-3 items-center`}>
                <Link to='/#title'>Arda&nbsp;Turkvan</Link>
                <Link to='/#intro'>About</Link>
                <Link to='/work'>Work</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/tech'>Tech</Link>
            </div>  
        </nav>
  )
}
