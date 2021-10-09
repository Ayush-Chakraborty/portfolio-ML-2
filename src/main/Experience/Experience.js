import React from 'react'
import SectionHeading from '../../UI/sectionHeading/SectionHeading'
import ExperienceItem from './ExperienceItem'
function Experience() {
    const experienceList=[
        {
            title:"Domain Adaptation with Feature Space Extraction with NAS and Adversarial Training "
            ,clg:"University of California San Diego"
            ,date:"Sept 2021 - Present"
            ,desc:"We propose a novel method to establish domain adaptation for computer vision problems. We use three architecture simultaneously as an end-to-end model. Domain Specific and Overall representations are extracted using neural network, encoder block and classifier head. Then with proper operations on the representations we train a classifier on a domain agnostic representation of the image. We train the extractors in an adversarial setting along with the application of Neural Architecture Search Algorithms for better generalizations."
        },
        {
            title:"A novel method to train Machine Learning Models Inspired by Human Learning"
            ,clg:"University of California San Diego"
            ,date:"Sept 2021 - Present"
            ,desc:"In this project we propose a novel training method different than the traditional rather more like Human-Learning. Inspired by the classroom-learning methods such as learning by passing tests, learning by ignoring, learning by interleaving etc. We also implement Neural Architecture search algorithms to establish better generalization. "
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
