import React from 'react';
import './home.css';
import { easeInOut, motion } from 'framer-motion';
import profile from '../../asserts/profile.png';

const Home = () => {
  return (
    <section className='homesection' id='home'>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: easeInOut }}
        className='home'
      >
        <div className='textpart'>
          <h3>Hello,</h3>
          <p>
            I am <span className='name'>Praveen</span>
          </p>
          <span className='role'>Full Stack Developer</span>
        </div>
        <motion.div
          className='imagepart'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeInOut }}
        >
          <img src={profile} alt='profile' />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
