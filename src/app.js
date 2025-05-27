const express = require('express');
const app = express();

// —————— LOGGER GLOBAL ——————
app.use((req, res, next) => {
  console.log('[REQ]', req.method, req.originalUrl);
  next();
});
// ————————————————————————

app.use(express.json());

const clientesRouter = require('./routes/clientes');
app.use('/clientes', clientesRouter);

module.exports = app;
