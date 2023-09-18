import React from 'react'
import './Contact.css'
import{FaFacebook,FaLinkedin,FaGithub,FaInstagram}from 'react-icons/fa'

const Contact = (props) => {
  return (
    <div ref={props.contact} className='contact'>
      <div className='contactcontainer'>
        <div className='left'>
            <div>
              <h1>Contact Me</h1>
              <h3>Get in Touch</h3>
              <div>Email: vanitlokhande10@gmail.com</div>
              <div>Phone: 86xxxxxx17</div>
              




            </div>



        </div>
        <div className='right'>
        
           <form action="https://formspree.io/f/xeqbzzqr" method='POST' className='formcontainer'>
            
            <input type='text' name='Username:' placeholder='Name' required/>
            <input type='email' name='Email:' autoComplete='off' placeholder='Email' required/>
            <input autoComplete='off' name='Mobile No:'  placeholder='Mobaile No' required/>
            <textarea autoComplete='off' name='Message:' placeholder='Text' rows={5} required/>
            <button className='sendbtn' >Send</button>
           </form>





        </div>

      </div>
      <div className='socialmlinks'>
        <div className='iconcotainer'>
          <a href='https://www.facebook.com/'>
            <FaFacebook />
          </a>
       
          <a href='https://www.linkedin.com/in/vanit-lokhande-45931a212'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/VanitLokhande'>
           <FaGithub/>
          </a>
          <a href='https://instagram.com/vanit_lokhande?utm_source=qr&igshid=MThlNWY1MzQwNA=='>
            <FaInstagram />
          </a>
          
        </div>

      </div>
      
    </div>
  )
}

export default Contact

