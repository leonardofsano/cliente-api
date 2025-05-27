const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

router.post('/clientes', clienteController.createCliente);
router.get('/clientes', clienteController.getAllClientes);
router.get('/clientes/:codigo', clienteController.getClienteById);
router.put('/clientes/:codigo', clienteController.updateCliente);
router.delete('/clientes/:codigo', clienteController.deleteCliente);

module.exports = router;
