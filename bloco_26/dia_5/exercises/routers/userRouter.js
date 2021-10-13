const express = require('express');
const router = express.Router();

const {
  validateUsername,
  validateEmail,
  validatePassword,
} = require('../middlewares/validations');

router.post('/register', validateUsername, validateEmail, validatePassword,
  function (_req, res) {
    res.status(201).json({ message: 'user created' });
  }
);

router.post('/login', validateEmail, validatePassword,
  function (_req, res) {
    res.status(200).json({ token: '86567349784e' });
  }
);

module.exports = router;
