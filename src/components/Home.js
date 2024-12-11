import React from 'react';
import Carousel from './shared/Carousel';
import WeatherDashboard from './WeatherDashboard';

function Home() {
  return (
    <div className="home">
      <h1>futuresports is a community basketball club dedicated to promoting the sport and fostering talent.</h1>
      <Carousel />
      <WeatherDashboard />
    </div>
  );
}

export default Home;