const { Model, DataTypes, DECIMAL } = require('sequelize');
const sequelize = require('./database');

/** Representação de uma tabela do banco mapeada nessa classe */
/**
 * https://sequelize.org/docs/v6/core-concepts/model-basics/ 
 * 
 * */

const Produto = sequelize.define('Produto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  valor: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },  
  tamanho: {
    type: DataTypes.STRING,
    allowNull: false,

  },
}, {
  sequelize,
  tableName: 'produto',
  timestamps: false,
});

module.exports = Produto;
