import React from 'react'
import SectionHeading from '../../UI/sectionHeading/SectionHeading'
import './education.css'
import Institue from './Institute/Institue'
function Education() {
    return (
        <section id="education">
            <SectionHeading>Education</SectionHeading>
            <div className="education__div">
                <h2 className="education__year">2023</h2>
                <div className="education__divider"></div>
                <Institue
                    education="B. Tech in Computer Science and Engineering"
                    name=" National Institute of Technology Warangal"
                    location="Warangal, India"
                    marks="CGPA 9.22/10"
                />
                <h2 className="education__year">2019</h2>
                <div className="education__divider"></div>
                <Institue
                    education="Higher Secondary Education (WBCHSE)"
                    name="Pathfinder Higher Secondary Public High School "
                    location="Jodhpur Park, Kolkata, India"
                    marks="97.6 %"
                />
                <h2 className="education__year">2016</h2>
                <div className="education__divider education__last"></div>
                <Institue
                    education="Secondary Education (WBBSE)"
                    name="Belda Gangadhar Academy "
                    location="Paschim Medinipur, West Bengal, India"
                    marks="96.57 %"
                />
            </div>
        </section>
    )
}

export default Education
