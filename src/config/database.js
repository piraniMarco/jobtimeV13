const { Sequelize } = require('sequelize');

<<<<<<< HEAD
const sequelize = new Sequelize('jobtime_V13', 'root', 'Momento@170839', {
=======
const sequelize = new Sequelize('jobtime_V13', 'jobtime_user', 'Momento@170839', {
>>>>>>> 2fc767a9cb13f41f96d83a8a0a3b78384d119db5
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
