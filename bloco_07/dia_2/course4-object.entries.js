// PARTE 4 - OBJECT.ENTRIES

// Object.entries() retorna um array cujos elementos são também arrays correspondentes aos pares de propriedades [key, value] enumeráveis encontrados diretamente sobre o objeto. 
// A ordem das propriedades é a mesma que seria se fossem iteradas as propriedades do objeto manualmente.

const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue); 

// O retorno é um array e que cada um de seus elementos é um outro array com apenas dois dados, a chave do objeto e o seu valor:
/* Output:
[
  [ 'França', 'Paris' ],
  [ 'Brasil', 'Brasília' ],
  [ 'Espanha', 'Madrid' ],
  [ 'Portugal', 'Lisboa' ]
]
*/

// Para ver os valores separadamente faça:
for(index in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};

const oi = [
  [ 'França', 'Paris' ],
  [ 'Brasil', 'Brasília' ],
  [ 'Espanha', 'Madrid' ],
  [ 'Portugal', 'Lisboa' ]
]
console.log(oi[2]);