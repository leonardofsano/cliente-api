const Cliente = require('../models/cliente.models');
const clienteSchema = require('../schemas/cliente.schema');
const { Op } = require('sequelize');

exports.createCliente = async (req, res) => {
  try {
    const { error } = clienteSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const existe = await Cliente.findOne({ where: { cpf: req.body.cpf } });
    if (existe) return res.status(400).json({ error: 'CPF já cadastrado' });

    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    console.error('Erro no createCliente:', err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.getAllClientes = async (req, res) => {
  try {
    const filtros = {};
    if (req.query.nome)   filtros.nome   = { [Op.iLike]: `%${req.query.nome}%` };
    if (req.query.cidade) filtros.cidade = { [Op.iLike]: `%${req.query.cidade}%` };
    if (req.query.uf)      filtros.uf      = { [Op.iLike]: `%${req.query.uf}%` };

    const clientes = await Cliente.findAll({ where: filtros });
    res.status(200).json(clientes);
  } catch (err) {
    console.error('Erro ao buscar clientes:', err);
    res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
};

exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.codigo);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
    res.status(200).json(cliente);
  } catch (err) {
    console.error('Erro ao buscar cliente:', err);
    res.status(500).json({ error: 'Erro ao buscar cliente' });
  }
};

exports.updateCliente = async (req, res) => {
  try {
    const { error } = clienteSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const cliente = await Cliente.findByPk(req.params.codigo);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });

    await cliente.update(req.body);
    res.status(200).json(cliente);
  } catch (err) {
    console.error('Erro ao atualizar cliente:', err);
    res.status(500).json({ error: 'Erro ao atualizar cliente' });
  }
};

exports.deleteCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.codigo);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });

    await cliente.destroy();
    res.status(204).send();
  } catch (err) {
    console.error('Erro ao deletar cliente:', err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};
