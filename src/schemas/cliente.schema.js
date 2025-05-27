const Joi = require('joi');

const clienteSchema = Joi.object({
  nome: Joi.string().min(1).required(),
  data_nascimento: Joi.date().optional(),
  rg: Joi.string().optional(),
  cpf: Joi.string()
    .pattern(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
    .required()
    .messages({
      'string.pattern.base': 'CPF deve estar no formato 000.000.000-00',
    }),
  telefone: Joi.string().optional(),
  endereco: Joi.string().optional(),
  numero: Joi.string().optional(),
  cidade: Joi.string().optional(),
  uf: Joi.string().length(2).optional(),
  cep: Joi.string()
    .pattern(/^\d{5}\-\d{3}$/)
    .optional()
    .messages({
      'string.pattern.base': 'CEP deve estar no formato 00000-000',
    }),
});

module.exports = clienteSchema;
