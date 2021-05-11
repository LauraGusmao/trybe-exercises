// PARTE 5 - DEFAULT DESTRUCTURING

// Quando tentamos acessar uma propriedade que não existe, o valor retornado é undefined.
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality } = person;

console.log(nationality) // undefined

// E se quisessemos dar um valor padrão para nationality, caso essa propriedade não exista no objeto? Conseguimos atribuir esse valor padrão utilizando default destructuring, que é mais um recurso do ES6.

// Utilizando default destructuring:
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

// Analogamente, o mesmo pode ser feito na hora de desestruturar um array:
const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0

// -----

// Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.

const getNationality = ({ firstName, nationality }) => {
  if (firstName === 'João') {
    {nationality = 'Brasilian'}
  };
  return `${firstName} is ${nationality}`;
}

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));