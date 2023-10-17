import React from 'react'
import "./home.css"
import profile from '../../asserts/profile.png'
const Home = () => {
  return (
    <section className='homesection'>
        <div className='home'>
            <div className='textpart'>
          
              <h3>hello</h3>
              <p>i am <span className='name'>praveen </span></p>
              <span>full stack developer</span>
              
            </div>
            <div className='imagepart'>
                <img src={profile}/>
            </div>
        </div>
    </section>
  )
}

export default Home