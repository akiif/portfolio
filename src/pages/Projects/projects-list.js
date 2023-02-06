// Carousel Images Import
import TaskMaster from "../../assets/images/projects/task-master/task-master";
import Edunix from "../../assets/images/projects/edunix/edunix";
import AtmSystem from "../../assets/images/projects/atm-system/atm-system";
import ProgrammingWikiMain from "../../assets/images/projects/programming-wiki/programming-wiki";
import WeatherApp from "../../assets/images/projects/weather-app/weather-app";
import GuessColor from "../../assets/images/projects/guess-color/guess-color";
import Portfolio from "../../assets/images/projects/portfolio/portfolio";

// Tech Stack Images Import
import ReactJs from "../../assets/images/skills/react.svg";
import NodeJs from "../../assets/images/skills/nodejs.svg"
import Javascript from "../../assets/images/skills/javascript.svg";
import MongoDB from "../../assets/images/skills/mongodb.svg";
import Flask from "../../assets/images/skills/flask.svg";
import Python from "../../assets/images/skills/python.svg";
import MySql from "../../assets/images/skills/mysql.svg";
import Html from "../../assets/images/skills/html.svg";
import Css from "../../assets/images/skills/css3.svg";
import Redux from "../../assets/images/skills/redux.svg";
import Express from "../../assets/images/skills/express.svg";
import Passport from "../../assets/images/skills/passport.svg";

export default [
  {
    id: 1,
    title: 'Task-Master',
    slides: TaskMaster,
    techStack: [MongoDB, Express, ReactJs, NodeJs, Redux, Passport],
    desc: "A MERN stack to-do list app with separate list for each user and OAuth as well as local login feature. The users can create, edit and delete tasks. Used Redux to store the login session info on the frontend. Used passport.js to authenticate users on the backend.",
    link: "https://task-masterr.github.io/",
    github: "https://github.com/akiif/task-master"
  },
  {
    id: 2,
    title: 'Edunix',
    slides: Edunix,
    techStack: [Python, MySql, Flask],
    desc: "A Course Management Website where students can enroll in the courses and the teachers can keep track of the courses enrolled by the students and award them course credits.",
    github: "https://github.com/akiif/Edunix"
  },
  {
    id: 3,
    title: 'ATM-System',
    slides: AtmSystem,
    techStack: [NodeJs, MySql, Express, Passport],
    desc: "An ATM System Management app built using Node.js and MySQL. The user can create a new bank account and login using local authentication. It features CRUD operations as well as use of SQL Triggers. The user can view all their transactions in the Transactions Page.",
    github: "https://github.com/akiif/atm-system"
  },
  {
    id: 4,
    title: 'Programming Wiki API',
    slides: ProgrammingWikiMain,
    techStack: [NodeJs, MongoDB],
    desc: "A REST API that serves programming articles and offers a variety of filtering methods (random article, searching by title and tags).",
    link: "https://programmingwiki.onrender.com/",
    github: "https://github.com/akiif/ProgrammingWiki-API",
    npm: "https://www.npmjs.com/package/programmingwiki"
  },
  {
    id: 5,
    title: 'Weather App',
    slides: WeatherApp,
    techStack: [Javascript, Html, Css],
    desc: "A simple weather app which is used to fetch the weather by entering the city name or zip code.",
    link: "https://akiif.github.io/weather-app/",
    github: "https://github.com/akiif/weather-app"
  },
  {
    id: 6,
    title: 'Color Guess Game',
    slides: GuessColor,
    techStack: [ReactJs, Redux],
    desc: "A simple color guessing game built using React and Redux toolkit.",
    link: "https://akiif.github.io/guess-color/",
    github: "https://github.com/akiif/guess-color"
  },
  {
    id: 7,
    title: 'Portfolio',
    slides: Portfolio,
    techStack: [ReactJs, Javascript, Css],
    desc: "A portfolio website built using React. Used the react-router for routing and the useState hooks for storing the states.",
    link: "https://akiif.dev/",
    github: "https://github.com/akiif/portfolio"
  },
];