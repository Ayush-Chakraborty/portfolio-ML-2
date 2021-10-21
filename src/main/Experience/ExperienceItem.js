import React from "react";
import "./experienceItem.css";
// import DateRangeIcon from '@mui/icons-material/DateRange';
import Button from "../../UI/button/Button";
function ExperienceItem({ title, clg, date, desc, link, guide, guideLink }) {
    return (
        <div className="experienceItem">
            <div className="experienceItem__data">
                <div className="experienceItem__leftbar"></div>
                <div className="experienceItem__main">
                    <h1 className="experienceItem__title">{title}</h1>
                    <div className="experienceItem__clgDate">
                        <h2>
                            {clg}
                            {guide && (
                                <h3>
                                    <span>Guide: </span>
                                    <a href={guideLink} target="_blank" rel="noreferrer">
                                        {guide}{" "}
                                    </a>
                                </h3>
                            )}
                        </h2>
                        <h2> {date}</h2>
                    </div>
                    {/* <p>{desc}</p> */}
                    {desc}
                </div>
            </div>
            {link && (
                <div className="experienceItem__img">
                    <Button>Go to Project</Button>
                </div>
            )}
        </div>
    );
}

export default ExperienceItem;
