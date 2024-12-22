import chat from '../../../asserts/chat.png'
import sorting from '../../../asserts/sorting.png'
import netflix from '../../../asserts/netflix.jpg'
import weather from '../../../asserts/weather.jpeg'
import yoga from '../../../asserts/yoga.jpeg'
import tictactoe from '../../../asserts/tictactoe.jpg'
export const projectsData = [
  {
    title: 'Chatting Application',
    description: 'A full-featured chatting application platform built with React and Node.js',
    image: chat,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    github: "https://github.com/praveenkaikala/chat-application-using-MERN-STACK",
    live: 'https://capable-creponne-5f89a0.netlify.app/',
  },
  {
    title: 'Sorting Alogoritm Visualizer',
    description: 'It visually represents the sorting process step-by-step, allowing users to observe how data is organized in real-time',
    image: sorting,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/praveenkaikala/sorting-algorithm-visualizer',
    live: 'https://astounding-rabanadas-803c0a.netlify.app/',
  },
  {
    title: 'Netflix Clone',
    description: 'Netflix Clone using TMDB api',
    image: netflix,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js','TMDB api'],
    github: 'https://github.com/praveenkaikala/netflix_clone',
    live: 'https://stately-crepe-272455.netlify.app',
  },
  {
    title: 'Weather App',
    description: 'Representing weather reports in real time',
    image: weather,
    technologies: ['React Native','Weather api'],
    github: 'https://github.com/praveenkaikala/native-weather-app',
    live: null,
  },
  {
    title: 'Yoga RestFull Api',
    description: 'Authentication and Authurization the user and sending yoga updates to mail',
    image: yoga,
    technologies: ['Node.js','Express.js'],
    github: 'https://github.com/praveenkaikala/vedic-vision-backend',
    live: null,
  },
  {
    title: 'TICTACTOA',
    description: 'Game',
    image:tictactoe,
    technologies: ['ReactJs'],
    github: 'https://github.com/praveenkaikala/tic-tac-toa',
    live: 'https://elaborate-cheesecake-9f9e50.netlify.app/',
  }
  
 
];