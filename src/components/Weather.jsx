import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import WeatherDetails from './WeatherDetails';
import './weather.css';

const Weather = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');


  //upadated the time rendering the every sec
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  }, []);

  const tick = () => {
    setCurrentTime(new Date());
  };


  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    handleSearch('Hyderabad');
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
    setSearchQuery('');
  };


  // fetch the current Weather Using openweathermap Api as mentioned in the assignment
  const handleSearch = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f9ad0d563e1d98c23693e24c1ac143bf`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === '404') {
          setError('City not found');
          setWeatherData(null);
        } else {
          setWeatherData(data);
          setError('');
        }
      })
      .catch((error) => {
        console.log(error);
        setError('An error occurred');
        setWeatherData(null);
      });
  };

// displaying the data from an API
  return (
    <div>
      
      <div className="weather-container">
        <div className="weather-subcontainer">
          <SearchForm
            searchQuery={searchQuery}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />

           {error ? (
            <p className='errors-styles'>{error}</p>
          ) : (
            weatherData && (
              <WeatherDetails
                temperature={`${Math.round(weatherData.main.temp - 273.15)}°C`}
                weatherCondition={weatherData.weather[0].description}
                weatherIcon={weatherData.weather[0].icon}
                cityName={weatherData.name}
                countryName={weatherData.sys.country}
                humidity={weatherData.main.humidity}
                wind={weatherData.wind.speed}
                pressure={weatherData.main.pressure}
                visibility={weatherData.visibility}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;