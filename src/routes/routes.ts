import express from "express";
import currentWeatherController from "../controllers/CurrentWeatherController";
import historicalWeatherController from "../controllers/HistoricalWeatherController";
import forecastController from "../controllers/ForecastController";
const weatherRouter = express.Router();


weatherRouter.post('/current' , currentWeatherController );

weatherRouter.post('/historical', historicalWeatherController);

weatherRouter.post('/forecast' , forecastController);




export default weatherRouter;