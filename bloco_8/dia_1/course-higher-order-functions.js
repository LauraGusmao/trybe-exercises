// PARTE I - FIRST-CLASS FUNCTIONS
/* 
  Neste patamar os seus conhecimentos sobre funções são constituídos sobre o conceito conhecido por First-Class Functions, também chamado de funções de primeira classe. 
  Sua estrutura base não recebe como parâmetro e nem retorna uma função. Segundo esse modelo de função, passamos como parâmetro os seguintes tipos de dados: strings, numbers, booleans, objects e arrays.
*/

const product = (productName, price, isOnSale) => ({
  productName,
  price: `R$ ${price}`,
  sale: isOnSale ? 'For sale' : 'Not for sale',
});

console.log(product('Computador', 3000, false));
// { productName: 'Computador', price: 'R$ 3000', sale: 'Not for sale' }

// Perceba que esta função é de primeira classe, pois os tipos de dados recebidos como parâmetro são: string , number e boolea.

// PARTE II - HIGHER ORDER FUNCTIONS
/* 
  As HOF são funções que usam outras funções em suas operações. Ou seja, toda função que aceita como parâmetro e/ou retorna outra função é uma HOF. O mais incrível é que você já aplicou este conceito na prática.
*/

const button = document.querySelector('#signup-button');

// minha função de primeira classe;
const registerUser = () => {
  // código para registrar a nova pessoa usuária;
  console.log('Registrado com sucesso!');
};

// minha função de segunda classe;
button.addEventListener('click', registerUser);

// Construímos uma função de primeira classe implementando à lógica do registro para uma nova pessoa usuária e passamos como parâmetro de uma segunda função que é o addEventListener 

// PARTE III - ESTRUTURANDO UMA HOF
// É extremamente importante ter em mente que as HOF nos permitem compactar ações e não somente repassar valores.

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

/* 
  Construímos essa função para implementar um laço de repetição entre 0 e um número especificado via parâmetro (number) e para mostrar no console o valor da variável count de 0 a N (number). 
  O console.log é uma função própria do JavaScript, mas veja que fica mais simples caso você precise substituir esta ação para console.table ou console.group.
  Vamos aumentar um pouco o nível de complexidade e visualizar como podemos ir construindo funções mais especializadas e bem definidas:
*/

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

/* 
  Pegamos a nossa implementação do exemplo anterior e repassamos dois parâmetros ao chamarmos a função repeat , sendo:
    1- Um número até que ponto gostaríamos de testar, neste caso 5;
    2- Nossa ação que será executada quando chamada action(count) na nossa função repeat , neste caso uma função para testar nossos números.
  Veja que nosso segundo parâmetro é uma função que recebe o count como argumento, proveniente da execução do nosso action(count) dentro da função repeat . Deste modo, caso o count passe pela condição estabelecida para ser um número par, será executada a mensagem com os números que atendem ao critério.
  Pense agora que gostaríamos de testar quais números são ímpares. Veja como fica fácil ajustar a implementação:
*/

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

/*
  Observe que apenas transportamos e ajustamos a lógica para identificar os números pares e ímpares em duas novas funções chamadas isEven e isOdd.
  Após isso, só alteramos o segundo parâmetro ao chamar a função repeat e utilizamos o número que desejamos investigar no primeiro parâmetro.
  O fato da função repeat estar recebendo uma ação passando um resultado definido é também conhecido por callback.
*/

// EXERCICIO

/*
  1- Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
  2- Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
  3- Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
  4- Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores.
*/

const wakeUp = () => console.log('Acordando!!');

const letsHaveBF = () => console.log('Bora tomar café!!');

const letsSleep = () => console.log('Partiu dormir!!');

const doingThings = (action) => action();

doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!