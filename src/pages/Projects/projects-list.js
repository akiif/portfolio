// Carousel Images Import
import Edunix from "../../assets/images/projects/edunix/edunix";
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

export default [
  {
    id: 1,
    title: 'Edunix',
    slides: Edunix,
    techStack: [Python, MySql, Flask],
    desc: "A Course Management Website where students can enroll in the courses and the teachers can keep track of the courses enrolled by the students and award them course credits.",
    github: "https://github.com/akiif/Edunix"
  },
  {
    id: 2,
    title: 'Programming Wiki API',
    slides: ProgrammingWikiMain,
    techStack: [NodeJs, MongoDB],
    desc: "A REST API that serves programming articles and offers a variety of filtering methods (random article, searching by title and tags).",
    link: "https://programmingwiki.up.railway.app/",
    github: "https://github.com/akiif/ProgrammingWiki-API",
    npm: "https://www.npmjs.com/package/programmingwiki"
  },
  {
    id: 3,
    title: 'Weather App',
    slides: WeatherApp,
    techStack: [Javascript, Html, Css],
    desc: "A simple weather app which is used to fetch the weather by entering the city name or zip code.",
    link: "https://akif.tech/weather-app/",
    github: "https://github.com/akiif/weather-app"
  },
  {
    id: 4,
    title: 'Color Guess Game',
    slides: GuessColor,
    techStack: [ReactJs, Redux],
    desc: "A simple color guessing game built using React and Redux toolkit.",
    link: "https://akif.tech/guess-color/",
    github: "https://github.com/akiif/guess-color"
  },
  {
    id: 5,
    title: 'Portfolio',
    slides: Portfolio,
    techStack: [ReactJs, Javascript, Css],
    desc: "A portfolio website built using React. Used the react-router for routing and the useState hooks for storing the states.",
    link: "https://akiif.dev/",
    github: "https://github.com/akiif/portfolio"
  },
];