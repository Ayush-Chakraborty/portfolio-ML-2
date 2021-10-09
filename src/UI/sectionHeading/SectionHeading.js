import React from 'react'
import './sectionHeading.css'
function SectionHeading({children,className}) {
    return (
        <h1 className={`sectionHeading ${className}`}>
            {children}
        </h1>
    )
}

export default SectionHeading
