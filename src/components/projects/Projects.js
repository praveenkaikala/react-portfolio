import React, { useState } from 'react';
import './projects.css';
import chat from '../../asserts/chat.png';
import netflix from '../../asserts/netflix.jpg';
import spotify from '../../asserts/spotify.jpeg';
import yoga from '../../asserts/yoga.jpeg';
import tictactoe from '../../asserts/tictactoe.jpg';
import { motion } from 'framer-motion';

// Sample project data
const initialProjects = [
  {
    name: 'Chatting Application',
    liveLink: 'https://capable-creponne-5f89a0.netlify.app/',
    image: chat,
    gitLink:"https://github.com/praveenkaikala/chat-application-using-MERN-STACK"
  },
  {
    name: 'Netflix Clone',
    liveLink: 'https://stately-crepe-272455.netlify.app',
    image: netflix,
    gitLink:"https://github.com/praveenkaikala/netflix_clone"
  },
  {
    name: 'Yoga Application',
    liveLink: 'https://aiyogatutor.netlify.app/',
    image: yoga,
    gitLink:"https://github.com/praveenkaikala/netflix_clone"
  },
  {
    name: 'TICTACTOE',
    liveLink: 'https://elaborate-cheesecake-9f9e50.netlify.app/',
    image: tictactoe,
    gitLink:"https://github.com/praveenkaikala/tic-tac-toa"
  },
  // Add more projects as needed
];

const Projects = () => {
  const [projects] = useState(initialProjects);

  return (
    <section className="project" id="project">
      <h3>My Projects</h3>
      <div className="container">
        {projects.map((project, index) => (
          <div className='projectbox'
          >
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
              <p>{project.name}</p>
            </a>
            <div className='btns'>
              <a href={project.gitLink}>

              <button className='btn'>Source Code</button>
              </a>
              <a href={project.liveLink}>

              <button className='btn'>Live preview</button>
              </a>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
