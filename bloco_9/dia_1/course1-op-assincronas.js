// PARTE 1 - OPERAÇÕES ASSÍNCRONAS

// Operações em JavaScript são tradicionalmente síncronas, ou seja, para que uma cadeia de operações seja realizada, é necessário que uma operação termine para que outra comece.
// Existem operações que não possuem esta codependência em JavaScript, e com objetivo de cobrir justamente este tipo de situação surgem as operações assíncronas.

// -----

// Exemplo: 
// Linha de produção de automóveis, de modo que, se tivermos parafusos suficientes em estoque, não precisamos parar a montagem das rodas para que mais parafusos sejam comprados e repostos. (Função setTimeout será abordada mais a frente)

setTimeout(() => {
  console.log('Comprar parafusos') // Comprar parafusos
  console.log('Adicionar ao estoque') // Adicionar ao estoque
}, 2000);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// Note que console.log('Comprar parafusos') e console.log('Adicionar ao estoque') foram declarados antes das etapas 1, 2 e 3, mesmo assim o retorno das chamadas só ocorre ao final. Isto acontece pois utilizamos a função setTimeout. É muito comum que esta função seja utilizada para simular comportamentos assíncronos.

// Na prática vivenciaremos situações em que nossa aplicação depende de uma informação externa, como por exemplo, solicitar uma informação a um banco de dados. É aí que o conceito de assincronicidade entra a nosso favor para que nossa aplicação não perca eficiência.

// -----

// Exercício-exemplo para fixação:

const assert = require('assert');

// Essa validação passa:
const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]);

const assert = require('assert');

// Essa validação falha:
const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepStrictEqual(numbers, [1, 2, 3]); 
// O teste espera receber o array [1, 2, 3], mas apenas recebe o [2, 3]. Isso ocorre por causa da função setTimeout. Ela é uma função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos) para executar o pushNumber(numbers, 1).

// Para passar no teste, é necessário testar o numbers após 3000 milissegundos:
const assert = require('assert');

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 1]), 3000);

// Observe que, além de adicionar o setTimeout, o array [1, 2, 3] foi modificado para [2, 3, 1]. Isso se dá, pois, como a função é assíncrona, o código continua rodando, mesmo que ela ainda não tenha terminado de executar. Ou seja, o array recebe primeiro o 2, depois o 3, e após os 3 segundos do setTimeout, ele recebe o 1.
