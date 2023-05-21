import { RequestHandler } from 'express';
import { CurrentWeatherRequest } from '../interfaces/requestBody';
import { CurrentWeatherResponse, errorResponseBody } from '../interfaces/responseBody';
import axios from 'axios';
import { API_BASE_URL } from '../utils/config';
import { getCache, setCache } from '../utils/cache';

const getCurrentWeather: RequestHandler<{}, CurrentWeatherResponse | errorResponseBody, CurrentWeatherRequest> = async (req, res) => {
  try {
    const city = req.body.city;

    // Check if weather data is available in cache
    const cacheKey = `current_weather_${city}`;
    const cachedData = getCache(cacheKey);
    if (cachedData) {
      console.log('Fetching current weather data from cache...');
      res.status(200).json(cachedData);
      return;
    }

    const response = await axios.get(`${API_BASE_URL}/weather?q=${city}&appid=${process.env.API_KEY}`);

    const responseBody: CurrentWeatherResponse = {
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
      cityName: response.data.name,
      countryCode: response.data.sys.country
    };

    // Store weather data in cache
    setCache(cacheKey, responseBody);

    res.status(200).json(responseBody);
  } catch (error) {
    console.error('Error fetching current weather data:', error);
    const errorResponse: errorResponseBody = {
      error: 'Error fetching current weather data'
    };
    res.status(500).json(errorResponse);
  }
};

export default getCurrentWeather;
