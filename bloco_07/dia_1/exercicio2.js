/* 1- Crie uma função que receba um número e retorne seu fatorial.
. Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
. Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator.
*/

const fatorial = (num) => {
  let result = 1;
  for (let index = 1; index <= num; index += 1) {
    result = result * index;
  }
  return result
}
console.log(fatorial(4));

// 2- Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = frase => {
  let arr = frase.split(' ');
  result = '';
  let maxLength = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index].length > maxLength) {
      maxLength = arr[index].length;
      result = arr[index];
    }
  }
  return result
}
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

/* 4- Crie um código JavaScript com a seguinte especificação:
- Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
- Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
*/

const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
    ${result}
    
    #goTrybe
    `

    return result
}

console.log(buildSkillsPhrase("Lucas"))