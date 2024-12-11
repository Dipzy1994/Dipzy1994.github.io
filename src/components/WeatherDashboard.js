import React, { useState, useEffect } from 'react';
import '../styles/WeatherDashboard.css';

const WeatherDashboard = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        // Fetch weather data here
        // For this example, we'll use dummy data
        const dummyData = {
            temperature: 22,
            humidity: 60,
            windSpeed: 10,
            description: 'Partly cloudy'
        };
        setWeatherData(dummyData);
    }, []);

    if (!weatherData) {
        return <div>Loading weather data...</div>;
    }

    return (
        <div className="weather-dashboard">
            <h2>Weather Dashboard</h2>
            <div className="weather-info">
                <div className="weather-item">
                    <h3>Temperature</h3>
                    <p>{weatherData.temperature}°C</p>
                </div>
                <div className="weather-item">
                    <h3>Humidity</h3>
                    <p>{weatherData.humidity}%</p>
                </div>
                <div className="weather-item">
                    <h3>Wind Speed</h3>
                    <p>{weatherData.windSpeed} km/h</p>
                </div>
                <div className="weather-item">
                    <h3>Description</h3>
                    <p>{weatherData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherDashboard;


