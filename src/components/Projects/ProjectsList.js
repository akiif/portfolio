// Carousel Images Import
import TaskMaster from './ProjectImages/TaskMaster';
import ChatApp from './ProjectImages/ChatApp';
import Edunix from './ProjectImages/Edunix';
import AtmSystem from './ProjectImages/AtmSystem';
import ProgrammingWiki from './ProjectImages/ProgrammingWiki';
import WeatherApp from './ProjectImages/WeatherApp';
import GuessColor from './ProjectImages/GuessColor';
import Portfolio from './ProjectImages/Portfolio';

// Tech Stack Images Import
import {
  NextJs,
  ReactJs,
  NodeJs,
  Javascript,
  MongoDB,
  Flask,
  Python,
  MySql,
  Html,
  Css,
  Redux,
  Express,
  Passport,
  SocketIO,
} from './TechStackImages';

const ProjectsList = [
  {
    title: 'Task-Master',
    slides: TaskMaster,
    techStack: [MongoDB, Express, ReactJs, NodeJs, Redux, Passport],
    desc: 'A MERN stack to-do list app with separate list for each user and OAuth as well as local login feature. The users can create, edit and delete tasks. Used Redux to store the login session info on the frontend. Used passport.js to authenticate users on the backend.',
    link: 'https://task-masterr.github.io/',
    github: 'https://github.com/akiif/task-master',
  },
  {
    title: 'chat-app',
    slides: ChatApp,
    techStack: [NodeJs, ReactJs, Express, Redux, SocketIO],
    desc: 'A chat app built using Node.js (backend), React (frontend) and Socket.IO for data sharing. It makes use of the concept of web sockets to enable real time communications. The users can send plain text messages as well as location links.',
    link: 'https://akiif.github.io/chat-app',
    github: 'https://github.com/akiif/chat-app',
  },
  {
    title: 'Edunix',
    slides: Edunix,
    techStack: [Python, MySql, Flask],
    desc: 'A Course Management Website where students can enroll in the courses and the teachers can keep track of the courses enrolled by the students and award them course credits.',
    github: 'https://github.com/akiif/Edunix',
  },
  {
    title: 'ATM-System',
    slides: AtmSystem,
    techStack: [NodeJs, MySql, Express, Passport],
    desc: 'An ATM System Management app built using Node.js and MySQL. The user can create a new bank account and login using local authentication. It features CRUD operations as well as use of SQL Triggers. The user can view all their transactions in the Transactions Page.',
    github: 'https://github.com/akiif/atm-system',
  },
  {
    title: 'Programming Wiki API',
    slides: ProgrammingWiki,
    techStack: [NodeJs, MongoDB],
    desc: 'A REST API that serves programming articles and offers a variety of filtering methods (random article, searching by title and tags).',
    link: 'https://programmingwiki.onrender.com/',
    github: 'https://github.com/akiif/ProgrammingWiki-API',
    npm: 'https://www.npmjs.com/package/programmingwiki',
  },
  {
    title: 'Weather App',
    slides: WeatherApp,
    techStack: [ReactJs, Javascript, Html, Css],
    desc: 'A weather app built using React which is used to fetch the weather data from the Open Weather api using the axios library.',
    link: 'https://akiif.github.io/weather-app/',
    github: 'https://github.com/akiif/weather-app',
  },
  {
    title: 'Color Guess Game',
    slides: GuessColor,
    techStack: [ReactJs, Redux],
    desc: 'A simple color guessing game built using React and Redux toolkit.',
    link: 'https://akiif.github.io/guess-color/',
    github: 'https://github.com/akiif/guess-color',
  },
  {
    title: 'Portfolio',
    slides: Portfolio,
    techStack: [NextJs, ReactJs, Javascript],
    desc: 'A portfolio website built using Next.js. Used the app router for routing and Mui components for the ui',
    link: 'https://akiif.dev/',
    github: 'https://github.com/akiif/portfolio',
  },
];

export default ProjectsList;
