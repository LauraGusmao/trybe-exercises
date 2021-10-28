const connection = require('./connection');

// const { ObjectId } = require('mongodb');

// const formatUser = (document) => {
//   const { _id, password, ...user } = document;

//   const formatted = { id: _id, ...user };

//   return formatted;
// }

const create = async ({ firstName, lastName, email, password }) => {
  return connection()
    .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }))
    .then(result => ({ id: result.insertedId, firstName, lastName, email }));
}


module.exports = {
  create,
};
