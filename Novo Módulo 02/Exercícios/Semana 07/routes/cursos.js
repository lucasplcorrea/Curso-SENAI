const express = require('express');
const router = express.Router();
const { Curso } = require('../models');

/**
 * @swagger
 * components:
 *   schemas:
 *     Curso:
 *       type: object
 *       required:
 *         - nome
 *         - duracao
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do curso
 *         nome:
 *           type: string
 *           description: Nome do curso
 *         duracao:
 *           type: integer
 *           description: Duração do curso em horas
 */

/**
 * @swagger
 * /cursos:
 *   post:
 *     summary: Cria um novo curso
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Curso'
 *     responses:
 *       201:
 *         description: Curso criado com sucesso
 *       400:
 *         description: Nome e duração são obrigatórios
 *       500:
 *         description: Erro ao criar o curso
 */
router.post('/', async (req, res) => {
  const { nome, duracao } = req.body;

  // Validação simples
  if (!nome || !duracao) {
    return res.status(400).json({ error: 'Nome e duração são obrigatórios' });
  }

  try {
    const novoCurso = await Curso.create({ nome, duracao });
    return res.status(201).json(novoCurso);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar o curso' });
  }
});

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Lista todos os cursos
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de cursos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Curso'
 *       500:
 *         description: Erro ao buscar cursos
 */
router.get('/', async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    return res.json(cursos);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar cursos' });
  }
});

/**
 * @swagger
 * /cursos/pesquisa:
 *   get:
 *     summary: Pesquisa cursos por nome ou duração
 *     tags: [Cursos]
 *     parameters:
 *       - name: nome
 *         in: query
 *         schema:
 *           type: string
 *         description: Nome do curso
 *       - name: duracao
 *         in: query
 *         schema:
 *           type: integer
 *         description: Duração do curso
 *     responses:
 *       200:
 *         description: Cursos retornados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Curso'
 *       500:
 *         description: Erro ao buscar cursos
 */
router.get('/pesquisa', async (req, res) => {
  const { nome, duracao } = req.query;

  let where = {};
  if (nome) where.nome = nome;
  if (duracao) where.duracao = duracao;

  try {
    const cursos = await Curso.findAll({ where });
    return res.json(cursos);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar cursos' });
  }
});

/**
 * @swagger
 * /cursos/{id}:
 *   put:
 *     summary: Atualiza um curso existente
 *     tags: [Cursos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do curso
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Curso'
 *     responses:
 *       200:
 *         description: Curso atualizado com sucesso
 *       404:
 *         description: Curso não encontrado
 *       500:
 *         description: Erro ao atualizar o curso
 */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, duracao } = req.body;

  try {
    const curso = await Curso.findByPk(id);
    if (!curso) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }

    curso.nome = nome || curso.nome;
    curso.duracao = duracao || curso.duracao;
    await curso.save();

    return res.json(curso);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar o curso' });
  }
});

/**
 * @swagger
 * /cursos/{id}:
 *   delete:
 *     summary: Deleta um curso
 *     tags: [Cursos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do curso
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Curso deletado com sucesso
 *       404:
 *         description: Curso não encontrado
 *       500:
 *         description: Erro ao deletar o curso
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const curso = await Curso.findByPk(id);
    if (!curso) {
      return res.status(404).json({ error: 'Curso não encontrado' });
    }

    await curso.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao deletar o curso' });
  }
});

module.exports = router;
