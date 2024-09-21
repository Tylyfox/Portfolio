import kit from '../../assets/videos/kit.mp4';
import propar from "../../assets/videos/propar.mp4";
import greenride from '../../assets/videos/greenride.mp4';

import KIT from '../../assets/works/KIT.jpg';
import GPT3 from '../../assets/works/gpt3.png';
import ADVICE from '../../assets/works/adviceGenerator.png';
import QR from '../../assets/works/QRCode.png';
import Rating from '../../assets/works/Rating.png';
import Portfolio from '../../assets/works/Portfolio.png';
import Propar from '../../assets/works/Propar.png';
import GreenRide from '../../assets/works/GreenRide.png';
import JCPlomberie from '../../assets/works/JCPlomberie.png';
import WildMail from '../../assets/works/WildMail.png';

const works = [
    {
      name: 'WildMail',
      title: 'WildMail',
      description: 'WildMail est un projet de conception et développement d\'application en cours de création permettant la création de templates personnalisées et l\'envoi d\'emails automatisés. Construit avec TypeGraphQL, TypeORM, Node.js et Next.js, ce projet met l\'accent sur l\'efficacité et la flexibilité des communications par email, offrant une gestion optimisée des modèles d\'email et des envois',
      imgUrl: WildMail,
      videoUrl: '',
      projectLink: 'https://staging.1123-jaune-5.wns.wilders.dev/',
      githubLink: 'https://github.com/WildCodeSchool/2311-wns-jaune-wild-mail',
      tags: ['React', 'Next.js', 'Web App', 'All', 'UI/UX', 'GraphQL', 'Node.js']
    },
    {
        name: 'jc-plomberie',
        title: 'jc-plomberie',
        description: "Ce projet consistait à créer un site web moderne, fonctionnel et adapté aux besoins d’un plombier professionnel. L’objectif était de fournir une plateforme intuitive qui permette aux clients de découvrir facilement les services de plomberie offerts, de prendre contact rapidement et de consulter des informations utiles.",
        imgUrl: JCPlomberie,
        videoUrl: '',
        projectLink: 'https://www.jc-plomberie.fr/',
        githubLink: 'https://github.com/Tylyfox/JC-PLOMBERIE',
        tags: ['React', 'Web App', 'All', 'UI/UX']
    },
    {
        name: 'K.I.T.',
        title: 'K.I.T.',
        description: "Site web Angular/Java/Spring Boot : boîte à outils Dev Web. Ressources en ligne personnalisables, dashboard avec email, liste de tâches",
        imgUrl: KIT,
        videoUrl: kit,
        projectLink: '',
        githubLink: 'https://github.com/Tylyfox/bugs-squad-project-KIT',
        tags: ['Angular', 'Java', 'Web app', 'All']
    },
    {
        name: 'Propar',
        title: 'Propar',
        description: "Application Web de gestion pour une société de nettoyage en Symfony : projet fil rouge de ma formation de développeur Web",
        imgUrl: Propar,
        videoUrl: propar,
        projectLink: '',
        githubLink: 'https://github.com/Tylyfox/propar',
        tags: ['Symfony', 'PHP', 'Web app', 'All']
    },
    {
        name: 'GreenRide',
        title: 'GreenRide',
        description: "Application web de covoiturage en React et Symfony, API REST : implémentation connexion, création trajets. Projet pris en cours dans une équipe de développeurs dans un incubateur",
        imgUrl: GreenRide,
        videoUrl: greenride,
        projectLink: '',
        githubLink: 'https://github.com/Tylyfox/bugs-squad-project-KIT',
        tags: ['React', 'Symfony', 'PHP', 'Web App', 'All']
    },
    {
        name: 'Portfolio',
        title: 'Portfolio',
        description: "Mon portfolio réalisé avec React JS",
        imgUrl: Portfolio,
        videoUrl: '',
        projectLink: 'https://www.monportfoliovalentin.fr',
        githubLink: 'https://github.com/Tylyfox/Portfolio',
        tags: ['React', 'All', 'UI/UX', 'Web App']
    },
    {
        name: 'GPT3-Angular',
        title: 'GPT3-Angular',
        description: "Projet réalisé lors de ma formation POEC sous Angular",
        imgUrl: GPT3,
        videoUrl: '',
        projectLink: 'https://tylyfox.github.io/GPT3-Angular-Front/',
        githubLink: 'https://github.com/Tylyfox/GPT3-Angular-Front',
        tags: ['Angular', 'Web App', 'All', 'UI/UX']
    },
    {
        name: 'Advice Generator',
        title: 'Advice Generator',
        description: "Petit défi réalisé sur FrontEndMentor.io : générateur de conseils aléatoires",
        imgUrl: ADVICE,
        videoUrl: '',
        projectLink: 'https://tylyfox.github.io/advice-generator-app-main/',
        githubLink: 'https://github.com/Tylyfox/advice-generator-app-main',
        tags: ['HTML/CSS/Javascript', 'All', 'UI/UX']
    },
    {
        name: 'QR Code Component',
        title: 'QR Code Component',
        description: "Petit défi réalisé sur FrontEndMentor.io : composant QR Code",
        imgUrl: QR,
        videoUrl: '',
        projectLink: 'https://tylyfox.github.io/-FrontEndMentorTylyfox_qr-code-component-main/',
        githubLink: 'https://github.com/Tylyfox/-FrontEndMentorTylyfox_qr-code-component-main',
        tags: ['HTML/CSS/Javascript', 'All', 'UI/UX']
    },
    {
        name: 'Interactive Rating Component',
        title: 'Interactive Rating Component',
        description: "Petit défi réalisé sur FrontEndMentor.io : composant de notation interactif",
        imgUrl: Rating,
        videoUrl: '',
        projectLink: 'https://tylyfox.github.io/FrontEndMentor_Interactive-rating-component/',
        githubLink: 'https://github.com/Tylyfox/FrontEndMentor_Interactive-rating-component',
        tags: ['HTML/CSS/Javascript', 'All', 'UI/UX']
    }
];

export default works;