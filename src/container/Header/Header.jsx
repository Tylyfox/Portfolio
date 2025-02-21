import React from 'react';
import { AppWrap } from '../../wrapper';
import { motion } from "framer-motion";
import './Header.scss';
import { images } from "../../constants";
import { SiGraphql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { FaHandPeace } from "react-icons/fa";

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
                      <p className="p-text">
                      👨‍💻 <strong>Développeur web Full Stack</strong>, motivé par l'idée de créer des solutions qui font avancer les choses et qui ont un véritable impact.
                      </p>
                      <br/>
                      <p className='p-text'>
                      Ce qui me distingue, ce n'est pas seulement <strong>ma curiosité insatiable</strong>, mais aussi <strong>ma capacité à m'intégrer dans une équipe🤝, à écouter et à comprendre les besions 🛠️ pour concevoir des solutions utiles et significatives</strong>💡.
                      </p>
                      <br />
                      <p>
                      Avant de me lancer dans le développement, j'ai occupé des rôles où j'ai appris à proposer des <strong>solutions concrètes et efficaces</strong>, à prendre des <strong>responsabilités</strong> au sein d’équipes et à m’assurer que chaque projet apportait une réelle <strong>valeur ajoutée</strong> 📈, tant pour l'entreprise que pour les clients.
                      </p>
                  </div>
              </div>
          </motion.div>
      </div>
    );
}

export default AppWrap(Header, 'acceuil');