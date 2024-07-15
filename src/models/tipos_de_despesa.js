const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Comprovante = require('./comprovantes');

const TipoDeDespesa = sequelize.define('TipoDeDespesa', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tipos_de_despesa'
});

TipoDeDespesa.hasMany(Comprovante, { foreignKey: 'tipoDespesaId' }); // Define a associação

module.exports = TipoDeDespesa;
