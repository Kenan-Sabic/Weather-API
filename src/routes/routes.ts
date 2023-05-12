import express from "express";
import currentWeatherController from "../controllers/currentWeatherController";
import historicalWeatherController from "../controllers/HistoricalWeatherController";
import forecastController from "../controllers/ForecastController";
const router = express.Router();


router.post('/current' , currentWeatherController );

router.post('/historical', historicalWeatherController);

router.post('/forecast' , forecastController);





module.exports =  router;