import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { skills, experiences } from "../../constants";

import './Skills.scss';

const tooltipVariants = {
  hidden: { opacity: 0, y: -10 },   // État caché
  visible: { opacity: 1, y: 0 },    // État visible
  exit: { opacity: 0, y: -10 },     // Animation de sortie
  transition: { type: "spring", stiffness: 300, damping: 20 }, // Transition avec un effet "spring"
};

const Skills = () => (
  <>
    <h2 className="head-text">Skills & Experiences</h2>
    <div className="app__skills-container">
      {/* Liste des compétences */}
      <motion.div className="app__skills-list">
        {skills.map((skill, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}   // Animation d'apparition
            transition={{ duration: 0.5 }}
            className="app__skills-item app__flex"
            key={index}
          >
            <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
              <img src={skill.image} alt={skill.name} />
            </div>
            <p className="p-text">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Expérience */}
      <div className="app__skills-exp">
        {experiences.map((experience, index) => (
          <motion.div className="app__skills-exp-item" key={index}>
            <div className="app__skills-exp-year">
              <p className="bold-text">{experience.year}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {experience.works.map((work, index) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}   // Animation d'apparition
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={work.name}
                  key={index}
                >
                  <h4 className="bold-text">{work.name}</h4>
                  <p
                    data-tooltip-id={work.name}
                    data-tooltip-content={work.description}
                    data-tooltip-place="right"
                  >
                    {work.company}
                  </p>

                  {/* Tooltip pour la description avec animation */}
                  <Tooltip id={work.name} className="skills-tooltip">
                    <motion.div
                      initial="hidden"   // Initialement caché
                      animate="visible"  // Quand visible
                      exit="exit"        // Animation de sortie
                      variants={tooltipVariants}  // Variants pour gérer les états d'animation
                      transition={{ duration: 0.4, type: "spring" }}  // Transition avec effet "spring"
                    >
                      {work.description}
                    </motion.div>
                  </Tooltip>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </>
);

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'compétences',
  'app__whitebg'
);
