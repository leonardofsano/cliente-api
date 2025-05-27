const express = require('express');
const app = express();
const clientesRouter = require('./routes/clientes');

// Middleware para parsear JSON
app.use(express.json());

// Uso das rotas
app.use('/clientes', clientesRouter);

module.exports = app;
