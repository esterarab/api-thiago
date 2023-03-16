const Sequelize = require('sequelize');

const sequelize = new Sequelize('esterevivian', 'root', '19032003', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
