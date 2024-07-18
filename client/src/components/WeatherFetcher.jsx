import React, { useState, useEffect } from 'react';

// WeatherFetcher component to fetch and display weather data
function WeatherFetcher() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York');

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  // Function to fetch weather data from the API
  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <h2>Weather in {city}</h2>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default WeatherFetcher;
