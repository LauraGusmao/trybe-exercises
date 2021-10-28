const express = require('express');

const { firstNameValid, lastNameValid, emailValid, passwordValid } = require('./middlewares/validations');
const createUser = require('./middlewares/createUser');
const error = require('./middlewares/error');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/users', firstNameValid, createUser);

app.use(error);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
