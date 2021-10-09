import React from 'react'
import './achievementItem.css'
import img from './icon.jpg'
function AcievementItem({desc}) {
    return (
        <div className="achievementItem">
            <div className="achievementItem__icon">
                <img src={img} alt="" />
            </div>
            <div className="achievementItem__body">{desc}</div>
        </div>
    )
}

export default AcievementItem
