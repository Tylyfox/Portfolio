import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip'


import {AppWrap, MotionWrap} from '../../wrapper';
import { skills, experiences } from "../../constants";

import './Skills.scss';

const Skills = () => {

    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill,index) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={index}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={skill.image} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="app__skills-exp">
                    {experiences.map((experience, index) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={`${experience.year}-${index}`}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work, index) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                            key={`${work.name}-${index}`}
                                        >
                                            <h4 className="bold-text">{work.name}</h4>
                                            <p
                                                data-tooltip-id={work.name}
                                                data-tooltip-content={work.description}
                                                data-tooltip-place="right"
                                            >
                                                {work.company}
                                            </p>
                                            <Tooltip id={work.name} className="skills-tooltip"/>
                                        </motion.div>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'compétences',
    'app__whitebg'
);