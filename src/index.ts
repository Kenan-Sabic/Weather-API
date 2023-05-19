import express, { Request, Response } from 'express';
import loggerMiddleware from './middleware/loggerMiddleware';
import weatherRouter from './routes/routes';
import 'dotenv/config';
import getCurrentWeather from './controllers/CurrentWeatherController';
import forecastController from './controllers/ForecastController';
import getHistoricalWeather from './controllers/HistoricalWeatherController';

const app = express();

app.use(loggerMiddleware);
app.use(express.json());
app.use('/weather', weatherRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

app.post('/weather/current', getCurrentWeather);
app.post('/weather/forecast', forecastController);
app.post('/weather/historical', getHistoricalWeather);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
