const rescue = require('express-rescue');
const UserModel = require('../models/User');

const createUser = rescue(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = await UserModel.create({ firstName, lastName, email, password });

  res.status(201).json(newUser);
});

module.exports = createUser;
