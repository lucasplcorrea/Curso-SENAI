module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duracao: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  
    return Curso;
  };
  