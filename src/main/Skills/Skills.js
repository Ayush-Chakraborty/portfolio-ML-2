import React from 'react'
import './skills.css'
import SectionHeading from'../../UI/sectionHeading/SectionHeading'
import SkillItem from './SkillItem/SkillItem'
function Skills() {
    return (
        <section id="skills">
            <SectionHeading>Skills</SectionHeading>
            <div className="skills">
                <SkillItem/>
            </div>
        </section>
    )
}

export default Skills
