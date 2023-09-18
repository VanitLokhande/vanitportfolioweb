
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useRef, useState } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useEffect} from "react";
import{FaArrowUp}from 'react-icons/fa'



function App() {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
 

  const scrollhandler =(elmRef)=>{
    console.log(elmRef.current)
    //window.scrollTo({top: elmRef.current.offsetTop, behavior:"smooth"})
    elmRef.current?.scrollIntoView({behavior : "smooth"})
  }

  const[totopbutton,settotopbutton]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll" , ()=>{
      if(window.scrollY > 100){
        settotopbutton(true);
        console.log("jjj",settotopbutton);
      } 
      else{
        settotopbutton(false);
      }
    })
  },[])

  const topbtnhandle=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

 
  return (
    <div className="App">

        <Navbar  home={home} about={about} projects={projects} contact={contact} scrollhandler={scrollhandler}/>
        <div className='sections'>
        <Home home={home} />
        <About about={about}/>
        <Projects projects={projects}/>
        <Contact home={home} contact={contact}/>
        
      
      </div>
      {totopbutton && (<div className='topbtn' onClick={()=>scrollhandler(home)} style={{position:"fixed",right:"30px",bottom:"40px",cursor:"pointer",}}><FaArrowUp/></div>)}
    </div>
  );
}

export default App;
