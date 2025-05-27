const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cliente_db', 'postgres', '123', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
})();

module.exports = sequelize;
