// ARRAY.REDUCE

// O método reduce() executa a função de callback uma vez para cada elemento presente no array, excluindo furos (valores indefinidos), recebendo quatro argumentos:
// .acumulador - valor inicial (ou o valor do callback anterior),
// .valorAtual - o valor do elemento atual,
// .index - o índice atual e
// .array - o array onde a iteração está ocorrendo.

// A primeira vez que o callback é chamado, o acumulador e o valorAtual podem ter um de dois valores possíveis. Se o valorInicial tiver sido fornecido na chamada à função reduce(), então o acumulador será igual ao valorInicial e o valorAtual será igual ao primeiro valor no array. Caso nenhum valorInicial seja fornecido, acumulador será igual ao primeiro valor no array, e valorAtual será igual ao segundo.

// Se o valorInicial não tiver sido passado como argumento, então reduce() executará o callback da função começando a partir do índice 1 (index 1), pulando o primeiro índice (index 0). Se o valorInicial for passado como argumento, a função irá começar no index 0.



// -----

// O reduce é diferente das outras HOFs: ele possui um parâmetro a mais para a função que recebe como parâmetro. Esse parâmetro é chamado de acumulador, comumente referido como acc. EX: array.reduce(func, acc).
// Ele serve para acumular dentro de si os resultados das funções. Caso não exista segundo parâmetro no reduce , para um array de cinco elementos, o reduce executará a função passada como parâmetro quatro vezes. O valor inicial de acc será a primeira posição do array.
// Na primeira iteração ele realiza a função com o primeiro valor do array que está em acc com a segunda posição que está em seu segundo parâmetro curr , que é chamado de current . Na segunda vez, acc conterá o retorno da primeira iteração, na terceira, o retorno da primeira e da segunda, e assim por diante.

// -----

// A função soma todos os valores de um array:
// - Apenas com for:
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log(sumNumbers); // 113

// - Com reduce:
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

// -----

// O reduce possui uma outra diferença: você pode passar um segundo parâmetro para o reduce, logo após a função . Veja a seguir, será usado o último exemplo dado da soma dos números:
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113

// Com a alteração:
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(sumNumbers); // 113

// Mudando o acumulador para 10:
const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10);
console.log(sumNumbers); // 123

// Ao adicionar esse segundo parâmetro você está colocando um valor inicial na variável result, ou seja, no acumulador. Ele é o valor inicial do reduce. Caso nenhum parâmetro seja passado, o seu valor inicial será a primeira posição do array.

// -----

// Neste exemplo, serão comparados valores para buscar o maior valor em um array.
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 85

// A função passada agora pode possuir dois tipos de retorno:
// 1. O retorno do próprio acumulador bigger (no caso true do ternário), o que significa que ele não será modificado; ou
// 2. O valor do elemento do array, number, que indica que possui um valor maior que bigger.

// Se modificarmos o segundo parâmetro no reduce para 100, por exemplo, o retorno agora será 100, já que no array não possui número maior que o valor inicial passado.

// -----

// No próximo exemplo temos uma função que some todos os números pares do array.

// Usando filter e reduce:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair = (currentValue, number) => currentValue + number;

const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

console.log(sumNumbers(numbers)); // 152

// Usando apenas reduce:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152

// -----

// Agora vamos crias uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor.

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { mat: 'Matemática', nota: 67 },
      { mat: 'Português', nota: 79 },
      { mat: 'Química', nota: 70 },
      { mat: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { mat: 'Matemática', nota: 59 },
      { mat: 'Português', nota: 80 },
      { mat: 'Química', nota: 78 },
      { mat: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { mat: 'Matemática', nota: 76 },
      { mat: 'Português', nota: 90 },
      { mat: 'Química', nota: 70 },
      { mat: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { mat: 'Matemática', nota: 91 },
      { mat: 'Português', nota: 85 },
      { mat: 'Química', nota: 92 },
      { mat: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { mat: 'Matemática', nota: 70 },
      { mat: 'Português', nota: 70 },
      { mat: 'Química', nota: 60 },
      { mat: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { mat: 'Matemática', nota: 80 },
      { mat: 'Português', nota: 82 },
      { mat: 'Química', nota: 79 },
      { mat: 'Biologia', nota: 75 },
    ],
  },
];

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).mat, 
}));

console.log(reportBetter(estudantes));

// Console:
// [
//   { name: 'Jorge', materia: 'Português' },
//   { name: 'Mario', materia: 'Biologia' },
//   { name: 'Jorge', materia: 'Português' },
//   { name: 'Maria', materia: 'Química' },
//   { name: 'Natalia', materia: 'Português' },
//   { name: 'Wilson', materia: 'Português' },
// ]