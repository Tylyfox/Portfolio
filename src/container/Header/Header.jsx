import React from 'react';

import { AppWrap } from '../../wrapper';
import { motion } from "framer-motion";
import './Header.scss';
import { skills, images } from "../../constants";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

const Header = () => {
    return (
        <div className="app__header app__flex">
            <div className="app__header-info">
                <motion.div
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="app__header-img"
                >
                    <div className="app__header-img-container">
                        <img src={images.profile} alt="profile_bg" />
                    </div>
                    <div className="badge-cmp app__flex">
                        <span>✌️</span>
                        <div style={{marginLeft: 20}}>
                            <p className="p-text">Salut, je suis</p>
                            <h1 className="head-text">Valentin</h1>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variant={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className="app__header-circles"
                >
                    {[images.node, images.react, images.typescript].map((circle, index) => (
                        <div className="circle-cmp app__flex" key={`circle-${index}`}>
                            <img src={circle} alt="circle" />
                        </div>
                    ))}
                </motion.div>
            </div>
            <motion.div
                whileInView={{x: [-120, 0], opacity: [0, 1]}}
                transition={{duration: 1}}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="tag-cmp app__flex">
                        <h1 className="head-text">Développeur Full-Stack</h1>
                        <br/>
                        <p className="p-text">Passionné par le développement web, je recherche une alternance en tant que concepteur développeur d'application, spécialisé en Node.js et React.</p>
                        <p className="p-text">Diplômé en juin 2022 en tant que développeur Web Fullstack, j'ai récemment complété ma formation avec Angular et Spring Boot.</p>
                        <p className="p-text"> Mon parcours m'a permis d'acquérir des compétences solides que je suis impatient de mettre en pratique.</p>
                        <p className="p-text">Mon programme de formation à la Wild Code School est prévu du 13 novembre 2023 au 7 novembre 2024.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AppWrap(Header, 'acceuil');