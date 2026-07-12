import React from 'react'
import "./Project.css"
import { color, motion } from "framer-motion";

const Project = () => {
  return (<>
    <motion.div className='project-container'id='project'
    
    
    initial={{
    y: 100,
    opacity: 0,
    scale:0.9,
  }}
  whileInView={{
    y: 0,
    opacity: 1,
    scale:1,
  }}
  transition={{
    duration: 2,
    ease: "easeOut",
     type: "spring", 
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}
     
    
    
    
    
    
    
    
    
    >
  

          <h1 className='h1'> My Projects</h1>

      <img src='jerseycaaaaa.jpg'alt='Browsing issue' className='jerseyca'></img>

        <h1 className='features'>Features</h1>
           
           
      <ul className='bulletine' style={{
        color:"white",
      }}>
        <li>(implement props for passing data)</li>
        <li>implement react router for client side rendering</li>
        <li>use state managment with usestate and also use usefect</li>
        <li>created reusable components</li>
        
       <li>Responsive React.js UI</li>
        <li>Search jerseys by team name</li>
        <li>Filter by National & Club category</li>
        <li>Select jersey size (S, M, L, XL)</li>
        <li>Add to Cart functionality</li>
        <li>Increase & decrease quantity</li>
        <li>Remove items from cart</li>
        <li>Total price calculation</li>
      </ul>
               <h1 className='f'style={{
        color:"white",
      }}>Future Improvements</h1>
      <ul className='future'style={{
        color:"white",
      }}>
        <li>replace props drilling with context api for scalability</li>
        <li> make the entire application fully responsiv</li>
        <li>intregrate backend</li>
        <li>improve the code structure for better user experience</li>
      </ul>
      <div className='flex'>
      <a href=""
         target="_blank"   
         className='demo' 
         >  
         
         Live</a>

      <a href="https://github.com/upadhyayakundan326-png/jerseyca"
         target="_blank"   
         className='Github' 
         >  
         
         Github</a>
         
</div>
         
            
         

      
    </motion.div>

    </>
  )}

export default Project
