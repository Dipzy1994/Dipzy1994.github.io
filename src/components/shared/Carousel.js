import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../../styles/Carousel.module.css';

// Import the images
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

const CarouselComponent = () => {
  const images = [
    { src: image1, alt: 'Sports event', legend: 'Exciting Sports Event' },
    { src: image2, alt: 'Team celebration', legend: 'Team Celebration' },
    { src: image3, alt: 'Stadium view', legend: 'Amazing Stadium View' },
  ];

  return (
    <div className={styles.carouselWrapper}>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.carouselSlide}>
            <img 
              src={image.src} 
              alt={image.alt} 
              className={styles.carouselImage}
            />
            <p className="legend">{image.legend}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

