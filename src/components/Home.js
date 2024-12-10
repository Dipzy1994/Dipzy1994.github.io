import React from 'react';
import Carousel from './shared/Carousel';
import WeatherDashboard from './WeatherDashboard';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to MacArthur Ballers</h1>
      <Carousel />
      <WeatherDashboard />
    </div>
  );
}

export default Home;