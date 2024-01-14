import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../../styles'
import NavItem from './NavItem'
import { layout } from './NavData'

export default function Navbar() {

    return (
        <nav>
            <div className={`${styles.paddingX} flex flex-col gap-3`}>
                {
                    layout.map((item, index) => {
                        return (
                            <NavItem to={item.url} key={index}><h2 className='text-center mt-6 mx-8 rounded-[30px] whitespace-nowrap'>{item.text}</h2></NavItem>
                        )
                    })
                }
            </div>  
        </nav>
  )
}
