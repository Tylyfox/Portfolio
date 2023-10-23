import React, {useEffect, useState} from 'react';
import { AiFillEye, AiFillGithub, AiFillPlayCircle } from "react-icons/ai";

import { motion } from 'framer-motion';
import { works } from "../../constants";
import { AppWrap, MotionWrap } from '../../wrapper';

import './Work.scss';
import VideoModal from "../../components/Modal/VideoModal";

const Work = () => {
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [openModalIndex, setOpenModalIndex] = useState(null);

    const onOpenModal = (index) => setOpenModalIndex(index);
    const onCloseModal = () => setOpenModalIndex(null);

    useEffect(() => {
        setFilterWork(works);
    }, []);
    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === 'All') {
                setFilterWork(works);
            } else {
                const filterWorkTest = works.filter((work) => work.tags.includes(item));
                setFilterWork(filterWorkTest);
            }
        }, 500);
    };

    return (
        <>
            <h2 className="head-text">Ma Section <span>Projets</span></h2>
            <div className="app__work-filter">
                {['UI/UX', 'Web App', 'React JS', 'Angular', 'Java', 'Symfony', 'PHP', 'HTML/CSS/Javascript', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filterWork.map((work, index) => (
                    <div className="app__work-item app__flex" key={index}>
                        <div className="app__work-img app__flex">
                            <img src={work.imgUrl} alt={work.name} />
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                {work.projectLink === '' ? (
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                        onClick={() => onOpenModal(index)}
                                    >
                                        <AiFillPlayCircle />
                                    </motion.div>
                                ) : (
                                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.90] }}
                                            transition={{ duration: 0.25 }}
                                            className="app__flex"
                                        >
                                            <AiFillEye />
                                        </motion.div>
                                    </a>
                                )}
                                <a href={work.githubLink} target="_blank" rel="noreferrer">
                                    <motion.div
                                        whileInView={{ scale: [0, 1] }}
                                        whileHover={{ scale: [1, 0.90] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
                            <div className="app__work-tag app__flex">
                                <p className="p-text">{work.tags[0]}</p>
                            </div>
                        </div>
                        <VideoModal
                            isOpen={openModalIndex === index}
                            onClose={onCloseModal}
                            videoUrl={work.videoUrl}
                            videoTitle={work.title}
                        />
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Work, 'app__work'),
    'projets',
    'app__primarybg'
);
