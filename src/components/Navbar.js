import React, { useState } from 'react'
import "./Navbar.css";
import { useRef } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = (props) => {
   

  

  return (
    <div className='navbar'>
       <span className='va'>Vanit Portfolio</span>

       <FaBars  id='toggle' className='fabar'/>
       <div>

        <ul className="ull" id='ul' >
        
          <li onClick={()=>props.scrollhandler(props.home)}>Home</li>
          <li onClick={()=>props.scrollhandler(props.about)}>About</li>
          <li onClick={()=>props.scrollhandler(props.projects)}>Projects</li>
          <li onClick={()=>props.scrollhandler(props.contact)}>Contact</li>
        
        </ul>
      
       </div>
     
    </div>
  )
}

export default Navbar
