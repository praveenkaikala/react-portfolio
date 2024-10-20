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
            <p className='aboutme'>

            Hi, I’m <strong>Praveen Kumar Kaikala</strong>, currently pursuing my <strong>B.Tech in Computer Science Engineering</strong> and working as a <strong>Frontend Developer Intern at Gymforce</strong>. I specialize in crafting engaging web applications using modern technologies like <strong>React</strong>, <strong>Next.js</strong>, and <strong>Node.js</strong>. 
                <br/><br/>
                I’m passionate about building user-friendly, responsive interfaces and scalable backends, always aiming for clean, efficient code. Outside of coding, I enjoy staying active with yoga and exploring new technologies that inspire creativity.</p>        </motion.div>
    </section>
  )
}

export default About