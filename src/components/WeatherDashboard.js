import React from 'react';
import styles from '../styles/WeatherDashboard.module.css';

const WeatherDashboard = () => {
  const weatherData = {
    temperature: 22,
    humidity: 60,
    windSpeed: 10,
    description: 'Partly cloudy'
  };

  return (
    <div className={styles.weatherDashboard}>
      <h2 className={styles.title}>Weather</h2>
      <div className={styles.weatherInfo}>
        <div className={styles.weatherItem}>
          <span className={styles.value}>{weatherData.temperature}°C</span>
          <span className={styles.label}>Temp</span>
        </div>
        <div className={styles.weatherItem}>
          <span className={styles.value}>{weatherData.humidity}%</span>
          <span className={styles.label}>Humidity</span>
        </div>
        <div className={styles.weatherItem}>
          <span className={styles.value}>{weatherData.windSpeed} km/h</span>
          <span className={styles.label}>Wind</span>
        </div>
      </div>
      <p className={styles.description}>{weatherData.description}</p>
    </div>
  );
};

export default WeatherDashboard;

