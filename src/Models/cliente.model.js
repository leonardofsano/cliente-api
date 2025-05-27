const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // importa a conexão com o PostgreSQL

const Cliente = sequelize.define('Cliente', {
  codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  rg: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  cpf: {
    type: DataTypes.STRING(14),
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  endereco: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  numero: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  cidade: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  uf: {
    type: DataTypes.CHAR(2),
    allowNull: true,
  },
  cep: {
    type: DataTypes.STRING(9),
    allowNull: true,
  },
}, {
  tableName: 'clientes',      // nome exato da tabela no PostgreSQL
  timestamps: false,          // desativa os campos createdAt e updatedAt
});

module.exports = Cliente;
