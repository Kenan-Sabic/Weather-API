import express, { Request, Response } from 'express';

const app = express();

app.get('/hello' , (req: Request, res: Response) =>{
    res.send('hellow world'); 
})

app.get('/weather/current' , (req:Request,res:Response) =>{

    res.send('current weather');
})

app.get('/weather/forecast' , (req:Request,res:Response) =>{

    res.send('current weather');
})

app.get('/weather/history' , (req:Request,res:Response) =>{

    res.send('current weather');
})
app.listen(5000);
