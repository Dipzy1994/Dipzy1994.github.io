import React, { useState, useEffect } from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    { image: 'image1.jpg', alt: 'Image 1' },
    { image: 'image2.jpg', alt: 'Image 2' },
    { image: 'image3.jpg', alt: 'Image 3' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <ResponsiveCarousel
      selectedItem={slideIndex}
      onChange={setSlideIndex}
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={2000}
    >
      {slides.map((slide, index) => (
        <div key={index}>
          <img src={slide.image} alt={slide.alt} />
          <p className="legend">{slide.alt}</p>
        </div>
      ))}
    </ResponsiveCarousel>
  );
}

export default Carousel;

