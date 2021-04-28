// PARTE 1 - ADICIONANDO NOVAS KEYS

// Ao inves de reescrever o objeto inteiro, apenas adiione a nova propriedade usando uma das seguintes formas:
// - objeto.nomeDaPropriedade
// - objeto[variavelQueContemONomeDaPropriedade]
const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};
console.log(customer2);

customer2['lastName'] = 'Silva';
console.log(customer2);

// Suponha que seja necessário adicionar algumas novas propriedades ao objeto. Essas novas propriedades poderão ser adicionadas de acordo com o valor de algumas variáveis
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

// Exercicio: crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

let laura = {
  fistName: 'Laura'
}
const exercicio = (obj, key, value) => {
  let newKey = key;
  let newValue = value;
  obj[newKey] = newValue;
  return obj;
};

exercicio(laura, 'age', 29);
console.log(laura);
