const express = require('express');
const cors = require('cors'); // permite que nossa API receba requisições de outras aplicações.
const authMiddleware = require('./middlewares/auth');

const app = express();
app.use(express.json());
app.use(cors());

// Esta rota não passa pelo middleware de autenticação!
app.get('/open', function (req, res) {
  res.send('open!')
});

// Esta rota passa pelo middleware de autenticação!
app.get('/closed', authMiddleware, function (req, res) {
  res.send('closed!')
});

const recipesRouter = require('./recipesRouter');

/* Todas as rotas com /recipes/<alguma-coisa> entram aqui e vão para o roteador. */
app.use('/recipes', recipesRouter);

app.all('*', function (req, res) {
 return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});