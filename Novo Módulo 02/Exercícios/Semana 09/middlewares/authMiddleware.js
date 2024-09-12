const jwt = require('jsonwebtoken');

// Middleware para verificar o token JWT
const verificaToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuarioId = decoded.id; // Armazenando o ID do usuário no request
    next();
  } catch (error) {
    return res.status(400).json({ error: 'Token inválido.' });
  }
};

module.exports = { verificaToken };
