import backend from '../../assets/about/backend.jpg';
import frontend from '../../assets/about/frontend.jpg';
import bdd from '../../assets/about/bdd.jpg';
import agile from '../../assets/about/agile.jpg';
import devops from '../../assets/about/devops.jpg';


const abouts = [
    {
        title: "Développement Front-end",
        description: "Expérience dans la création d'interfaces utilisateur interactives, en utilisant des technologies telles que HTML, CSS, JavaScript, React, Vue.js ou Angular.",
        img: frontend,
    },
    {
        title: "Développement Back-end",
        description: "Compétences en développement de serveurs, gestion de bases de données et création d'API RESTful, GraphQL. Utilisation de langages tels que Node.js.",
        img: backend
    },
    {
        title: "Gestion de Base de Données",
        description: "Gestion des bases de données relationnelles, conception de schémas, optimisation des requêtes et gestion des données. Expérience avec PostgreSQL et MySQL.",
        img: bdd
    },
    {
        title: "Méthodologie Agile SCRUM",
        description: "Expérience dans l'application de la méthodologie Agile SCRUM pour la gestion de projets. Mon rôle dans des équipes de développement a inclus la participation active à des sprints, des réunions de planification, des démo-reviews régulières.",
        img: agile
    },
    {
        title: "Devops, Cloud",
        description: "Expérience dans la mise en place de pipelines CI/CD, déploiement continu avec Github Actions, automatisation des tests, gestion de conteneurs Docker. Cloud avec Azure, AWS.",
        img: devops
    }
]

export default abouts;