import React from 'react'
import './skills.css'
import {FaReact,FaAngular,FaNodeJs} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'

const Skills = () => {
  return (
    <section className='skills'>
      <div className='boxcontent'>
      <div className='heading'>
        <span><h3>skills</h3></span>
      </div>
      <div className='mainbox'>
      <div className='frontend'>
        <div className='box'>
          <FaReact/>
          <p>react js</p>
          </div>
          <div className='box'>
          <FaAngular/>
          <p>Angular js</p>
          </div>
          <div className='box'>
          <FaNodeJs/>
          <p>node js</p>
          </div>
          <div className='box'>
          <FaNodeJs/>
          <p>express js</p>
          </div>
          <div className='box'>
          <DiMongodb/>
          <p>mongoDb</p>
          </div>
          
         
        
      </div>
      
      </div>
      </div>
    </section>
  )
}

export default Skills