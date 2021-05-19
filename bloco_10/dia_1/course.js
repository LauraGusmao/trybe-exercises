//  JEST

// Você já sabe utilizar o módulo assert do NodeJS, então por que precisaria de outra ferramenta que faz essencialmente a mesma coisa? Embora seja possível fazer praticamente qualquer tipo de teste dessa maneira, acaba se tornando um processo lento, trabalhoso e repetitivo à medida que você começa a testar dados ou situações mais complexas.
// Além disso, conforme seus programas vão crescendo, seus testes ficarão distribuídos em vários arquivos. Torna-se necessária uma ferramenta que seja capaz de encontrar e executar automaticamente todos os testes da aplicação, reportar informações sobre cobertura de testes, fornecer feedback sobre quais testes falharam e por quê, além de outras características.
// Jest é um dos frameworks de teste existentes no ecossistema de JavaScript que fornecem esses tipos de funcionalidades.

// -----

// Por que utilizar um framework de testes?

// Por que precisamos de um framework ? Não dá pra escrever todos os testes somente com asserts simples? Em teoria, sim, mas à medida que suas aplicações se tornam maiores e mais complexas, esse processo torna-se inviável pelos motivos abaixo:

// .Sua aplicação terá várias funções, provavelmente distribuídas por vários arquivos. Colocar todos os testes em um único arquivo torna-se impraticável rapidamente. Não é possível saber onde começam e onde terminam os testes de uma função. Mesmo em uma função mais complexa, você pode querer separar e agrupar testes relacionados;
// .Node.js só executa um arquivo por vez, com o comando node <nome_do_arquivo>. Se há vários arquivos de teste, é preciso executar um por vez ou escrever um script shell para executar todos os arquivos;
// .Você sempre precisa executar todos os testes de um arquivo. Não há como executar apenas um subgrupo dos testes presentes no arquivo;
// .Sempre que um teste falha, a execução é interrompida imediatamente. Isso dificulta saber se os testes posteriores estão corretos, necessitando garantir que todos os testes anteriores estejam corretos;
// .Vários testes podem requerer que os mesmos passos sejam executados antes ou após a execução, resultando em muita duplicação;
// .Para pular ou desabilitar um teste falhando, é preciso removê-lo ou comentá-lo;
// .Não há informações sobre a cobertura de testes. Ou seja, quais partes do código estão sendo estressadas pelos testes e quais não estão.

// Para o mercado de trabalho, o assert é insuficiente. Normalmente os programas estão sempre evoluindo e ganhando novas features e, por conta disso, surgiu a necessidade de criar uma suíte de testes mais robusta, legível e de fácil manutenção.

// -----

// Escrevendo testes

// Escrever testes em Jest é muito simples, tudo que é necessário é utilizar a função test. A função it é um alias para test, ou seja, ambas se referem à mesma função e você pode usar qualquer uma delas. Essas funções, por serem globais, ficam automaticamente disponíveis nos seus arquivos uma vez que o Jest é instalado.

// A função test espera três argumentos. O primeiro argumento é o nome do teste. Esse nome identifica o teste e é também o texto que aparecerá quando os testes forem executados. O segundo argumento é uma função contendo suas expectations. Em outras palavras, é dentro dessa função que você fará os testes propriamente ditos. O terceiro argumento (opcional) é um timeout, indicando quanto tempo o Jest deve esperar que o teste execute antes de abortá-lo.

// ver exemplo em: dia_1/jest_test/sum.test.js

// -----

// Expect e matchers

// Ao escrever testes, você precisa verificar que valores satisfazem a algumas condições. A função expect é utilizada para dar acesso a um conjunto de métodos chamados matchers. Esses métodos permitem testar valores de diversas formas. expect recebe o valor a ser testado e retorna um objeto representando uma expectation. Sobre esse objeto pode-se chamar os matchers que Jest fornece.

// --

// toBe

// toBe é o matcher mais simples. Esse matcher testa igualdade estrita entre o valor passado para expect e seu argumento. Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string "5" não é igual ao número 5.

