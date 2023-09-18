import React from 'react'
import './Home.css'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import{FaFacebook,FaLinkedin,FaGithub,FaInstagram}from 'react-icons/fa'
import vanit from "../resume/Vanit.pdf";
 import vanitphoto from "../images/vanitphoto.png"

const Home = (props) => {
  const [text] = useTypewriter({
    words:['Front End Developer','React Js Developer'],
    loop:{},
    typeSpeed: 50,
    deleteSpeed: 150,
  })

  return (
    <div ref={props.home} className='Home'>
      <div className='firstpart'>
          <div className='firstcontainer'>
            <div className='hi'>Hi,It's Me</div>
            <div className='vanit'>Vanit
              
            </div>
            <div className='typewriter'>I am<span className='text'>{' '}{text}<Cursor/></span></div>
            <div className='brief'>I am a skilled and passinate web developer with experience in creating visually appending and user friendly websites.</div>
            <div className='resume'>
             <a href={vanit} download="vanit">Resume</a>
            </div>
            
            <div className='socialmediaicons'>
                <a href='https://www.facebook.com/'>
                  <div className='button'>
                    <div className='icon'>< FaFacebook className='i'/></div>
                    <span>Facebook</span>
                  </div>
                </a>
                
                <a href='https://www.linkedin.com/in/vanit-lokhande-45931a212'>
                <div className='button'>
                  <div className='icon'><FaLinkedin className='i'/></div>
                  <span>Linkedin</span>
                </div>
                </a>

                <a href='https://github.com/VanitLokhande'>
                <div className='button'>
                  <div className='icon'><FaGithub className='i'/></div>
                  <span>Github</span>
                </div>
                </a>
                
                
                {/* <a href='https://instagram.com/vanit_lokhande?utm_source=qr&igshid=MThlNWY1MzQwNA=='> */}
                <a href='https://instagram.com/vanit_lokhande?utm_source=qr&igshid=MThlNWY1MzQwNA=='>
                <div className='button'>
                  <div className='icon'><FaInstagram className='i'/></div>
                  <span>Instagram</span>
                </div>
                </a>
            
            </div>
            
          </div>


      </div>
      <div className='secondpart'>
          <div className='imgvcon'> 
          <img className='vanitphotoimg' src={vanitphoto}/>
      </div>
       
       </div>
     
    </div>
  )
}

export default Home
