// PARTE 2 - OBJECT.KEYS

// Esse método é utilizado para listar as CHAVES de um objeto, retornando-as em um array.
// Object.keys() retorna um array cujo os elementos são strings correspondentes para a propriedade enumerável (KEY) encontrada diretamento sobre o objeto.
// A ordenação das propriedades é a mesma que a dada pelo loop sobre as propriedades do objeto manualmente.

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);