import React from 'react';

import { AppWrap } from '../../wrapper';
import { motion } from "framer-motion";
import './Header.scss';
import { images } from "../../constants";

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
                        <p className="p-text">Développeur Full Stack animé par l'innovation et les défis techniques.</p>
                        <p className="p-text">J'utilise Next.js, React, VueJS, Node.js, Express et GraphQL, en renforçant mes projets avec TypeScript et PostgreSQL.</p>
                        <p className="p-text"> Grâce à Docker et AWS, mes applications sont prêtes pour le cloud.</p>
                        <p className="p-text">Toujours curieux, j'aile transformer des idées en solutions performantes et m'adapter pour faire la différence au sein des équipes.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AppWrap(Header, 'acceuil');