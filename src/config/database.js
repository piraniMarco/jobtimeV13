const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('jobtime_V13', 'root', 'Momento@170839', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
