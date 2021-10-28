const rescue = require('express-rescue');
const Joi = require('joi');
const Author = require('../services/Author');

const getAll = rescue(async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

const findById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (author.error) return next(author.error);

  res.status(200).json(author);
});

const create = rescue(async (req, res, next) => {
  // Utilizamos o Joi para descrever o objeto que esperamos
  // receber na requisição. Para isso, chamamos Joi.object()
  // passando um objeto com os campos da requisição e suas descrições
  const schema = Joi.object({
    // Deve ser uma string (.string()) não vazia (.not().empty()) e é obrigatório (.required())
    first_name: Joi.string().not().empty().required(),
    // Não é obrigatório mas, caso seja informado, deve ser uma string não vazia
    middle_name: Joi.string().not().empty(),
    // Deve ser uma string não vazia e é obrigatório
    last_name: Joi.string().not().empty().required(),
  });

  // Por fim, pedimos que o Joi verifique se o corpo da requisição se adequa a essas regras
  const { error } = schema.validate(req.body);

  // Caso exista algum problema com a validação, iniciamos o fluxo de erro e interrompemos o middleware.
  if (error) {
    return next(error);
  }

  // Caso não haja erro de validação, prosseguimos com a criação do usuário
  const { first_name, middle_name, last_name } = req.body;

  const newAuthor = await Author.create(first_name, middle_name, last_name);

  // Caso haja erro na criação do autor, iniciamos o fluxo de erro
  if (newAuthor.error) return next(newAuthor.error);

  res.status(201).json({ message: 'Autor criado com sucesso!'});
});

module.exports = {
  getAll,
  findById,
  create,
};