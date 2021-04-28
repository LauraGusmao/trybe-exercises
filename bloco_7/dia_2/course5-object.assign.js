// PARTE 5 - OBJECT.ASSIGN

// Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino.
// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino
// Como pode ver, ele recebe pelo menos dois parâmetros, de forma que o primeiro sempre será o objeto de destino, e os parâmetros restantes serão os valores que serão adicionados a esse objeto destino.

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

const person1 = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person1, info, family)
console.log(person1)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  child: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */
// A chave age aparece tanto em person como em info e é sobrescrita pelo valor contido em info.

const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// --------

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

// Quando se faz o que foi feito no exemplo mais acima, ao criar uma nova variável para armazenar o retorno do método Object.assign , cria-se apenas um outro "caminho" para modificar ou acessar os dados do objeto destino (nesse caso, person ).

// Tendo isso em vista, como faremos para mudar os dados do novo objeto criado sem modificar o objeto inicial?
// Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável.

const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);