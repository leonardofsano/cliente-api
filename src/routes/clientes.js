const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente.model');

// Rota GET – Listar todos os clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    console.error('Erro ao buscar clientes:', error);
    res.status(500).json({ erro: 'Erro ao buscar clientes' });
  }
});

// Rota POST – Criar novo cliente
router.post('/', async (req, res) => {
  try {
    const novoCliente = await Cliente.create(req.body);
    res.status(201).json(novoCliente);
  } catch (error) {
    console.error('Erro ao criar cliente:', error);
    res.status(500).json({ erro: 'Erro ao criar cliente' });
  }
});

module.exports = router;
