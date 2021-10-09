import React from 'react'
import './navItem.css'
import { useEffect } from 'react'
function NavItem({children,observer}) {
    const href=children.replace(' ','')
    // useEffect(()=>{
    //     const section=document.getElementById(href)
    //     // observer && observer.observe(section)
    // },[])
    const link="#"+href
    return (
        <a className="navItem" href={link}>
            {children}
            <div className="border"></div>
        </a>
    )
}

export default NavItem
