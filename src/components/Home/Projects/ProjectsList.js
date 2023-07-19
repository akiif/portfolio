// import project images
import TaskMaster from '@/assets/images/projects/task_master/task_master.webp';
import Edunix from '@/assets/images/projects/edunix/edunix.webp';
import WeatherApp from '@/assets/images/projects/weather_app/weather_app.webp';

const ProjectsList = [
  {
    name: 'Task-Master',
    img: TaskMaster,
    desc: 'A MERN stack to-do list app with separate list for each user and OAuth as well as local login feature. The users can create, edit and delete tasks. Used Redux to store the login session info on the frontend. Used passport.js to authenticate users on the backend.',
    link: 'https://task-masterr.github.io/',
    github: 'https://github.com/akiif/task-master',
  },
  {
    name: 'Edunix',
    img: Edunix,
    desc: 'A Course Management Website where students can enroll in the courses and the teachers can keep track of the courses enrolled by the students and award them course credits.',
    github: 'https://github.com/akiif/Edunix',
  },
  {
    name: 'Weather App',
    img: WeatherApp,
    desc: 'A weather app built using React which is used to fetch the weather data the from Open Weather api using the axios library.',
    link: 'https://akiif.github.io/weather-app/',
    github: 'https://github.com/akiif/weather-app',
  },
];

export default ProjectsList;