expect(5).toBe("5")

// --

// toEqual

// Para compreendermos a diferença entre toEqual e toBe, precisamos entender que no JavaScript existem duas formas de atribuir valores. A primeira é para a variável e a segunda é para propriedade do objeto, bem como ao passar argumentos para uma função. Essas formas de atribuição são conhecidas por valor e referência.

// Para nos aprofundarmos nessas duas formas, é importante entender os tipos de dados, que separamos em tipos primitivos (Ex. number, string, boolean, etc) e objetos (Ex. Objetos, Funções, Arrays, etc).

// Os tipos primitivos a atribuição ocorre por valor, ou seja, uma cópia do valor original, pois eles são imutáveis. Eles são como gêmeos, uma vez o primeiro gêmeo corta seu cabelo, o segundo não terá seu cabelo alterado. Por exemplo:

let name = "Pedro";
let firstName = name;

name = "Carol";

console.log(name); // Carol
console.log(firstName); // Pedro

// Por outro lado, os objetos tem atribuição por referência, ou seja, a cada vez que você cria um novo objeto, cria-se um novo espaço na memória para ele. Eles são mutáveis, por tanto podemos considerar que é uma forma de criar um apelido ( alias ) para o original, ou seja, você pode ser chamado pelo seu nome ou por seu apelido, mas você é uma pessoa única, não é possível criar um clone seu. Veja este exemplo:

let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol

// Isso significa que objetos e arrays com conteúdo iguais são considerados diferentes no JavaScript. Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual, que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes:

test('array and object equality', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});

// --

// Valores Booleanos

// null, undefined e false são valores falsy. Isso significa que são tratados como false sempre que se espera um valor booleano, como em condicionais. Às vezes, porém, é preciso distinguir entre eles. Jest fornece matchers específicos para cada um. Leia mais sobre eles na documentação do Jest.

// --

// Numeros

// Há matchers para as principais formas de comparar números. Leia aqui sobre esses matchers

// --

// Strings

// Para comparar string com expressões regulares, utilize o matcher toMatch.

// --

// Arrays

// Você pode verificar se um array contém um item em particular utilizando toContain. Para verificar que um item possui uma estrutura mais complexa, utilize toContainEqual. toHaveLength permite facilmente verificar o tamanho de um array ou de uma string.

// --

// Objetos

// É bastante comum testar se um objeto possui uma propriedade específica. O matcher toHaveProperty é ideal para esses casos.

// --

// Exceções

// toThrow testa se uma função lança um erro quando é executada. Para testar se uma função está retornando um erro, é importante estar atento à sintaxe do .toThrow:

const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
});

// Note que para testar se um erro é lançado, passamos para o expect uma função. Chamamos multiplyByTwo dentro da arrow function. Chamar a função diretamente dentro de expect fará com que o erro não seja capturado. Assim, a asserção falhará, porque o erro acontecerá antes mesmo de expect ser executado e ter a chance de capturar o erro. Para testar a mensagem de erro, como fizemos no terceiro teste do exemplo acima, usamos o matcher toThrowError e passamos dentro do parênteses a mensagem que será mostrada em caso de erro: new Error("number é indefinido"). Observe que nos dois casos a função que queremos testar é chamada indiretamente por uma arrow function. Seguir essa sintaxe é importante para que o seu teste funcione corretamente.

// --

// not

// not permite testar o oposto de algo. Por exemplo, este código testa que domingo é um dia da semana, mas não um dia útil:

const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});

// -----

// O bloco describe

// A função describe cria um bloco para agrupar vários testes. Isso é útil para melhorar a organização dos seus testes. Você pode utilizar describe, por exemplo, para separar testes de funções diferentes em um mesmo arquivo, ou para agrupar testes relacionados dentro de uma função complexa que requer muitos testes. É possível aninhar blocos describe arbitrariamente. Dentro de cada bloco, qualquer declaração de variáveis ou funções é local a este bloco. Leia os exemplos na documentação do Jest para fixar.
