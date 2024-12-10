import React, { useState, useEffect } from 'react';

function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://api.example.com/weather');
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!weatherData) return <div>Loading weather data...</div>;

  return (
    <div className="weather-dashboard">
      <h3>Weather Dashboard</h3>
      {/* Display weather data here */}
    </div>
  );
}


export default WeatherDashboard;