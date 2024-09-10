const express = require('express');
const bodyParser = require('body-parser');
const setupSwaggerDocs = require('./config/swagger'); // Configuração do Swagger

const app = express();

// Middlewares
app.use(bodyParser.json());

// Importar rotas
const cursosRoutes = require('./routes/cursos');
const professoresRoutes = require('./routes/professores');

// Usar rotas
app.use('/cursos', cursosRoutes);
app.use('/professores', professoresRoutes);

// Configuração do Swagger
setupSwaggerDocs(app);

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
