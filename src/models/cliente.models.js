const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.DATEONLY,
  },
  rg: {
    type: DataTypes.STRING,
  },
  cpf: {
    type: DataTypes.STRING,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
  },
  endereco: {
    type: DataTypes.STRING,
  },
  numero: {
    type: DataTypes.STRING,
  },
  cidade: {
    type: DataTypes.STRING,
  },
  uf: {
    type: DataTypes.STRING(2),
  },
  cep: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'clientes',
  timestamps: false
});

module.exports = Cliente;
