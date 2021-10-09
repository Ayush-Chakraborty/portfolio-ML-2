import React from 'react'
import './experienceItem.css'
// import DateRangeIcon from '@mui/icons-material/DateRange';
import Button from '../../UI/button/Button'
function ExperienceItem({title,clg,date,desc,link}) {
    return (
        <div className="experienceItem">
            <div className="experienceItem__data">
                <div className="experienceItem__leftbar"></div>
                <div className="experienceItem__main">
                    <h1 className="experienceItem__title">{title}</h1>
                    <div className="experienceItem__clgDate">
                        <h2>{clg}</h2>
                        <h2>  {date}</h2>
                    </div>
                    <p>{desc}</p>
                </div>
            </div>
            {link &&
                <div className="experienceItem__img">
                    <Button>Go to Project</Button>
                </div>
            }
        </div>
    )
}

export default ExperienceItem
