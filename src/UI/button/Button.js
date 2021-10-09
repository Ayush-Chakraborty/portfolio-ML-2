import React from 'react'
import './button.css'
function Button({children}) {
    return (
        <button  className="btn">
            {children}
        </button>
    )
}

export default Button
