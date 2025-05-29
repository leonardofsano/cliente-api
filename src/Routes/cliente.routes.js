const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controllers');

router.post('/', clienteController.createCliente);
router.get('/', clienteController.getAllClientes);
router.get('/:codigo', clienteController.getClienteById);
router.put('/:codigo', clienteController.updateCliente);
router.delete('/:codigo', clienteController.deleteCliente);

module.exports = router;
