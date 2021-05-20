const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});

// Neste exemplo, tanto a implementação quanto os testes da função estão no mesmo arquivo. Na prática, porém, eles ficarão separados. Jest procura por arquivos com as extensões .js, .jsx, .ts e .tsx dentro de uma pasta com o nome __tests__, ou arquivos com o sufixo .test ou .spec. É comum que o arquivo de teste tenha o mesmo nome e fique na mesma pasta do arquivo que está sendo testado, acrescido da sufixo .test.js:

// arquivo: sum.js

// const sum = (a, b) => a + b;

// module.exports = sum;

// ---

// arquivo: sum.test.js

// const sum = require('./sum');

// test('sums two values', () => {
//   expect(sum(2, 3)).toBe(5);
// });

// ---

// A linha module.exports = sum exporta a função sum no primeiro arquivo para que possa ser utilizada em outros módulos. No segundo arquivo, utilizamos require('./sum') para importar a função sum.