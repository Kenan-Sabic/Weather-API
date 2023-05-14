// middleware/loggerMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  const { method, url } = req;
  logger.info(`[${method}] ${url}`);
  next();
}

export default loggerMiddleware;
