import React from 'react'
import styles from './Title.module.css'

export default function Title() {
    return (
        <div id="title" className="relative w-full h-screen flex flex-col items-center justify-center">
            <h1 className="sm:text-8xl text-6xl">Arda Turkvan</h1>
            <hr className={`${styles.divider_title}`} />
            <h3 className="sm:text-xl text-base">Developer | Game Designer | Illustrator</h3>
        </div>
  )
}
