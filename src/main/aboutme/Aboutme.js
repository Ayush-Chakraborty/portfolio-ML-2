import React, { useRef } from "react";
import { useEffect } from "react";
import "./aboutme.css";
import Button from "../../UI/button/Button";
const generateRandomLetter = (start) => {
    const ascii = start + ((Math.random() * 100) % 26);
    return String.fromCharCode(ascii);
};
const generateRandomString = (reference_str, str = "", len = -1) => {
    if (len === 0) return str;
    for (let i = str.length; i < reference_str.length; i++) {
        if (reference_str[i] === " ") str += " ";
        else if (reference_str[i].toLowerCase() === reference_str[i])
            str += generateRandomLetter(97);
        else str += generateRandomLetter(65);
        len--;
        if (len === 0) return str;
    }
    return str;
};
const part3 = (refObj, refVal) => {
    return new Promise((resolve) => {
        let start = 0;
        const stop3 = setInterval(() => {
            let curr = refVal.substring(0, start);
            refObj.current.innerText = generateRandomString(refVal, curr);
            start++;
            if (start > refVal.length) {
                clearTimeout(stop3);
                resolve();
            }
        }, 100);
    });
};
const part2 = (refObj, refVal) => {
    return new Promise((resolve) => {
        let cnt = 0;
        const stop2 = setInterval(() => {
            refObj.current.innerText = generateRandomString(refVal);
            cnt++;
            if (cnt > 7) {
                clearTimeout(stop2);
                resolve();
            }
        }, 100);
    });
};
const part1 = (refObj, refVal) => {
    return new Promise((resolve) => {
        let start = 0;
        let curr_text = "";
        const stop1 = setInterval(() => {
            curr_text = generateRandomString(refVal, curr_text, 1);
            refObj.current.innerText = curr_text;
            start++;
            if (start > refVal.length) {
                clearTimeout(stop1);
                resolve();
            }
        }, 90);
    });
};

const animate = async (refObj, refVal) => {
    await part1(refObj, refVal);
    await part2(refObj, refVal);
    await part3(refObj, refVal);
};

function Aboutme() {
    const name = useRef();
    const about = useRef();
    const runAnimation = async () => {
        await animate(name, "SOUMYADIP PAYRA");
        await animate(about, "ML Developer and Vision Intelligence Enthusiast");
    };
    useEffect(() => {
        runAnimation();
    }, []);
    return (
        <section className="aboutme" id="aboutme">
            <aside>
                <div className="img"></div>
                <Button>
                    <a href="https://drive.google.com/file/d/1Ao5lCBwku0IduMMjmQEhrl_lHzwAW0b_/view" target="_blank">CV Link</a>
                </Button>
            </aside>
            <div className="aboutme__body">
                <h3>Hello I'm</h3>
                <h1 ref={name} className="animation">
                    &nbsp;
                </h1>
                <h2 ref={about} className="animation">
                    &nbsp;
                </h2>
                <p>
                    I am a pre-final year undergraduate student majoring in
                    Computer Science and Engineering at the National Institute
                    of Technology Warangal, India. My research interests mainly
                    revolve around Machine Intelligence and Perception. I have
                    also tried to explore and learn more about Adversarial
                    Attacks, Trustworthy & Explainable AI and Reinforcement
                    Learning.
                </p>
                <p>
                    I am currently interning remotely at the Vision Lab of
                    University of California, San Diego. Prior to this I have
                    interned at the University of Florida and the Indian
                    Institute of Technology, Roorkee and do constantly
                    collaborate with the Research Group at NIT W.
                </p>
                <p>
                    I am looking for long-term research opportunities and summer
                    internships (2022) in the aforesaid domains to pave the path
                    for pursuing Ph.D. after the completion of my sophomore
                    studies.
                </p>
            </div>
        </section>
    );
}

export default Aboutme;
