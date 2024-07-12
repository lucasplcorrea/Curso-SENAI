const { Curso } = require('../../models');

class CursoController {
  // Método para cadastrar um curso
  static async create(req, res) {
    try {
      const { nome, duracaoHoras } = req.body;
      const curso = await Curso.create({ nome, duracaoHoras });
      return res.status(201).json(curso);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Método para listar todos os cursos
  static async listAll(req, res) {
    try {
      const cursos = await Curso.findAll();
      return res.status(200).json(cursos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Método para pesquisar cursos por nome e/ou duração
  static async search(req, res) {
    try {
      const { nome, duracaoHoras } = req.query;
      const cursos = await Curso.findAll({
        where: {
          nome: nome || undefined,
          duracaoHoras: duracaoHoras || undefined,
        },
      });
      return res.status(200).json(cursos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Método para buscar um curso pelo id
  static async findById(req, res) {
    try {
      const { id } = req.params;
      const curso = await Curso.findByPk(id);
      if (!curso) {
        return res.status(404).json({ error: 'Curso não encontrado' });
      }
      return res.status(200).json(curso);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Método para atualizar um curso pelo id
  static async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, duracaoHoras } = req.body;
      const curso = await Curso.findByPk(id);
      if (!curso) {
        return res.status(404).json({ error: 'Curso não encontrado' });
      }
      curso.nome = nome;
      curso.duracaoHoras = duracaoHoras;
      await curso.save();
      return res.status(200).json(curso);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  // Método para deletar um curso pelo id
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const curso = await Curso.findByPk(id);
      if (!curso) {
        return res.status(404).json({ error: 'Curso não encontrado' });
      }
      await curso.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CursoController;
