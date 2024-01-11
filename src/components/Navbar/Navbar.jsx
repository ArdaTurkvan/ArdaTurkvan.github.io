import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../../styles'
import NavItem from './NavItem'

export default function Navbar() {

    const layout = [
        {
            url: '/#title',
            text: 'Home'
        },
        {
            url: '/#intro',
            text: 'About'
        },
        {
            url: '/work',
            text: 'Work'
        },
        {
            url: '/projects',
            text: 'Projects'
        },
    ]
    return (
        <nav>
            <div className={`${styles.paddingX} flex flex-col gap-3`}>
                {
                    layout.map((item, index) => {
                        //<NavItem link={item.link}>aaaa</NavItem>
                        console.log(item.url);
                        return (
                            <NavItem to={item.url}><h2 className='text-center mt-6 mx-8 rounded-[30px] whitespace-nowrap'>{item.text}</h2></NavItem>
                        )
                    })
                }
            </div>  
        </nav>
  )
}
