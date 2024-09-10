const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Escola API',
      version: '1.0.0',
      description: 'API para gerenciar cursos e professores',
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL do servidor
      },
    ],
  },
  apis: ['./routes/*.js'], // Caminho para os arquivos de rotas
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

const setupSwaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = setupSwaggerDocs;
