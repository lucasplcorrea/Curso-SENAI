const express = require('express');
const router = express.Router();
const { Professor } = require('../models');

/**
 * @swagger
 * components:
 *   schemas:
 *     Professor:
 *       type: object
 *       required:
 *         - nome
 *         - disciplina
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do professor
 *         nome:
 *           type: string
 *           description: Nome do professor
 *         disciplina:
 *           type: string
 *           description: Disciplina do professor
 */

/**
 * @swagger
 * /professores:
 *   post:
 *     summary: Cria um novo professor
 *     tags: [Professores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Professor'
 *     responses:
 *       201:
 *         description: Professor criado com sucesso
 *       400:
 *         description: Nome e disciplina são obrigatórios
 *       500:
 *         description: Erro ao criar o professor
 */
router.post('/', async (req, res) => {
  const { nome, disciplina } = req.body;

  if (!nome || !disciplina) {
    return res.status(400).json({ error: 'Nome e disciplina são obrigatórios' });
  }

  try {
    const novoProfessor = await Professor.create({ nome, disciplina });
    return res.status(201).json(novoProfessor);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar o professor' });
  }
});

/**
 * @swagger
 * /professores:
 *   get:
 *     summary: Lista todos os professores
 *     tags: [Professores]
 *     responses:
 *       200:
 *         description: Lista de professores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Professor'
 *       500:
 *         description: Erro ao buscar professores
 */
router.get('/', async (req, res) => {
  try {
    const professores = await Professor.findAll();
    return res.json(professores);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao buscar professores' });
  }
});

/**
 * @swagger
 * /professores/{id}:
 *   put:
 *     summary: Atualiza um professor existente
 *     tags: [Professores]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do professor
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Professor'
 *     responses:
 *       200:
 *         description: Professor atualizado com sucesso
 *       404:
 *         description: Professor não encontrado
 *       500:
 *         description: Erro ao atualizar o professor
 */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, disciplina } = req.body;

  try {
    const professor = await Professor.findByPk(id);
    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado' });
    }

    professor.nome = nome || professor.nome;
    professor.disciplina = disciplina || professor.disciplina;
    await professor.save();

    return res.json(professor);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao atualizar o professor' });
  }
});

/**
 * @swagger
 * /professores/{id}:
 *   delete:
 *     summary: Deleta um professor
 *     tags: [Professores]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do professor
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Professor deletado com sucesso
 *       404:
 *         description: Professor não encontrado
 *       500:
 *         description: Erro ao deletar o professor
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const professor = await Professor.findByPk(id);
    if (!professor) {
      return res.status(404).json({ error: 'Professor não encontrado' });
    }

    await professor.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao deletar o professor' });
  }
});

module.exports = router;
