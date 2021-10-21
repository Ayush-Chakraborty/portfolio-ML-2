import React from "react";
import SectionHeading from "../../UI/sectionHeading/SectionHeading";
import ExperienceItem from "./ExperienceItem";
function Experience() {
    const experienceList = [
        {
            title: "Infusing 3D Awarness in GANs using Optical Flow",
            clg: "Video Analytics Lab, Indian Institute of Science",
            date: "Oct 2021 - Present",
            guide: "Prof. Venkatesh Babu & Tejan Karmali",
            guideLink: "https://val.cds.iisc.ac.in/people.html",
            desc: (
                <p>
                    We trying to make GANs generate 3D structure without implicitly training it on
                    any 3D data set. We are using the{" "}
                    <a href="https://github.com/NVlabs/stylegan2" target="_blank" rel="noreferrer">
                        StyleGAN2
                    </a>{" "}
                    as our base model. Along with this we are using Optical Flow to make the GANs
                    aware of 3D structure. Training has been successfully done on synthetic data
                    sets. Training on the real data set is yet to be done.
                </p>
            ),
        },
        {
            title: "Domain Adaptation with Feature Space Extraction with NAS and Adversarial Training",
            clg: "University of California San Diego",
            date: "Postponed, Resume from Dec 2021",
            guide: "Prof. Pengtao Xie",
            guideLink: "https://pengtaoxie.github.io/",
            desc: (
                <p>
                    We propose a novel method to establish domain adaptation for computer vision
                    problems. We use three architecture simultaneously as an end-to-end model.
                    Domain Specific and Overall representations are extracted using neural network,
                    encoder block and classifier head. Then with proper operations on the
                    representations we train a classifier on a domain agnostic representation of the
                    image. We train the extractors in an adversarial setting along with the
                    application of Neural Architecture Search Algorithms for better generalizations
                </p>
            ),
        },
        {
            title: "Saliency-Attack: Exploiting the Explanation of Deep Neural Network",
            clg: "National Institute of Technology Warangal",
            date: "Sep 2021 - Present",
            desc: (
                <p>
                    While studying the saliency map of pruned networks, it was observed that the
                    saliency maps are not very class specific. Saliency maps from two very different
                    classes may show very similar features. Exploiting this non-exclusivity of
                    saliency maps, I am doing a robustness study along with formulating a novel
                    adversarial attack using the vector summation of different saliency maps on the
                    input.
                </p>
            ),
        },
        {
            title: "Inference on the Immunity of Normalization Against Progressive Bit-Flip Attack on Neural Networks",
            clg: "Indian Institute of Technology Roorkee",
            date: "Apr 2021 - Jun 2021",
            guide: "Prof. Sparsh Mittal",
            guideLink: "https://pengtaoxie.github.io/",
            desc: (
                <p>
                    This{" "}
                    <a
                        href="https://ieeexplore.ieee.org/document/9009040"
                        target="_blank"
                        rel="noreferrer"
                    >
                        ICCV paper
                    </a>{" "}
                    describes a novel attack by flipping vulnerable bits of weights through a
                    progressive search and iscapable of incapacitating almost any popular Network
                    Architecture by bringing their accuracy below 10% with lessthan 20 bit flips out
                    of several millions of bits. My aim is to gain inference on how different
                    normalization methodslike L2 Norm, Jacobian Norm, Spectral Norm etc. which have
                    proven their efficiency against Adversarial examples, provide immunity against
                    PBFA.
                </p>
            ),
        },
    ];
    return (
        <section id="experience">
            <SectionHeading>Experience</SectionHeading>
            {experienceList.map(({ title, clg, date, desc, guide, guideLink }) => (
                <ExperienceItem
                    title={title}
                    clg={clg}
                    date={date}
                    desc={desc}
                    guide={guide}
                    guideLink={guideLink}
                />
            ))}
        </section>
    );
}

export default Experience;
