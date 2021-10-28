const connection = require('./connection');
const { ObjectId } = require('mongodb');


const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) => {
        return {
          id: _id,
          firstName,
          middleName,
          lastName,
        }
      })
    );
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return { id, firstName, middleName, lastName };
};

const create = async (firstName, middleName, lastName) =>
  await connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }));

const findByName = async (firstName, middleName, lastName) => {
  // Determinamos se devemos buscar com ou sem o nome do meio
  const query = middleName
    ? { firstName, middleName, lastName }
    : { firstName, lastName };

  // Executamos a consulta e retornamos o resultado
  const author = await connection()
    .then((db) => db.collection('authors').findOne(query));

  // Caso nenhum author seja encontrado, devolvemos null
  if (!author) return null;

  // Caso contrário, retornamos o author encontrado
  return author;
};

module.exports = {
  getAll,
  findById,
  create,
  findByName,
};
