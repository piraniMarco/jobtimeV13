const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comprovante = sequelize.define('Comprovante', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoDespesaId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tipos_de_despesa',
            key: 'id'
        }
    },
    clienteId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'clientes',
            key: 'id'
        }
    },
    consultorId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'consultores',
            key: 'id'
        }
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    comprovante: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'comprovantes'
});

module.exports = Comprovante;
