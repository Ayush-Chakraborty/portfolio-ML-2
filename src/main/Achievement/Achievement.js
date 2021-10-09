import React from 'react'
import AcievementItem from './AcievementItem'
import SectionHeading from '../../UI/sectionHeading/SectionHeading'
function Achievement() {
    const acievementList=[
        "Recipient of Institute Merit Scholarship for being top 1% of the institution (Academic Year of 2019-20 and 2020-21)",
        " Changed Branch from Electronics and Communication Engineering to Computer Science Engineering (2019) [Opportunity is offered to the top 3 Non-CSE students of the Institute, ranked 1st in the list] ",
        "Scored 99.6431296 percentile in Jee Main (All India Basis Engineering Entrance Exam with over a million candidates, 2019) ",
        "Recipient of KVPY (All India Basis Exam organized by the Department of Science and Technology, Govt.Of India) Fellowship (2019) ",
        "Recipient of Swami Vivekananda Merit Scholarship, 2020 (offered to the Top 10 rankers in the merit list of Higher Secondary Examination under the express order of Chief Minister, West Bengal, India) ",
        "Secured 8th rank in the merit list of Higher Secondary Examination organized by the West Bengal Council of Higher Secondary Education (2019) out of 1.5 million candidates ",
        "Secured 8th rank in the merit list of Secondary Examination organized by the West Bengal Board of Secondary Education (2016) out of 2.2 million candidates "
    ]
    return (
        <section id="achievement">
            <SectionHeading>Achievement</SectionHeading>
            {acievementList.map((item,index)=>
                <AcievementItem desc={item} key={index}/>
                )}
        </section>
    )
}

export default Achievement
