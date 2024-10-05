import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Swagger Express API',
            version: '1.0.0',
            description: 'A simple Express API with Swagger documentation',
        },
    },
    apis: ['.src/routes/*.ts'], // Path to your API routes
};

export const specs = swaggerJsdoc(options);

module.exports = {
    specs,
    swaggerUi,
};

export { swaggerUi };
