const Joi = require('joi');

const clienteSchema = Joi.object({
  nome: Joi.string().required(),
  data_nascimento: Joi.date().iso().optional(),
  rg: Joi.string().optional(),
  cpf: Joi.string().length(14).required(),
  telefone: Joi.string().optional(),
  endereco: Joi.string().optional(),
  numero: Joi.string().optional(),
  cidade: Joi.string().optional(),
  uf: Joi.string().length(2).optional(),
  cep: Joi.string().length(9).optional()
});

module.exports = clienteSchema;