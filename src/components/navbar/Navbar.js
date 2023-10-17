import React from 'react'
import { Link } from 'react-scroll'
import "./navbar.css"

const Navbar = () => {
  return (
   <nav>
    <div className='heading'>
        <h2>Portfolio</h2>
    </div>
    <div className='options'>
        <Link className='opt'>home</Link>
        <Link className='opt'>about</Link>
        <Link className='opt'>skills</Link>
        <Link className='opt'>projects</Link>
        <Link className='opt'>contact</Link>
    </div>
    
   </nav>
  )
}

export default Navbar