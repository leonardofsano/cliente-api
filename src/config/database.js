const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    logging: false,
  }
);

sequelize.authenticate()
  .then(() => console.log('✅ Conectado ao banco de dados com sucesso!'))
  .catch(err => console.error('❌ Falha ao conectar ao banco:', err));

module.exports = sequelize;
