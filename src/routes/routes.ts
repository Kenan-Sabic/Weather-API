import express from 'express';
import currentWeatherController from '../controllers/CurrentWeatherController';
import historicalWeatherController from '../controllers/HistoricalWeatherController';
import forecastController from '../controllers/ForecastController';

const weatherRouter = express.Router();

// Route handlers
/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Endpoints for weather information
 */

/**
 * @swagger
 * /current:
 *   post:
 *     summary: Get current weather
 *     tags: [Weather]
 *     requestBody:
 *       description: Request body for current weather
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CurrentWeatherRequest'
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CurrentWeatherResponse'
 */
weatherRouter.post('/current', currentWeatherController);

/**
 * @swagger
 * /historical:
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
 */
weatherRouter.post('/historical', historicalWeatherController);

/**
 * @swagger
 * /forecast:
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
 */
weatherRouter.post('/forecast', forecastController);

export default weatherRouter;
