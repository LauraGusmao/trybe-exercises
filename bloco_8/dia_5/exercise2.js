// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Dica: use rest.

const assert = require('assert');

// escreva sum abaixo
const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0);
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);