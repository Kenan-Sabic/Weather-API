import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_PASSWORD;

const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  const { authorization } = req.headers;

  if (!authorization || authorization !== apiKey) {
    res.status(401).json({ error: 'Unauthorized' });
  } else {
    next();
  }
};

export default authenticate;
