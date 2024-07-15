const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('jobtime_V12', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
