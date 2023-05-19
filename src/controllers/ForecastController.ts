import { Request, Response } from 'express';
import axios from 'axios';
import { API_BASE_URL } from '../utils/config';
import { ForecastRequest } from '../interfaces/requestBody';
import { ForecastResponseBody, errorResponseBody } from '../interfaces/responseBody';
import { getCache, setCache } from '../utils/cache';

const forecastController = async (req: Request, res: Response) => {
  try {
    const { city, days } = req.body as ForecastRequest;

    // Check if forecast data is available in cache
    const cacheKey = `${city}_${days}`;
    const cachedData = getCache(cacheKey);
    if (cachedData) {
      console.log('Fetching forecast weather data from cache...');
      res.status(200).json(cachedData);
      return;
    }

    const response = await axios.get(`${API_BASE_URL}/forecast/daily?q=${city}&cnt=${days}&appid=${process.env.API_KEY}`);

    const forecastData = response.data.list;

    const responseBody: ForecastResponseBody = {
      forecast: forecastData.map((day: any) => ({
        date: new Date(day.dt * 1000).toISOString(),
        temperature: day.temp.day,
        description: day.weather[0].description,
        windSpeed: day.speed,
      })),
    };

    // Store forecast data in cache
    setCache(cacheKey, responseBody);

    res.status(200).json(responseBody);
  } catch (error) {
    console.error('Error fetching forecast weather data:', error);
    const errorResponseBody: errorResponseBody = {
      error: 'Error fetching forecast weather data',
    };
    res.status(500).json(errorResponseBody);
  }
};

export default forecastController;
