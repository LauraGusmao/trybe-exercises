// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, name) => 
    acc + name.split('').reduce((acc1, letter) => {
      if (letter === 'a' || letter === 'A') return acc1 + 1;
      return acc1
    }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);