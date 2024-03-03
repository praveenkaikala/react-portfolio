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
        <Link activeClass='active' to='home' spy={true} smooth={true}  offset={-80} className='opt'>home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true}  offset={-40} className='opt'>about</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true}  className='opt'>skills</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={0}  className='opt'>projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true}  offset={45} className='opt'>contact</Link>
    </div>
    {<FiMenu onClick={()=>setmenu(!menu)} className='mobilemenu' style={{cursor:"pointer"}}/>}
    <div className='mobileoptions' style={{display : menu? 'flex':'none'}}>
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='mobileopt' onClick={()=>setmenu(false)}>home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-40} duration={500} className='mobileopt' onClick={()=>setmenu(false)}>about</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-30} duration={500} className='mobileopt' onClick={()=>setmenu(false)}>skills</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-30} duration={500} className='mobileopt' onClick={()=>setmenu(false)}>projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-30} duration={500} className='mobileopt' onClick={()=>setmenu(false)}>contact</Link>
    </div>
    
   </nav>
  )
}

export default Navbar