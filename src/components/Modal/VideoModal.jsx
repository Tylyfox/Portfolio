import React from "react";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import ReactPlayer from "react-player";

import "./VideoModal.scss";

const VideoModal = ({ isOpen, onClose, videoUrl, videoTitle }) => {
    if (!isOpen) return null;
    const videoStyle = {
        maxWidth: '100%',
        height: 'auto',
        maxHeight: '100%',
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <motion.div
            className="video-modal__overlay"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="video-modal__content"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                onClick={stopPropagation}
            >
                <div className="close-button">
                    <h2 className="head-text">{videoTitle}</h2>
                    <HiX onClick={onClose} />
                </div>
                <div className="video-container" onClick={stopPropagation}>
                    {videoUrl && (
                        <ReactPlayer width="640px" height="360px" style={videoStyle} url={videoUrl} controls={true}/>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default VideoModal;
