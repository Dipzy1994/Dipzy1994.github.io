import React, { useState, useEffect } from 'react';  
  
function WeatherDashboard() {  
  const [weatherData, setWeatherData] = useState({});  
  
  useEffect(() => {  
   const apikey = 'YOUR_API_KEY';  
   const city = 'Sydney';  
   const country = 'AU';  
   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apikey}`;  
  
   fetch(url)  
    .then((response) => response.json())  
    .then((data) => setWeatherData(data));  
  }, []);  
  
  return (  
   <div>  
    <h2>Weather Dashboard</h2>  
    <p>City: {weatherData.name}</p>  
    <p>Temperature: {weatherData.main.temp}°C</p>  
    <p>Humidity: {weatherData.main.humidity}%</p>  
    <p>Wind Speed: {weatherData.wind.speed} m/s</p>  
   </div>  
  );  
}  
  
export default WeatherDashboard;
