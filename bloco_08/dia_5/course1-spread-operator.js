// PARTE 1 - SPREAD OPERATOR

// Quando usamos o push para adicionar algo a um array, ele será sobrescrito. Em aplicações maiores em que você precisa atualizar alguma informação de um array ou objeto, você pode querer manter as informações originais e apenas criar uma cópia do array original com o que precisa ser alterado.
// Em cenários como esse, vamos deixar o push de lado e usar um recurso incrível para adicionar valores a objetos iteráveis: o operador spread. O spread também pode ser utilizado para combinar objetos e arrays, para copiar valores de objetos iteráveis e em funções que recebem múltiplos argumentos.

const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];

const veiculos = [...carros, ...motos];
// [...array1, ...array2];
// [array1[0], array1[1], array1[2], array2[0], array2[1]]
const veiculos1 = [...motos, ...carros];
const veiculos2 = ['F40', ...motos, 'Uno', ...carros];

console.log(veiculos); // [ 'Gol', 'HB20', 'Focus', 'Biz', 'R1' ]
console.log(veiculos1); // [ 'Biz', 'R1', 'Gol', 'HB20', 'Focus' ]
console.log(veiculos2); // [ 'F40', 'Biz', 'R1', 'Uno', 'Gol', 'HB20', 'Focus' ]

// -----

const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
}

const pessoa = {
  nome: "Nádia",
  idade: "28",
  cidade: "BH",
}

const pessoaTryber = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'Corrida',
}

console.log(pessoaTryber);
/* {
  nome: 'Nádia',
  idade: '28',
  cidade: 'BH',
  softSkills: true,
  hardSkills: true,
  trabalho: true,
  esporte: 'Corrida'
} */

// -----

// Outro uso interessante do spread é no argumento de uma função que recebe vários parâmetros.

// Temos uma função que calcula o IMC (índice de massa corporal) de um paciente. A função recebe como parâmetros o peso e a altura da pessoa, e retorna o resultado arredondado do IMC. Podemos salvar os dados do paciente em um array e utilizar o spread para expandir esses valores no argumento da função que calcula o IMC:
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);

const patientInfo = [60, 1.7];
console.log(...patientInfo);

console.log(imc(...patientInfo)); // 20.76

// Pode-se aplicar esse conceito em funções prontas do Javascript que recebem múltiplos parâmetros, como as funções Math.max e Math.min.
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers)); // 800
console.log(Math.min(...randomNumbers)); // 5

// Outro exemplo que pode ser válido para a sua compreensão é que você também pode fazer o mesmo com objetos.
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
console.log(customer); 
/* {
  id: 101,
  name: 'Alysson',
  age: 25,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */

// -----

// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maça', 'Abacaxi', 'Morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Banana', 'Laranja', 'Limão'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));