const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '*****' : undefined);

const app = require('./app');
const sequelize = require('./config/database');
const port = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync();
    console.log('📦 Tabelas sincronizadas no banco');

    app.listen(port, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${port}`);
    });
  } catch (err) {
    console.error('❌ Erro ao sincronizar o banco ou iniciar o servidor:', err);
    process.exit(1);
  }
})();
