import React from 'react'
import ProjectItem from './ProjectItem'
import SectionHeading from '../../UI/sectionHeading/SectionHeading'
import img1 from './img1.jpeg'
function Project() {
    const projectList=[
        {
            title:"Artistic Image Generation using Neural Style Transfer with Modified Loss Function",
            date:"Dec 2020 - Jan 2021",
            paperList:[
                {
                    paperName:"A Neural Algorithm for Artistic Style",
                    paperLink:"https://arxiv.org/abs/1508.06576"
                },
                {
                    paperName:"Computationally Efficient Approaches for Image Style Transfer",
                    paperLink:"https://www.researchgate.net/publication/326437546_Computationally_Efficient_Approaches_for_Image_Style_Transfer"
                }
            ],
            link:"https://github.com/Soumya296/Neural_Style_transfer",
            img: <img src={img1} alt="" className="project__img" />,
            desc:"Here, Charbonnier loss function is used to capture the content more prominently. Also, total variation loss has been implemented to make the output more coherent throughout."
        },
        {
            title:"Hand-Sign Detection using CNN",
            date:"Dec 2020 - Jan 2021",
            paperList:null,
            link:"https://github.com/Soumya296/Neural_Style_transfer",
            img:"",
            desc:"Designed a simple Convolutional Neural Network using TensorFlow-Keras along with the implementation Open-CV library to detect and identify different Hand-Signs in real-time."
        },

    ]
    return (
        <section id="projects">
            <SectionHeading>Projects</SectionHeading>
            {projectList.map(({title,date,paperList,link,img,desc},index)=>
                <ProjectItem
                    title={title}
                    date={date}
                    paperList={paperList}
                    link={link}
                    Img={img}
                    desc={desc}
                    key={index}
                />
            )}
        </section>
    )
}

export default Project
