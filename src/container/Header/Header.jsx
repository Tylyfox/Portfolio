import React from 'react';
import { AppWrap } from '../../wrapper';
import { motion } from "framer-motion";
import './Header.scss';
import { images } from "../../constants";
import { SiGraphql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { FaHandPeace } from "react-icons/fa"; // Nouvelle icône

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
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className="app__header-img"
              >
                  <motion.div
                    className="app__header-img-container"
                    whileHover={{ scale: 1.0 }}
                    whileTap={{ scale: 0.95 }}
                  >
                      <img src={images.profile} alt="profile_bg" />
                  </motion.div>
                  <motion.div
                    className="badge-cmp app__flex"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                      <FaHandPeace size={30} color="#95C082"/>
                      <div style={{ marginLeft: 20 }}>
                          <p className="p-text">Salut, je suis</p>
                          <h1 className="head-text">Valentin</h1>
                      </div>
                  </motion.div>
              </motion.div>
              <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
              >
                  {[SiGraphql, FaNodeJs, SiPostgresql].map((Icon, index) => (
                    <motion.div
                      className="circle-cmp app__flex"
                      key={`circle-${index}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                        <Icon size={60} />
                    </motion.div>
                  ))}
              </motion.div>
          </div>
          <motion.div
            whileInView={{ x: [-120, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="app__header-info"
          >
              <div className="app__header-badge">
                  <div className="tag-cmp app__flex">
                      <h1 className="head-text">Développeur Full Stack</h1>
                      <p className="p-text">Passionné par les technologies et les défis techniques, je suis constamment à la recherche de solutions optimisées et innovantes. Mon alternance m'a permis de renforcer mes compétences, autant en back-end qu'en front-end. Polyvalent et adaptable, j'aime collaborer au sein d'équipes pour transformer des idées en solutions concrètes.</p>
                  </div>
              </div>
          </motion.div>
      </div>
    );
}

export default AppWrap(Header, 'acceuil');