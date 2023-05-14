// utils/logger.ts
import winston from 'winston';

// Define log format
const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Create Winston logger instance
const logger = winston.createLogger({
  level: 'info', // Set the desired log level
  format: winston.format.combine(winston.format.timestamp(), logFormat),
  transports: [
    // Log to console
    new winston.transports.Console(),
    // Log to a file
    new winston.transports.File({ filename: 'logs.log' }),
  ],
});

export default logger;
