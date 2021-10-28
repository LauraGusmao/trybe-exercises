const express = require('express');

const Author = require('./controllers/Author');
const ErrorController = require('./controllers/ErrorController');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

app.use(ErrorController);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});