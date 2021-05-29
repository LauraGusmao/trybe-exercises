/* Exercicio 2*/

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1- Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addNewKey = (obj, key, value) => {
  obj[key] = value;
}
addNewKey(lesson2, 'turno', 'manhã');
console.log(lesson2);

// 2- Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (obj) => {
  return Object.keys(obj);
}
console.log(listKeys(lesson3));

// 3- Crie uma função para mostrar o tamanho de um objeto.
const sizeObj = (obj) => {
  return Object.keys(obj).length;
}
console.log(sizeObj(lesson1));

// 4- Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson2));

// 5- Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 6- Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalNumberStudents = (obj) => {
  let keys = Object.keys(obj);
  let total = 0;
  for (const index of keys) {
    total += obj[index].numeroEstudantes
  }
  return total;
}
console.log(totalNumberStudents(allLessons))

// 7- Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (obj, position) => {
  return Object.values(obj)[position]; // arr[position]
}
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// 8- Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj); // array de arrays
  let exist = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) exist = true;
  }
  return exist;
}
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false