import React, { useState, useEffect } from 'react';
import '../styles/WeatherDashboard.css';  // Keep this line as is

function WeatherDashboard() {  
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {  
    const apikey = process.env.REACT_APP_WEATHER_API_KEY;
    const city = 'Sydney';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`;

    fetch(url)  
      .then((response) => {
        if (!response.ok) {
          throw new Error('Weather data fetch failed');
        }
        return response.json();
      })  
      .then((data) => setWeatherData(data))
      .catch((err) => {
        console.error("Error fetching weather data:", err);
        setError(err.message);
      });
  }, []);  

  if (error) {
    return <div className="weather-dashboard error">Error: {error}</div>;
  }

  if (!weatherData) {
    return <div className="weather-dashboard loading">Loading...</div>;
  }

  const { location, current } = weatherData;

  return (  
    <div className="weather-dashboard">
      <h2>Weather Dashboard</h2>
      <div className="weather-info">
        <p><strong>City:</strong> {location.name}</p>
        <p><strong>Temperature:</strong> {current.temp_c}°C</p>
        <p><strong>Condition:</strong> {current.condition.text}</p>
        <p><strong>Humidity:</strong> {current.humidity}%</p>
        <p><strong>Wind Speed:</strong> {current.wind_kph} km/h</p>
      </div>
    </div>
  );  
}

export default WeatherDashboard;

