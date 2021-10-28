const Author = require('../models/Author');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name) // caso houver algum valor que nao esteja preenchido.
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const isNonEmptyString = (value) => {
  if (!value) return false;

  return typeof value === 'string';
};

const isValid = (firstName, middleName, lastName) => {
  if (middleName && typeof middleName !== 'string') return false;

  return isNonEmptyString(firstName) && isNonEmptyString(lastName);
};

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um autor com o id ${id}`,
      },
    };
  }

  return getNewAuthor(author);
};

const create = async (firstName, middleName, lastName) => {
  const authorValid = isValid(firstName, middleName, lastName);

  if(!authorValid) return false;

  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Um autor já existe com esse nome completo',
      },
    };
  }

  await Author.create(firstName, middleName, lastName);

  return true;
};

module.exports = {
  getAll,
  findById,
  create,
};