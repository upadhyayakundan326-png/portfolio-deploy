import React from 'react'
import "./Project.css"
import { color, motion } from "framer-motion";

const Project = () => {
  return (<>
    <motion.div className='project-container'
    
    
    initial={{
    y: 100,
    opacity: 0,
  }}
  whileInView={{
    y: 0,
    opacity: 1,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}
     
    
    
    
    
    
    
    
    
    >
  

          <h1 className='h1'> My Projects</h1>

      <img src='jerseycaaaaa.jpg'alt='Browsing issue' className='jerseyca'></img>

        <h1 className='features'>Features</h1>
      <ul className='bulletine'>
       <li>Responsive React.js UI</li>
        <li>Search jerseys by team name</li>
        <li>Filter by National & Club category</li>
        <li>Select jersey size (S, M, L, XL)</li>
        <li>Add to Cart functionality</li>
        <li>Increase & decrease quantity</li>
        <li>Remove items from cart</li>
        <li>Total price calculation</li>
      </ul>
      <div className='flex'>
      <a href="https://github.com/upadhyayakundan326-png/jerseyca"
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
