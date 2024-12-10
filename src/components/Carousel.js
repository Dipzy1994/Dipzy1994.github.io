import React, { useState, useEffect } from 'react';  
  
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

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.alt}
            className={`carousel-item ${index === slideIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <button className="carousel-control prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

  
export default Carousel;

