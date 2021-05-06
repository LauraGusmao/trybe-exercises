// NodeJS ASSERT

// O módulo Assert é uma ferramenta de aferição que permite testar expressões. Esse módulo já vem instalado com o NodeJS. Podemos entender o assert como sendo uma expressão booleana que será sempre true, ao menos que haja uma falha. Por esse motivo, o assert não dará feedback se o teste não falhar.
// Se a expressão assert é avaliada com o valor 0 ou false, o teste falhará e o programa será terminado. O assert possui vários métodos para testar se o seu código funciona como o esperado. Veremos nos exemplos a seguir alguns desses métodos. Esta é a forma mais simples de se escrever testes.

// Acompanhe um exemplo do uso do módulo assert abaixo:
const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.strictEqual(50, 70); // AssertionError: 50 == 70

// --------

// Neste outro exemplo utilizamos o assert para testar o retorno esperado da função division:
const assert = require('assert');

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');

// --------

/**
 * Os dois códigos acima utilizam o método assert.strictEqual. Esse método compara o primeiro e o segundo parâmetro utilizando o operador ===. Se os valores ou os tipos forem diferentes, o teste falhará e será mostrado um erro com a mensagem que está no terceiro parâmetro, se houver (o terceiro parâmetro é opcional).
 * A vantagem de se usar o método assert.strictEqual() neste contexto é deixar mais clara a intenção do teste. Entretanto, é importante reforçar que o assert.equal faz uma comparação de valor com o operador ==. Portanto, se você colocar o número 3 dentro de aspas o teste assert.equal(expected, '3', 'Nove dividido por três é igual a três') irá passar pois o método .equal não checa o tipo de valor que estamos comparando - nesse caso, '3' é uma string.
 * Assim sendo, prefira métodos que comparam se dois valores são estritamente iguais, isto é, valor e tipo. Como você verá nos próximos exemplos, o .strictEqual e o .deepStrictEqual comparam os parâmetros fornecidos utilizando o operador ===.
*/

/** Alguns outros métodos do módulo assert que nos permite escrever testes são:
 * assert.strictEqual()
 * assert.deepStrictEqual()
 * assert.notStrictEqual()
 * assert.ok()
 * assert.fail()
*/

// --------

// Podemos combinar vários métodos do assert quando escrevemos nossos testes. Isso pode ser muito útil para ampliar a cobertura do teste em casos de falhas!
const assert = require('assert');

function add(a, b) {
  return a + b;
}

const expected = add(1, 2);

assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)

// Lembre-se que a mensagem do erro aparece apenas quando o teste falha.

// -------

// É possível também testar estruturas como arrays e objetos:
const assert = require('assert');

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');

// Para que o teste falhe, experimente passar como segundo parâmetro para o último teste o objeto person2. Você verá que o teste irá falhar, pois ele espera que os valores dos objetos passados como argumento sejam diferentes.

// -------
//  TESTES UNITÁRIOS E A MELHORIA NO CÓDIGO

// Um papel dos testes unitários é nos ajudar a implementar funções mais robustas. Veja, por exemplo, a função que realiza a divisão utilizada no modelo anterior:

function division(x, y) {
  return x / y;
}

// O que acontece se criarmos o teste abaixo?

const assert = require('assert');

// declaração da função division, definida anteriormente...


assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 0), 0); // 💣

/*
O primeiro assert.strictEqual funciona e não apresenta erro, mas o segundo deixa evidente uma fragilidade na implementação da função division, pois não poderia ser possível realizar a divisão por 0. Nesse caso, devemos melhorar a implementação da função division, a fim de não termos mais esse estado inconsistente.
Podemos fazer isso usando a palavra chave throw, que no javascript serve para lançar um erro. Usaremos ele, então, para lançar um erro caso o divisor y seja igual a zero.
*/

const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK

const assert = require('assert');

// Atualizamos o teste para refletir a mudança de implementação para essa situação, verificando não só se o erro é lançado, mas também se é o erro esperado. Ou seja, os testes unitários também nos ajudam a identificar casos especiais que podem levar nossas funções a estados inválidos.

// --------

// SOBRE O THROW

// Ao executar os códigos escritos por você, não há dúvidas de que você já se deparou com mensagens de erro quando algo não estava fazendo o que deveria. Seja um erro de sintaxe ou uma variável indefinida em algum lugar, lidar com erros é uma tarefa comum na vida de qualquer pessoa desenvolvedora.
// Mas nem sempre os erros precisam ser gerados originariamente pela linguagem, como você já se habituou a ver. Quem está escrevendo o código também pode criar erros , bem como determinar que eles sejam lançados se o código se comportar de uma maneira inesperada!
// O ato de criar erros novos, também chamado de lançar exceções , é algo importantíssimo para casos em que o código em si executa normalmente pelos padrões da linguagem, mas a pessoa que o escreveu não quer que ele execute nessa hipótese específica.

// Dito isso, vamos rever o exemplo acima de um erro lançado usando throw :
function division(x, y) {
  // Queremos que o código retorne um erro com uma mensagem específica
  // caso o parâmetro y seja 0. Por isso lançamos uma exceção se essa condição
  // for verdadeira, o que irá interromper a execução da função.

  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

/**
 * Nesse caso, com o erro sendo lançado dentro de uma função, a sua execução irá parar naquele exato momento e, caso não exista um bloco de captura do erro que indique o que fazer quando ele ocorre (você irá aprender mais sobre isso ao estudar JS Assíncrono e Promises), o programa como um todo terá a sua execução interrompida.
 * Você não precisa se preocupar muito com essa parte de gerenciamento de erros por enquanto, pois se trata de uma ferramenta mais avançada do que você precisaria saber nesse momento. O que você precisa saber é que o throw serve justamente a esse fim: lançar exceções criadas pela pessoa desenvolvedora e retornar erros que não existiriam originalmente no código sem ele.
 */
