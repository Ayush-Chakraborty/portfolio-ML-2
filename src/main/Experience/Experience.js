import React from 'react'
import SectionHeading from '../../UI/sectionHeading/SectionHeading'
import ExperienceItem from './ExperienceItem'
function Experience() {
    const experienceList=[
        {
            title:"Inference on the Immunity of Normalization Against Progressive Bit-Flip Attack on Neural Networks"
            ,clg:"Indian Institute of Technology Roorkee"
            ,date:"Apr 2021 - Jun 2021"
            ,desc:"This ICCV paper describes a novel attack by flipping vulnerable bits of weights through a progressive search and iscapable of incapacitating almost any popular Network Architecture by bringing their accuracy below 10% with lessthan 20 bit flips out of several millions of bits. My aim is to gain inference on how different normalization methodslike L2 Norm, Jacobian Norm, Spectral Norm etc. which have proven their efficiency against Adversarial examples,provide immunity against PBFA."
        }
    ]
    return (
        <section id="experience">
            <SectionHeading>Experience</SectionHeading>
            {experienceList.map(({title,clg,date,desc})=>
                <ExperienceItem
                    title={title}
                    clg={clg}
                    date={date}
                    desc={desc}
                />
            )}
        </section>
    )
}

export default Experience
