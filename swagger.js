// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const { userRouteSwagger } = require('./userSwagger'); // Import userSwagger

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Title',
      version: '1.0.0',
      description: 'Description of your API',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`, // Use environment variable
      },
    ],
  },
  apis: ['./router/*.js', './userSwagger.js'], // Path to your API routes and Swagger annotations
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
};
