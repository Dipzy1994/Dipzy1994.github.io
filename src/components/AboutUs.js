import React from 'react';  
import Carousel from './Carousel';  
  
function AboutUs() {  
  return (  
   <section id="about-us">  
    <h2>About Us</h2>  
    <p>Macarthur Ballers is a community basketball club dedicated to promoting the sport and fostering talent.</p>  
    <Carousel />  
    {/* Video Player */}  
    <div className="video-container">  
      <video width="600" controls>  
       <source src="Video/Video1.mp4" type="video/mp4" />  
       Your browser does not support the video tag.  
      </video>  
    </div>  
   </section>  
  );  
}  
  
export default AboutUs;
