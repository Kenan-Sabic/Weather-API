import express, { Router, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import currentWeatherController from '../controllers/CurrentWeatherController';
import historicalWeatherController from '../controllers/HistoricalWeatherController';
import forecastController from '../controllers/ForecastController';
import authenticate from '../middleware/authentication';

const weatherRouter = express.Router();

// Swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Weather API',
      version: '1.0.0',
      description: 'API documentation for Weather endpoints',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./src/routes/routes.ts'], // Update with the path to this file
};

const specs = swaggerJsDoc(swaggerOptions);

// Swagger route
weatherRouter.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Route handlers

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Endpoints for weather information
 */

/**
 * @swagger
 * /weather/current:
 *   post:
 *     summary: Get current weather for a specific city.
 *     tags:
 *       - Weather
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CurrentWeatherRequest'
 *     responses:
 *       200:
 *         description: OK. Returns the current weather data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CurrentWeatherResponse'
 *       500:
 *         description: Internal Server Error. Failed to fetch current weather data.
 *
 * @swagger
 * components:
 *   schemas:
 *     CurrentWeatherRequest:
 *       type: object
 *       properties:
 *         city:
 *           type: string
 *           description: The name of the city to get the current weather for.
 *       required:
 *         - city
 *
 *     CurrentWeatherResponse:
 *       type: object
 *       properties:
 *         temperature:
 *           type: number
 *           description: The temperature in the specified city.
 *         description:
 *           type: string
 *           description: The weather description.
 *         windSpeed:
 *           type: number
 *           description: The wind speed in the specified city.
 *         cityName:
 *           type: string
 *           description: The name of the city.
 *         countryCode:
 *           type: string
 *           description: The country code of the city.
 */

weatherRouter.post('/current',authenticate, currentWeatherController);


/**
 * @swagger
 * /weather/historical:
 *   post:
 *     summary: Get historical weather
 *     tags: [Weather]
 *     requestBody:
 *       description: Request body for historical weather
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HistoricalWeatherRequest'
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HistoricalWeatherResponse'
 * @swagger
 *   components:
 *     schemas:
 *       HistoricalWeatherRequest:
 *         type: object
 *         properties:
 *           city:
 *             type: string
 *             description: The name of the city for historical weather data.
 *           date:
 *             type: string
 *             format: date
 *             description: The date for which to retrieve historical weather data. Format YYYY-MM-DD.
 *         required:
 *           - city
 *           - date
 *
 *       HistoricalWeatherResponse:
 *         type: object
 *         properties:
 *           cityName:
 *             type: string
 *             description: The name of the city.
 *           historicalData:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/HistoricalData'
 *
 *       HistoricalData:
 *         type: object
 *         properties:
 *           date:
 *             type: string
 *             format: date-time
 *             description: The date and time of the historical weather data.
 *           temperature:
 *             type: number
 *             description: The temperature in the specified city at the given date and time.
 *           description:
 *             type: string
 *             description: The weather description at the given date and time.
 *           windSpeed:
 *             type: number
 *             description: The wind speed in the specified city at the given date and time.
 *           precipitation:
 *             type: number
 *             description: The precipitation amount in the specified city at the given date and time.
 *           pressure:
 *             type: number
 *             description: The atmospheric pressure in the specified city at the given date and time.
 *           humidity:
 *             type: number
 *             description: The humidity level in the specified city at the given date and time.
 */
weatherRouter.post('/historical',authenticate, historicalWeatherController);

/**
 * @swagger
 * /weather/forecast:
 *   post:
 *     summary: Get weather forecast
 *     tags: [Weather]
 *     requestBody:
 *       description: Request body for weather forecast
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ForecastRequest'
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ForecastResponse'
 *             
 * components:
 *   schemas:
 *     ForecastRequest:
 *       type: object
 *       properties:
 *         city:
 *           type: string
 *           description: The name of the city to get the weather forecast for.
 *         days:
 *           type: number
 *           description: The number of days to retrieve the forecast for.
 *       required:
 *         - city
 *         - days
 *
 *     ForecastResponse:
 *       type: object
 *       properties:
 *         forecast:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *                 description: The date of the forecast.
 *               temperature:
 *                 type: number
 *                 description: The temperature for the forecasted day.
 *               description:
 *                 type: string
 *                 description: The weather description for the forecasted day.
 *               windSpeed:
 *                 type: number
 *                 description: The wind speed for the forecasted day.
 */

weatherRouter.post('/forecast',authenticate, forecastController);

export default weatherRouter;
