const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { verificaToken } = require('../middlewares/authMiddleware'); // Proteção de rotas
const Usuario = require('../models/Usuario'); // Supondo que o modelo exista

const router = express.Router();

// Rota de cadastro de usuário (sem proteção)
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;

  console.log('Dados recebidos:', req.body); // Para depurar os dados

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    // Hash da senha
    const hashedSenha = await bcrypt.hash(senha, 10);
    
    // Criação do novo usuário
    const novoUsuario = await Usuario.create({ nome, email, senha: hashedSenha });
    
    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(400).json({ error: 'Erro ao cadastrar usuário' });
  }
});


// Rota de login (sem proteção)
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
    return res.status(401).json({ error: 'Email ou senha inválidos' });
  }

  const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Rota protegida de exemplo
router.get('/me', verificaToken, async (req, res) => {
  const usuario = await Usuario.findByPk(req.usuarioId);
  res.json(usuario);
});

module.exports = router;
