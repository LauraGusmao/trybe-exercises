const express = require('express');
// const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const { getSimpsons, setSimpsons } = require('./fs-utils');
const authMiddleware = require('./authMiddleware');
const generateToken = require('./generateToken');


const app = express();
// app.use(bodyParser.json());
app.use(express.json());
app.use(authMiddleware);

/* Crie suas rotas aqui */

// Crie uma rota GET /ping
app.get('/ping', function (req, res) {
  res.status(200).json({ message: 'pong' });
});

// Crie uma rota POST /hello
app.post('/hello', function (req, res) {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${ name }!` });
});

// Crie uma rota POST /greetings
app.post('/greetings', function (req, res) {
  const { name, age } = req.body;

  if (parseInt(age, 10) <= 17) return res.status(404).json({ message: "Unauthorized" });

  res.status(200).json({ message: `Hello, ${ name }!` });
});

// Crie uma rota PUT /users/:name/:age
app.get('/users/:name/:age', function (req, res) {
  const { name, age } = req.params;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

// ------

// Crie uma API de dados das personagens de Simpsons
app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await getSimpsons();

  res.status(200).json(simpsons);
}));

app.get('/simpson/:id', rescue(async (req, res) => {
  const simpsons = await getSimpsons();

  const simpson = simpsons.find((s) => s.id === req.params.id);

  if (!simpson) {
    return res.status(404).json({ message: 'simpson not found!'});
  }

  return res.status(200).json(simpson);
}));

app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;

  const simpsons = await getSimpsons();

  if (simpsons.map(({ id }) => id).includes(id)) {
    return res.status(409).json({ message: 'id already exists' });
  }
  
  simpsons.push({ id, name });

  await setSimpsons(simpsons);

  return res.status(204).json({ message: 'Character added successfully!'});
}));

// ------

// Bonus: 

// Adicione autenticação a todos os endpoints.

// Crie uma rota POST /signup
app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = generateToken();

  return res.status(200).json({ "token": token });
});


app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));