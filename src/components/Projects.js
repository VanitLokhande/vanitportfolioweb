import React from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "./Projects.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import todolistclone from "../images/todolistClone.png"
import youtubeclone from "../images/youtubeclone.png"
import musicplayersite from "../images/musicplayersite.png"
import reduxtoolkit_ecommerce from "../images/reduxtoolkit_ecommerce.png"
import pagination from "../images/pagination.png"
import tabswitch from "../images/tabswitch.png"
import sidebar from "../images/sidebar.png"
import photography from "../images/photographysite.png"
import quiz from "../images/quizapp.png"
import reactpractceproject from "../images/reactpracticeproject.png"
import{FaRegWindowMaximize,FaGithub}from 'react-icons/fa'






const Projects = (props) => {
 // let box = document.querySelector('.projectcontainer');

//   const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

  // const prescrool=()=>{
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft - width;
  //   console.log(width)

  // }

  // const nextscrool=()=>{
  //   let width = box.clientWidth;
  //   box.scrollLeft = box.scrollLeft + width;
  //   console.log(width)
  // }
  return (
   
    <div ref={props.projects} className='projects'> 
        {/* <button className='prebtn' onClick={prescrool}><p style={{height:'50px', width:'50px'}}>&lt;</p></button>
        <button className='nextbtn' onClick={nextscrool}><p>&gt;</p></button> */}
        
        <div className='projecttitle'>
               Projects
                
            </div>
          <div className='projectcontainer'>
           
          <Swiper
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }} 
            spaceBetween={20}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              430: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              
              991: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            
            modules={[Navigation, Pagination, Scrollbar, A11y]}>
                   
             
             <SwiperSlide>
              <div className='projectcart' style={{transition:"0.6s"}}>
              
                <div className='imgcontainer'>
                <a href='https://vanitlokhande.github.io/TodolistClone/'><img src={todolistclone}/></a>
                </div>
                <div className='content'>
                
                
                  <h2>TO-DO List Clone</h2>
                  <p>User can add tasks according to date.</p>
                  <a href='https://github.com/VanitLokhande/TodolistClone'><FaGithub className='FaGithub'/></a>
                  <a href='https://vanitlokhande.github.io/TodolistClone/'><FaRegWindowMaximize className='FaRegWindowMaximize'/></a>
                </div>
              </div>
              </SwiperSlide>
              
              <SwiperSlide>
              <div className='projectcart'>
              
                <div className='imgcontainer'>
                <a href='https://cheery-tiramisu-06dd95.netlify.app/'><img src={youtubeclone}/></a>
                </div>
                <div className='content'>
               
                 
                  <h2>You TubeClone</h2>
                  <p>This app using API to display videos.Navigation bar Mobile & Desktop different Designs.</p>
                  <a href='https://github.com/VanitLokhande/clone_youtube'><FaGithub className='FaGithub'/></a>
                  <a href='https://cheery-tiramisu-06dd95.netlify.app/'><FaRegWindowMaximize className='FaRegWindowMaximize'/></a>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className='projectcart'>
              
                <div className='imgcontainer'>
                <a href='https://vanitlokhande.github.io/ReduxToolkit/'><img src={reduxtoolkit_ecommerce}/></a>
                </div>
                <div className='content'>
                
                  <h2>Ecomerce Web</h2>
                  <p>In This App we can add and remove items.</p>
                  <a href='https://github.com/VanitLokhande/ReduxToolkit'><FaGithub className='FaGithub'/></a>
                  <a href='https://vanitlokhande.github.io/ReduxToolkit/'><FaRegWindowMaximize className='FaRegWindowMaximize'/></a>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className='projectcart'>
              
                <div className='imgcontainer'>
                <a href='https://vanitlokhande.github.io/First_react_project/'><img src={reactpractceproject}/></a>
                </div>
                <div className='content'>
                
                  <h2>React Practice Project</h2>
                  <p></p>
                  <a href='https://github.com/VanitLokhande/First_react_project'><FaGithub className='FaGithub'/></a>
                  <a href='https://vanitlokhande.github.io/First_react_project/'><FaRegWindowMaximize className='FaRegWindowMaximize'/></a>
                </div>
              </div>
              </SwiperSlide>
              
              <SwiperSlide>
              <div className='projectcart'>
              
                <div className='imgcontainer'>
                <a href='https://otc7hc.csb.app/'><img src={musicplayersite}/></a>
                </div>
                <div className='content'>
                
                  <h2>MusicPlayerSite</h2>
                  <p>This is the basic musicplayersite you can play the music on click on img and stop the music on doubleclick on img.</p>
                  <a href='https://github.com/VanitLokhande/JS-Mini-Project---1---JavaScript-Mini-Project---rkbeuh59jncr'><FaGithub className='FaGithub'/></a>
                  <a href='https://otc7hc.csb.app/'><FaRegWindowMaximize className='FaRegWindowMaximize'/></a>
                </div>
              </div>
              </SwiperSlide>
              
              
              
              <SwiperSlide>
              <div className='projectcart'>
              
                <div className='imgcontainer'>
                <a href='https://vanitlokhande.github.io/Pagination/'><img src={pagination}/></a>
                </div>
                <div className='content'>
                
                  <h2>Pagination</h2>
                  <p>I made this project to handle the pagination.</p>
                  <a href='https://github.com/VanitLokhande/Pagination'><FaGithub className='FaGithub'/></a>
                  <a href='https://vanitlokhande.github.io/Pagination/'><FaRegWindowMaximize className='FaRegWindowMaximize'/></a>
                </div>
              </div>
              </SwiperSlide>
              
              <SwiperSlide>
              <div className='projectcart'>
              
                <div className='imgcontainer'>
                <a href='https://vanitlokhande.github.io/Tabswitch/'><img src={tabswitch}/></a>
                </div>
                <div className='content'>
                
                  <h2>Tabswitch</h2>
                  <p>The main purpose of this project How Tabswitch work.I wrote the logic in this project.</p>
                  <a href='https://github.com/VanitLokhande/Tabswitch'><FaGithub className='FaGithub'/></a>
                  <a href='https://vanitlokhande.github.io/Tabswitch/'><FaRegWindowMaximize className='FaRegWindowMaximize'/></a>
                </div>
              </div>
              </SwiperSlide>
              
              <SwiperSlide>
              <div className='projectcart'>
              
                <div className='imgcontainer'>
                  <img src={sidebar}/>
                </div>
                <div className='content'>
                
                  <h2>Sidebar</h2>
                  <p>I wrote the logic in this project how we can handle side bar.</p>
                  <a href='https://github.com/VanitLokhande/clone_youtube'><FaGithub className='FaGithub'/></a>
                  <a href='https://cheery-tiramisu-06dd95.netlify.app/'><FaRegWindowMaximize className='FaRegWindowMaximize'/></a>
                </div>
              </div>
              </SwiperSlide>
             
              <SwiperSlide>
              <div className='projectcart'>
              
                <div className='imgcontainer'>
                <a href='https://qd9loe.csb.app/'><img src={photography}/></a>
                </div>
                <div className='content'>
                
                  <h2>Vandu Photography</h2>
                  <p>This is Basic photography site using HTML and CSS.</p>
                  <a href='https://github.com/VanitLokhande/HTML---CSS-Mini-Project---HTML---CSS-Mini-Project---1w6a5av4nehm'><FaGithub className='FaGithub'/></a>
                  <a href='https://qd9loe.csb.app/'><FaRegWindowMaximize className='FaRegWindowMaximize'/></a>
                </div>
              </div>
              </SwiperSlide>
             
              
              <SwiperSlide>
              <div className='projectcart'>
              
                <div className='imgcontainer'>
                <a href='https://vanitlokhande.github.io/Quizapp/'><img src={quiz}/></a>
                </div>
                <div className='content'>
            
                  <h2>Quiz App</h2>
                  <p>We can give quiz in this App</p>
                  <a href='https://github.com/VanitLokhande/Quizapp'><FaGithub className='FaGithub'/></a>
                  <a href='https://vanitlokhande.github.io/Quizapp/'><FaRegWindowMaximize className='FaRegWindowMaximize'/></a>
                </div>
              </div>
              </SwiperSlide>
              
              
              
              </Swiper>
              
         
          


          </div>
         

         
      
    </div>
  
  )
}

export default Projects
