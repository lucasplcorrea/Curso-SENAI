const { Router } = require('express');
const CursoController = require('../controllers/CursoController');

const cursosRoutes = Router();

// Rota para cadastrar um curso
cursosRoutes.post('/', CursoController.create);

// Rota para listar todos os cursos
cursosRoutes.get('/', CursoController.listAll);

// Rota para pesquisar cursos por nome e/ou duração
cursosRoutes.get('/pesquisar', CursoController.search);

// Rota para listar um curso específico pelo id
cursosRoutes.get('/:id', CursoController.findById);

// Rota para atualizar um curso pelo id
cursosRoutes.put('/:id', CursoController.update);

// Rota para deletar um curso pelo id
cursosRoutes.delete('/:id', CursoController.delete);

module.exports = cursosRoutes;
