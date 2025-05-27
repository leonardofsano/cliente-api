const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');

// Rota GET /clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    res.status(500).json({ erro: 'Erro ao buscar clientes' });
  }
});

module.exports = router;
