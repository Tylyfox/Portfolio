import kit from '../../assets/videos/kit.mp4';

import KIT from '../../assets/works/KIT.jpg';
import GPT3 from '../../assets/works/gpt3.png';
import ADVICE from '../../assets/works/adviceGenerator.png';
import QR from '../../assets/works/QRCode.png';
import Rating from '../../assets/works/Rating.png';

const works = [
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
    },
]

export default works;