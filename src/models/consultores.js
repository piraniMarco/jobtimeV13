const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../config/database');
const Comprovante = require('./comprovantes'); 

const Consultores = connection.define('Consultores', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
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
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false 
    }
}, {
    indexes: [
        {
            unique: false,
            fields: ['email']
        },
        {
            unique: false,
            fields: ['login']
        }
    ]
});

Consultores.hasMany(Comprovante, { foreignKey: 'consultorId' });

module.exports = Consultores;
