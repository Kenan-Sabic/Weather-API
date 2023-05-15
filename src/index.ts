import express, { Request, Response } from 'express';
import loggerMiddleware from './middleware/loggerMiddleware';
import weatherRouter from './routes/routes';
import 'dotenv/config';
import getCurrentWeather from './controllers/CurrentWeatherController';

const app = express();

app.use(loggerMiddleware);
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

app.post('/weather/current', getCurrentWeather);

app.use('/weather', weatherRouter);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
