const express = require('express');
const bodyParser = require('body-parser');
const cursosRoutes = require('./src/routes/cursos.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rotas de cursos
app.use('/cursos', cursosRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
