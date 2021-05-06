// TDD: TEST DRIVEN DEVELOPMENT

// O TDD: Test Driven Development, em tradução livre, o desenvolvimento orientado a testes, é uma técnica de desenvolvimento que, em certos cenários, favorece a produtividade e a escrita de códigos confiáveis. Essa técnica é interessante porque ela ajuda a criar uma mente programadora orientada a testes, ainda que nem sempre escrever testes antes de escrever funcionalidades seja a prática mais adequada.
// O TDD é muito importante como exercício e para determinados tipos de projetos, mas está longe de ser um consenso na comunidade programadora como prática fundamental para 100% dos casos. É importante que essa visão crítica fique bem clara.
// Tendo isso em mente hoje você vai aprender e praticar o TDD, mas o conhecimento a ser absorvido é "como testar bem uma aplicação, de forma eficaz e produtiva" e "como ter um mindset orientado a testes", e não especificamente como a metodologia funciona.
// Com muita prática e experiência, você irá desenvolver a intuição necessária para avaliar se o TDD é a melhor abordagem para testar a sua aplicação. Um exemplo interessante que o TDD pode ser bastante útil é no teste de funções puras.
// O desenvolvimento orientado a testes é um processo cíclico que pode ser descrito em três etapas, como ilustrado abaixo. O princípio básico do TDD é fazer testes pequenos.

// Destrinchando cada etapa, o TDD consiste em:
// Escrever um teste que cubra a função que você pretende implementar antes mesmo de executá-la. Este teste irá falhar - afinal, a sua função ainda não foi declarada. Você pode começar do teste mais elementar possível para esse cenário, como verificar se a função que você irá criar existe:

const assert = require('assert');
assert.strictEqual(typeof myFunction, 'function');

// Implementar apenas o necessário para que o teste passe. No caso do exemplo anterior, você só precisaria declarar a função para passar o teste.
// Refatorar o código para que ele esteja bem escrito e fácil de se entender. O pulo do gato nessa etapa é que você tem um teste já implementado que irá falhar caso você quebre algo ao refatorar o seu código.
// Repetir! Afinal de contas, o desenvolvimento orientado a testes é um ciclo. Volte a etapa 1 e repita esse processo até que todas as funcionalidades da sua função sejam implementadas.
// Além de ser útil para testar funções puras, outro exemplo prático em que o desenvolvimento orientado a testes pode ser útil é consertar bugs. Os testes ajudam a quebrar problemas complexos em partes menores que podem ser analisadas mais facilmente. Assim, você poderá focar em uma regra de negócio específica sem medo de quebrar alguma outra funcionalidade.