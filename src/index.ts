import express, { Request, Response } from 'express';
import { createLogger, transports, format } from "winston";
import weatherRouter from './routes/routes';


const app = express();

const logger = createLogger({
    transports: [new transports.Console() , new transports.File({ dirname: 'logs' , filename:'weather.log' })],
    format: format.combine( 
      format.timestamp(),
      format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level}: ${message}`;
      })
    ),
  });

app.get('/' , (req: Request, res: Response) =>{
    res.send('hello world'); 
});

app.use('/weather' , weatherRouter );
app.listen(5000);
