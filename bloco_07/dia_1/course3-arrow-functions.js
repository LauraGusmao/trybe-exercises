// PARTE 3 - ARROW FUNCTIONS

// Declarar funcoes modo antigo
const printName = function () {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

// Declarar funcoes com arrow functions
const printName1 = () => {
  const myName = "Lucas";
  return myName;
}
console.log(printName1());  

// Quando não há nada no corpo da função e apenas um valor é retornado
const printName2 = () => "Lucas";
console.log(printName2());

// Quando a função recebe apenas um parametro
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

// Em funções que recebem mais de um parâmetro
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));