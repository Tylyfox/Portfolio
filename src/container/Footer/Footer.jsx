import React from 'react';

import { images, cvs } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {

    return (
        <>
            <h2 className="head-text">Prenons un <span>café</span> & faisons  <span>connaissances</span></h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={images.email} alt="email" />
                    <a href="mailto:cadart.val@gmail.com" className="p-text">cadart.val@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="phone" />
                    <a href="tel:06 85 14 45 92" className="p-text">06 85 14 45 92</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.cv} alt="phone" />
                    <a href={cvs.CV} className="p-text" download="CV_Valentin_Cadart.pdf" rel="noreferrer">Télécharger mon CV</a>
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__primarybg',
);