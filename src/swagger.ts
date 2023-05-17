import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const router = Router();

// Swagger options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Weather API',
      version: '1.0.0',
      description: 'API documentation for Weather endpoints',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/routes'], // Update with the path to your routes file
};

const specs = swaggerJsDoc(options);

// Swagger route
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default router;
