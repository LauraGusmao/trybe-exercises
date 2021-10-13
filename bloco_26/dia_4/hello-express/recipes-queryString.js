// Provavelmente você também já deve ter se deparado com URLs nesse formato /produtos?q=Geladeira&precoMaximo=2000. Para pessoas comuns é bem difícil interpretar o que são todas essas letrinhas no final da URL depois do sinal de interrogação. Essa string depois do ? é uma query string. Nesse caso está sendo passado dois parâmetros: q com o valor Geladeira e precoMaximo com o valor 2000.
// Geralmente o recurso de query string é usado em funcionalidades de pesquisas como quando você utiliza além da barra de pesquisa, filtros avançados para definir o preço máximo, marca e outras classificações em e-commerces.

const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
})

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
