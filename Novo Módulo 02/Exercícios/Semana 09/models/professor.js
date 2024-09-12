module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define('Professor', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      disciplina: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    return Professor;
  };
  