const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ajuste o caminho conforme necessário
const Comprovante = require('./comprovantes'); // Importa o modelo Comprovante

const Clientes = sequelize.define('Clientes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    razaoSocial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeFantasia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
}, {
    tableName: 'clientes',
    timestamps: false
});

Clientes.hasMany(Comprovante, { foreignKey: 'clienteId' }); // Define a associação

module.exports = Clientes;
