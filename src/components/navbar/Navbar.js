import React, { useState } from 'react'
import { Link } from 'react-scroll'
import "./navbar.css"
import {FiMenu} from "react-icons/fi"
import { HiMiniXMark} from "react-icons/hi2"

const Navbar = () => {
  const [menu,setmenu]=useState(false)
  return (
   <nav>
    <div className='heading'>
        <h2>Portfolio</h2>
    </div>
    <div className='options'>
        <Link to='home' spy={true} smooth={true} offset={-100} className='opt'>Home</Link>
        <Link to='about' spy={true} smooth={true} offset={-70}  className='opt'>About</Link>
        <Link to='skills' spy={true} smooth={true} offset={-100}className='opt'>Skills</Link>
        <Link to='project' spy={true} smooth={true} offset={150} className='opt'>Projects</Link>
        <Link to='contact' spy={true} smooth={true} className='opt'>contact</Link>
    </div>
    {<FiMenu onClick={()=>setmenu(!menu)} className='mobilemenu' style={{cursor:"pointer"}}/>}
    <div className='mobileoptions' style={{display : menu? 'flex':'none'}}>
        <Link to='home' spy={true} smooth={true} offset={-100} duration={500} className='mobileopt' onClick={()=>setmenu(false)}>Home</Link>
        <Link to='about' spy={true} smooth={true} offset={-40} duration={500} className='mobileopt' onClick={()=>setmenu(false)}>About</Link>
        <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} className='mobileopt' onClick={()=>setmenu(false)}>Skills</Link>
        <Link to='project' spy={true} smooth={true} offset={40} duration={500} className='mobileopt' onClick={()=>setmenu(false)}>Projects</Link>
        <Link to='contact' spy={true} smooth={true} offset={100} duration={500} className='mobileopt' onClick={()=>setmenu(false)}>Contact</Link>
    </div>
    
   </nav>
  )
}

export default Navbar