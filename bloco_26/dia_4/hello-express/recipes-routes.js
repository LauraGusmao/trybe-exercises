// No caso em que precisamos acessar objetos específicos, o express tem alguns recursos para que conseguimos passar informações além da rota que desejamos buscar.
// Utilizamos parâmetros de rota, que no Express, podem ser definidos da seguinte forma: /<rota>/<:parametro> onde :parametro vai servir para qualquer valor que vier na URL com aquele prefixo específico.

const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

// app.get('/recipes', function (req, res) {
//  res.json(recipes);
// });

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});