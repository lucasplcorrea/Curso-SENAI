require('dotenv').config(); // Carrega variáveis de ambiente

const sequelize = require('./config/database');

sequelize.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida.'))
  .catch(err => console.log('Erro ao conectar com o banco de dados:', err));

const express = require('express');
const bodyParser = require('body-parser');
const { verificaToken } = require('./middlewares/authMiddleware'); // Importando o middleware de autenticação

const app = express();

// Middlewares
app.use(bodyParser.json());

// Swagger configuration (apenas chamando o setup do Swagger)
const setupSwaggerDocs = require('./config/swagger');
setupSwaggerDocs(app); // Configura o Swagger via função separada

// Rotas
const cursosRoutes = require('./routes/cursos');
const professoresRoutes = require('./routes/professores');
const usuariosRoutes = require('./routes/usuarios');

// Aplicando rotas (Rotas de usuários devem ficar públicas para login e cadastro)
app.use('/cursos', verificaToken, cursosRoutes); // Protege rotas de cursos
app.use('/professores', verificaToken, professoresRoutes); // Protege rotas de professores
app.use('/usuarios', usuariosRoutes); // Rota de usuários, sem proteção para login/cadastro

// Porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
