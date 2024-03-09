import React from 'react'
import "./about.css"
import { easeInOut, motion } from 'framer-motion'

const About = () => {
  return (
    <section id='about'>
        <motion.div initial={{scale: 0.8}} animate={{scale:1}} transition={{duration:1,ease:easeInOut}}
         className='content' >
            <span>
               <h3>about me</h3>
            </span>
            <p>

👋 Hi, I'm praveen, a second-year B.Tech student and an enthusiastic Full Stack Developer. I thrive on crafting engaging web applications with a blend of front-end finesse and back-end robustness. I'm all about innovation, teamwork, and a commitment to lifelong learning. My passion extends beyond code, embracing a balanced life of diverse interests. Let's connect and collaborate to bring ideas to life in the digital realm!</p>
        </motion.div>
    </section>
  )
}

export default About