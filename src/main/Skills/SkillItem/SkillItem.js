import React from "react";
import "./skillitem.css";
import python from "./python.png";
import cpp from "./cpp.png";
import ds from "./ds.png";
import java from "./java.png";
import shell from "./shell.png";
import tf from "./tf.png";
import torch from "./torch.png";
import opencv from "./opencv.svg";
const skills = {
    "python": python,
    "java": java,
    "c++": cpp,
    "Open CV": opencv,
    "Tensorflow": tf,
    "Torch": torch,
    "DS & Algo": ds,
    "Shell Scripting": shell,
};
function SkillItem() {
    const skillList = [];
    Object.keys(skills).forEach((key) => {
        const item = skills[key];
        skillList.push(
            <div className="skillitem">
                <img
                    src={item}
                    alt={`${key} logo`}
                    className="skillitem__img"
                    loading="lazy"
                />
                <p className="skillitem__name">{key}</p>
            </div>
        );
    });
    return skillList;
}

export default SkillItem;
