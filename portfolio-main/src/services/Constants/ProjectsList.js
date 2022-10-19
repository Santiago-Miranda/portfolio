import s from './img/recetas.png'
import a from './img/juego.png'
import n from './img/youtube-clone.png'
import t from './img/soon.png'
const ProjectsList = [
  {
    name: "Recipes",
    description: "In this project I have used the spoonacular api. All components were designed using only CSS. It is a recipe app, which includes search functions, filtering, sorting and a form for the creation of our own recipes.",
    technologies: ["React", "Redux", "Javascript", "NodeJS", "Express", "PostgreSQL", "Sequelize"],
    screenshoots: [s],
    repository: "https://github.com/Santiago-Miranda",
    siteURL: "https://recetas-sand.vercel.app/"
  },
  {
    name: "Videogames-app",
    description: "This was my solo project for Henry Bootcamp. All components were designed using only CSS. It is a video game app, which includes search functions, filtering, sorting and a form for the creation of our video games.",
    technologies: ["React", "Redux", "CSS", "NodeJS", "Javascript", "Express", "PostgreSQL", "Sequelize"],
    screenshoots: [a],
    repository: "https://github.com/Santiago-Miranda/pi-juegos/tree/main/pi-juegos-master",
    siteURL: "https://henrygames-zeta.vercel.app/"
  },
  {
    name: "Youtube-clone",
    description: "I have done this project as a practice. This is a YouTube clone for which you use its API. It includes search functions so you can watch and be entertained by the videos you like.",
    technologies: ["React", "Redux Toolkit", "Typescript", "Tailwind"],
    screenshoots: [n],
    repository: "https://github.com/Santiago-Miranda/youtube-clone",
    siteURL: "https://youtube-clone-lovat-six.vercel.app/"
  },
  {
    name: "Coming soon",
    description: "Coming soon.",
    technologies: ["not found"],
    screenshoots: [t],
    repository: "https://github.com",
    siteURL: "https://"
  }
];

export default ProjectsList;
