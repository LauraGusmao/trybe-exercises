/** 
 * 1- Crie uma função de primeira classe que retorna um objeto {nomeCompleto, email} de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
 * 2- Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

// EX 1
const emailGenerator = (employeeName) => {
  const username = employeeName.toLowerCase().split(' ').join('_');
  return {employeeName, email: `${username}@betrybe.com`}
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: callback('Luiza Drumond'),
    // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: callback('Carla Paiva'),
    // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(emailGenerator));

// EX 2
const checkNumber = (drawnNum, myNum) => drawnNum === myNum;

const result = (myNum, callback) => {
  const draw = Math.floor((Math.random() * 5) + 1);
  console.log(draw);
  return callback(draw, myNum) ? "Parabéns você ganhou" : "Tente novamente"
}

console.log(result(3, checkNumber));
