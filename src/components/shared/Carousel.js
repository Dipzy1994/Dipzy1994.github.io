import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WeatherDashboard from '../WeatherDashboard';

// Import the images from the assets folder
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

function CustomCarousel() {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        emulateTouch
        swipeable
      >
        <div>
          <img src={image1} alt="Image 1" />
          <p className="legend">Image 1</p>
        </div>
        <div>
          <img src={image2} alt="Image 2" />
          <p className="legend">Image 2</p>
        </div>
        <div>
          <img src={image3} alt="Image 3" />
          <p className="legend">Image 3</p>
        </div>
        <div className="weather-dashboard">
          <WeatherDashboard />
        </div>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;

