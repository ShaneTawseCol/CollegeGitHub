import React, { useState, useEffect } from 'react';

function WeatherFetcher(){
    const [weatherData, setWeatherData] = 
    useState(null);
    const [city, setCity] = useState('New York');

    useEffect(() => {
        fetchWeatherData(city);
    }, [city]);

    const fetWeatherData = async (city) =>
    {
        try{
            const response = await fetch(
                'https://api.openweather.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY'
            );
const data = await response.json();
setWeatherData(data);
        }catch(errror){
            console.error('Error fetching weather data:', error);

        }
            };
        }