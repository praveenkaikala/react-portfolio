import React, { useState } from 'react';
import './projects.css';
import chat from '../../asserts/chat.png';
import netflix from '../../asserts/netflix.jpg';
import spotify from '../../asserts/spotify.jpeg';
import yoga from '../../asserts/yoga.jpeg';
import { motion } from 'framer-motion';

// Sample project data
const initialProjects = [
  {
    name: 'Chatting Application',
    link: 'https://capable-creponne-5f89a0.netlify.app/',
    image: chat,
  },
  {
    name: 'Netflix Clone',
    link: '#',
    image: netflix,
  },
  {
    name: 'Spotify Clone',
    link: '#',
    image: spotify,
  },
  {
    name: 'Yoga Application',
    link: 'https://aiyogatutor.netlify.app/',
    image: yoga,
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
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} />
              <p>{project.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
