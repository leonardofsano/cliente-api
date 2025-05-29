const Cliente = sequelize.define('Cliente', {
  codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data_nascimento: DataTypes.DATE,
  rg: DataTypes.STRING,
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telefone: DataTypes.STRING,
  endereco: DataTypes.STRING,
  numero: DataTypes.STRING,
  cidade: DataTypes.STRING,
  uf: DataTypes.STRING,
  cep: DataTypes.STRING
}, {
  tableName: 'clientes',
  timestamps: false
});
  