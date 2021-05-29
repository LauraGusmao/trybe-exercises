// PARTE 2 - ARRAY.FOREACH

// O forEach percorre o array e executa a função passada para cada um dos seus valores. O forEach não retorna nenhum valor.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);
// No exemplo acima, foi executado para cada elemento do array a função multipliesFor2 , que imprime o parâmetro element * 2 no console.

// Veja este exemplo abaixo com o uso de index no forEach:
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]