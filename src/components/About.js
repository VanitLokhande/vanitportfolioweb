import React from 'react'
import './About.css'
import frontend from "../images/frontend.png"


const About = (props) => {
  return (
    <div ref={props.about} className='about'>
     <div className='lefta'>
        <div className='about-img-container'>
            <img  src={frontend} alt='img'/>

        </div>

     </div>
     <div className='righta'>

       <div className='aboutmecontainer'>
          <h1>About Me</h1>
          <h3>frontend Devloper</h3>
          <div className='information'>Hii , I am Vanit Lokhande. A passionate frontend developer with a strong foundation in HTML, CSS, and JavaScript. I specialize in building interactive and user-friendly web applications using modern technologies like React, Redux, and TypeScript. Highly dedicated and hardworking. Most of the time I am busy working on my HTML, CSS, JS, React and Redux skills.I transform ideas into seamless web experiences and prioritize clean, responsive design.</div>
          <div className='skills'>
            <div className='divskills'>Skills:</div>
            <div><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
            <div><span>React JS</span><span>Redux</span><span>TypeScript</span></div>
            <div><span>Bootstrap</span><span>Responsiveness</span><span>Java Coding</span></div>
          </div>
     </div>
       </div>
    </div>
  )
}

export default About
