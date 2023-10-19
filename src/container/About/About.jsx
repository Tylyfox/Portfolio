import React from 'react';
import { motion } from "framer-motion";

import './About.scss';

import { AppWrap, MotionWrap } from "../../wrapper";
import { abouts } from '../../constants/index';

const About = () => {

    return (
        <>
            <h2 className="head-text">
                <span>La programmation</span> a rendu l’impossible possible. Vous pouvez avoir un <span>objet nul</span> et une <span>variable constante</span>.
            </h2>
            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1}}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index }
                    >
                        <img src={about.img} alt={about.title}/>
                        <h2 className="bold-text" style={{ marginTop: 20}}>{about.title}</h2>
                        <p className="p-text" style={{ marginTop: 10}}>{about.description}</p>

                    </motion.div>
                    ))}
            </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'à propos',
    'app__whitebg'
);

