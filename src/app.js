const express = require('express');
const app = express();

const clienteRoutes = require('./routes/cliente.routes');

app.use(express.json());
app.use('/api', clienteRoutes);

module.exports = app;
