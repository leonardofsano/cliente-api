const express = require('express');
const app = express();

app.use(express.json());

// Importa as rotas de cliente
const clienteRoutes = require('./routes/cliente.routes');

// Usa as rotas em /clientes
app.use('/clientes', clienteRoutes);

// Rota teste para o banco (testa conexão)
app.get('/test-db', async (req, res, next) => {
  try {
    const sequelize = require('./config/database');
    const [result] = await sequelize.query('SELECT NOW()');
    res.json({ serverTime: result });
  } catch (error) {
    next(error);
  }
});

// Middleware para tratar erros (sempre por último)
app.use((err, req, res, next) => {
  console.error('Erro capturado:', err.stack || err);
  res.status(500).json({ error: err.message || 'Erro interno do servidor' });
});

module.exports = app;
