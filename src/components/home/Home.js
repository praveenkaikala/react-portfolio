import React from 'react'
import "./home.css"
import { easeInOut, motion } from 'framer-motion'
import profile from '../../asserts/profile.png'
const Home = () => {
  return (
    <section className='homesection' id='home' >
        <motion.div initial={{scale: 0.8}} animate={{scale:1}} transition={{duration:1,ease:easeInOut}}
        className='home'>
            <div className='textpart'>
          
              <h3>hello</h3>
              <p>i am <span className='name'>praveen </span></p>
              <span>full stack developer</span>
              
            </div>
            <div className='imagepart'>
                <img src={profile} alt='profile'/>
            </div>
        </motion.div>
    </section>
  )
}

export default Home