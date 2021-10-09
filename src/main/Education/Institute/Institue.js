import React from 'react'
import './institute.css'
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
function Institue({education,name,location,marks}) {
    return (
        <div className="institute">
            <h2 className="institute__education">{education}: &nbsp; {marks}</h2>
            <h3 className="institute__name">
                <SchoolRoundedIcon className="institute__icon"/>
                {name}
            </h3>
            <p className="institute__location">
                <LocationOnRoundedIcon className="institute__icon"/>
               { location}
            </p>
        </div>
    )
}

export default Institue
