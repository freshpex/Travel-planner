import { useState, useEffect, useContext } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import CountryContext from '../Context/CountryContext';
import { useNavigate } from 'react-router-dom';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weatherError, setWeatherError] = useState(null);
  const { country } = useContext(CountryContext);
  const navigate = useNavigate();
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const api_key = "3142b0f410ebe4532dddff736e20208f";

  document.title = `Travel Planner - ${country}`;

  useEffect(() => {
    if (!country) {
      navigate('/dashboard');
    }
  }, [country, navigate]);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      setWeatherLoading(true);
      setWeatherError(null);

      try {
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${api_key}&units=metric`
        );

        if (weatherResponse.status === 401) {
          throw new Error("Unable to get current weather Forecast, Try a different Country.");
        }

        if (weatherResponse.ok) {
          const weatherData = await weatherResponse.json();

          setWeather(weatherData);
          setMinTemp(weatherData.main.temp_min);
          setMaxTemp(weatherData.main.temp_max);
          setHumidity(weatherData.main.humidity);
          setVisibility(weatherData.visibility);
          setWindSpeed(weatherData.wind.speed);
        } else {
          console.log(`Weather API error: ${weatherResponse.status}`);
        }
      } catch (error) {
        setWeatherError(error.message);
        console.error(error);
      } finally {
        setWeatherLoading(false);
      }
    };

    fetchWeather();
  }, [country]);

  return (
    <div className="weather-container">
      <div className="weather">
        <h2 className="topic">Weather Forecast</h2>
        {weatherLoading && <p>Loading weather Forecast in {country}...</p>}
        {weatherError && (
          <p className="error-message">There was an error getting the weather conditions: {weatherError}</p>
        )}
        {weather && (
          <div className="chart">
            <LineChart width={600} height={300} data={[weather]}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
            </LineChart>
            <p className="current">
              Current temperature is {weather.main.temp}°C, with{" "}
              {weather.weather[0].description}.
            </p>
            <p className="min">Min Temperature: {minTemp}°C</p>
            <p className="max">Max Temperature: {maxTemp}°C</p>
            <p className="humidity">Humidity: {humidity}%</p>
            <p className="visibility">Visibility: {visibility} meters</p>
            <p className="wind">Wind Speed: {windSpeed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );  
};

export default Weather;
