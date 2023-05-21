import { Request, Response } from 'express';
import axios from 'axios';
import NodeCache from 'node-cache';
import { getCoordinates } from '../utils/geocoding';
import { convertToUnixTimestamp } from '../utils/dateUtils';
import { HistoricalWeatherRequest } from '../interfaces/requestBody';
import { HistoricalWeatherResponse, HistoricalData } from '../interfaces/responseBody';
import authenticate from '../middleware/authentication';

// Create a new cache instance with a TTL of 10 minutes
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

export const getHistoricalWeather = async (req: Request, res: Response) => {
  try {
    const { city, date } = req.body as HistoricalWeatherRequest;

    // Generate a unique cache key based on the city and date
    const cacheKey = `${city}-${date}`;

    // Check if the data is already cached
    const cachedData = cache.get<HistoricalWeatherResponse>(cacheKey);
    if (cachedData) {
      return res.status(200).json(cachedData);
    }

    const { latitude, longitude } = await getCoordinates(city);

    const unixTimestamp = convertToUnixTimestamp(new Date(date));

    const url = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${unixTimestamp}&appid=${process.env.API_KEY}`;
    const response = await axios.get(url);

    const historicalData: HistoricalData[] = response.data.hourly.map((data: any) => ({
      date: new Date(data.dt * 1000).toISOString(),
      temperature: data.temp,
      description: data.weather[0].description,
      windSpeed: data.wind_speed,
      precipitation: data.precipitation ? data.precipitation.value : 0,
      pressure: data.pressure,
      humidity: data.humidity,
    }));

    const responseBody: HistoricalWeatherResponse = {
      cityName: city,
      historicalData,
    };

    // Cache the data for future use
    cache.set(cacheKey, responseBody);

    res.status(200).json(responseBody);
  } catch (error) {
    console.error('Error fetching historical weather data:', error);
    res.status(500).send('Error fetching historical weather data');
  }
};

export default getHistoricalWeather;
