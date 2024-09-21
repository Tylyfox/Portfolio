import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
import { skills, experiences } from "../../constants";
import './Skills.scss';

const tooltipVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

const Skills = () => (
  <>
    <h2 className="head-text">Skills<span> & </span>Experiences</h2>
    <div className="app__skills-container">
      <div className="app__skills-container-logo">
        {skills.map((category, index) => (
          <div key={index} className="app__skills-category">
            <h3 className="category-text">{category.category}</h3>
            <motion.div className="app__skills-list">
              {category.items.map((skill, index) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={index}
                >
                  <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                    <skill.icon size={50} color="#fff" />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
      <div className="app__skills-exp">
        {experiences.map((experience, index) => (
          <motion.div className="app__skills-exp-item" key={index}>
            <div className="app__skills-exp-year">
              <p className="bold-text">{experience.year}</p>
            </div>
            <motion.div className="app__skills-exp-works">
              {experience.works.map((work, index) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
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

                  <Tooltip id={work.name} className="skills-tooltip">
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={tooltipVariants}
                      transition={{ duration: 0.4, type: "spring" }}
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