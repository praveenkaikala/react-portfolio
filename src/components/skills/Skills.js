import React from 'react';
import './skills.css';
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiMongodb } from 'react-icons/di';
import { SiMysql } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
// Skill data in JSON format
const skillsData = [
  { icon: <FaReact />, name: 'React JS' },
  { icon: <TbBrandNextjs />, name: 'Next JS' },
  { icon: <FaNodeJs />, name: 'Node JS' },
  { icon: <FaNodeJs />, name: 'Express JS' },
  { icon: <DiMongodb />, name: 'MongoDB' },
  { icon: <SiMysql />, name: 'SQL' },
  { icon: <FaDocker  />, name: 'Docker' },
  { icon: <SiTailwindcss   />, name: 'Docker' },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
        <div className="heading">
          <h3>Skills</h3>
        </div>
      <div className="boxcontent">
      
        <div className="mainbox">
          <div className="frontend">
            {skillsData.map((skill, index) => (
              <div key={index} className="box">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
