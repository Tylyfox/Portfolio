import {
    SiPhp,
    SiNodedotjs,
    SiGraphql,
    SiTypescript,
    SiNextdotjs,
    SiVuedotjs,
    SiReact,
    SiAngular,
    SiSymfony,
    SiMysql,
    SiPostgresql,
    SiDocker,
    SiAzuredevops,
    SiGit,
    SiGithub,
    SiJira,
    SiFigma
} from "react-icons/si";
import {
    FaJava,
    FaAws,
    FaGrav
} from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";



const skills = [
    {
        category: 'Langages de programmation',
        items: [
            { name: 'Node.JS', icon: SiNodedotjs, bgColor: '#F7DF1E' },
            { name: 'TypeScript', icon: SiTypescript , bgColor: '#3178C6'},
            { name: 'PHP', icon: SiPhp , bgColor: '#777BB4'},
            { name: 'Java', icon: FaJava, bgColor: '#007396' }
        ],
    },
    {
        category: 'Frameworks et bibliothèques',
        items: [
            { name: 'Next.js', icon: SiNextdotjs, bgColor: '#000000' },
            { name: 'Vue.js', icon: SiVuedotjs, bgColor: '#4FC08D' },
            { name: 'React', icon: SiReact, bgColor: '#61DAFB' },
            { name: 'Angular', icon: SiAngular, bgColor: '#DD0031' },
            { name: 'Symfony', icon: SiSymfony, bgColor: '#000000' },
            { name: 'Spring Boot', icon: BiLogoSpringBoot, bgColor: '#6DB33F' },
        ],
    },
    {
        category: 'Base de données',
        items: [
            { name: 'PostgreSQL', icon: SiPostgresql, bgColor: '#336791' },
            { name: 'MySQL', icon: SiMysql, bgColor: '#4479A1' }
        ],
    },
    {
        category: 'Conteneurisation et gestion des environnements',
        items: [
            { name: 'Docker', icon: SiDocker, bgColor: '#2496ED' },
        ],
    },
    {
        category: 'Services Cloud',
        items: [
            { name: 'AWS', icon: FaAws, bgColor: '#FF9900' },
            { name: 'Azure', icon: SiAzuredevops, bgColor: '#0078D7' },
        ],
    },
    {
        category: 'API',
        items: [
            { name: 'GraphQL', icon: SiGraphql, bgColor: '#E10098' },
            { name: 'Gravitee', icon: FaGrav , bgColor: '' },
        ],
    },
    {
        category: 'Outils versionnement et CI/CD',
        items: [
            { name: 'Git', icon: SiGit, bgColor: '#F05032' },
            { name: 'Github', icon: SiGithub, bgColor: '#181717' },
            { name: 'AWS', icon:FaAws, bgColor: '#FF9900' },
        ],
    },
    {
        category: 'Outils de gestion de projet et de design',
        items: [
            { name: 'Jira', icon: SiJira, bgColor: '#0052CC' },
            { name: 'Figma', icon: SiFigma, bgColor: '#F24E1E' },
        ],
    },
];

export default skills;