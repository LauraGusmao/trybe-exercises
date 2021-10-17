const { ObjectId } = require('mongodb');

const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  return connection()
    .then((db) => db.collection('books').find().toArray());
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const book = await connection()
    .then((db) => db.collection('books').findOne(new ObjectId(id)));
  
  if (!book) return null;

  return book;
}

const getByAuthorId = async (authorId) => {
  return connection()
    .then((db) => db.collection('books').find({ author_id: Number(authorId) }).toArray());
};

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'string' || authorId.length !== 24
    || !(await Author.findById(authorId))) return false;

  return true;
};

const create = async (title, authorId) => 
  await connection()
  .then((db) => db.collection('books').insertOne({ title, authorId }));

module.exports = {
  getAll,
  getById,
  getByAuthorId,
  isValid,
  create,
};
