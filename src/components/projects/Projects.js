import React, { useState } from 'react'
import './projects.css'
import chat from "../../asserts/chat.png"

const Projects = () => {
  const [projects,setprojects]=useState([
    {
      name:"chatting application",
      link:"https://capable-creponne-5f89a0.netlify.app/",
      image:chat
    },
  ])
  return (
    <section className='project' id='project'>
      <h3>my projects</h3>
      <div className='container'>
          {projects.map((project,index)=>{
            return(
              <div key={index} style={{display:"flex",justifyContent:"center",cursor:"pointer"}}>
                 <div className='projectbox'>
                <a style={{textDecoration:"none"}} href={project.link}>
                <img src={project.image} />
              <p style={{color:"white"}}>{project.name}</p>

                </a>
              

              </div>
                </div>
             
            )
          })}
         </div>
    </section>
  )
}

export default Projects