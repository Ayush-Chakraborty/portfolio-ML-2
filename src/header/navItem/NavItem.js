import React from 'react'
import './navItem.css'
function NavItem({children,observer}) {
    const href=children.replace(' ','')
    const link="#"+href
    return (
        <a className="navItem" href={link}>
            {children}
            <div className="border"></div>
        </a>
    )
}

export default NavItem
