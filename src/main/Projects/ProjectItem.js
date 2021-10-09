import React from 'react'
import './projectItem.css'
import Button from '../../UI/button/Button'
function ProjectItem({title,date,paperList,link,Img,desc}) {
    return (
        <div className="projectItem">
           {Img}
           <div>
                <h2 className="projectItem__title">{title}</h2>
                <h4 className="projectItem__date">{date}</h4>
                    {paperList && 
                        <div>
                            <h3 className="projectItem__paperHeading">Implementation of Paper:</h3>
                            <ul className="projectItem__paperList">
                                {paperList.map(({paperName,paperLink})=> 
                                <li className="projectItem__paperListItem">  <a href={paperLink} target="_blank">{paperName}</a> </li>)}
                            </ul>
                        </div>
                    }
                    <Button><a href={link} target="_blank">Project Link</a></Button>
           </div>
                <p className="projectItem__desc">{desc}</p>
           </div>
    )
}

export default ProjectItem
