import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../../styles/Carousel.module.css';

const CarouselComponent = () => {
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
        <div>
          <img src="/images/image1.jpg" alt="Sports event" />
          <p className="legend">Exciting Sports Event</p>
        </div>
        <div>
          <img src="/images/image2.jpg" alt="Team celebration" />
          <p className="legend">Team Celebration</p>
        </div>
        <div>
          <img src="/images/image3.jpg" alt="Stadium view" />
          <p className="legend">Amazing Stadium View</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
