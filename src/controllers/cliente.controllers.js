const Cliente = require('../models/cliente.models');
const clienteSchema = require('../schemas/cliente.schema');

exports.createCliente = async (req, res) => {
  try {
    const { error } = clienteSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const existe = await Cliente.findOne({ where: { cpf: req.body.cpf } });
    if (existe) return res.status(400).json({ error: 'CPF já cadastrado' });

    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.getAllClientes = async (req, res) => {
  try {
    const filtros = {};
    if (req.query.nome) filtros.nome = req.query.nome;
    if (req.query.cidade) filtros.cidade = req.query.cidade;
    if (req.query.uf) filtros.uf = req.query.uf;

    const clientes = await Cliente.findAll({ where: filtros });
    res.status(200).json(clientes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.codigo);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
    res.status(200).json(cliente);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.updateCliente = async (req, res) => {
  try {
    const codigo = req.params.codigo;

    // Verifica se cliente existe
    const cliente = await Cliente.findByPk(codigo);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });

    // Valida os campos que vierem no body (parcial)
    const { error } = clienteSchema.validate(req.body, { presence: 'optional' });
    if (error) return res.status(400).json({ error: error.details[0].message });

    // Se cpf for alterado, verifica duplicidade
    if (req.body.cpf && req.body.cpf !== cliente.cpf) {
      const cpfExistente = await Cliente.findOne({ where: { cpf: req.body.cpf } });
      if (cpfExistente) return res.status(400).json({ error: 'CPF já cadastrado por outro cliente' });
    }

    await cliente.update(req.body);
    res.status(200).json(cliente);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

exports.deleteCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.codigo);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });

    await cliente.destroy();
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
};
