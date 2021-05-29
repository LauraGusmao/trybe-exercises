// REACT

// Conceitos iniciais

/*
 * Como dito anteriormente, o React é, atualmente, uma das principais bibliotecas Javascript para construção de interfaces de usuário. Esta poderosa ferramenta foi criada pelos times de desenvolvimento do Facebook com objetivo de organizar, componentizar e, consequentemente, tornar muito mais eficiente cada parte das aplicações que a utilizam.
 * A ideia principal é tornar possível dividir a sua aplicação em pequenos blocos, reutilizáveis ou não, que podem fazer a gestão das suas próprias informações através do seu estado, ou seja, reagir a eventos, interações, dados, etc. Toda vez que houver uma mudança em um componente, o React atua especificamente na renderização dele, sem que seja necessário atualizar os outros blocos.
 * A componentização permite ainda utilizar funções específicas, estilizações, testes e outras tecnologias no exato local em que ela será utilizada, permitindo que qualquer possível refatoração do código se torne simples, bem endereçada e fácil de se encontrar.
 * O exemplo mais prático de uma aplicação React é a própria documentação dela. Além de ser possivel visualizar as principais componentizações, como header, menu lateral, conteúdo principal, barra lateral, submenus e footer, conseguimos acessar menus diferentes sem que a página recarregue. Super eficiente, certo? Existem diversas outras ferramentas, como o próprio Facebook e o Slido, que funcionam da mesma forma dinâmica.
 */

// -----

// JSX

// O JSX , ou Javascript Extension , como o próprio nome sugere, é uma extensão de sintaxe para Javascript. Sua utilização é recomendada pela documentação do React, pois ela demonstra como a interface deverá se comportar, de forma lógica e descritiva.

const element = <h1>Hello, world!</h1>;

// A construção de um elemento JSX é bem parecida com um elemento HTML, com pequenas diferenças para que não haja conflito do HTML com o JS. Um exemplo disso é a declaração de uma class no HTML, que é substituída por className no JSX, pois haveria conflito de sintaxe com as classes do JS.

// Caso fossemos declarar a mesma variável sem o JSX, precisaríamos utilizar funções como o createElement que recebe como parâmetro um componente, um objeto com as props (veremos mais sobre elas nos próximos dias) e o conteúdo que será encapsulado por este componente. Seriam necessárias sequências relativamente longas de instruções de código para conseguirmos montar e manipular uma árvore de componentes. Para visualizarmos essa complexidade, vamos refazer o código acima sem o JSX:

const element = React.createElement("h1", null, "Hello, world")

// Agora imagine uma aplicação inteira sendo construída dessa forma. Ficaria muito mais difícil de ser compreendida, certo? O JSX encaixa-se perfeitamente para resolver este dilema.

// É importante frisar que o uso do JSX em aplicações React não é obrigatório, mas a complexidade da construção de uma aplicação fica menor e o código fica mais intuitivo quando o utilizamos.

// Por ser um código Javascript, o JSX permite que se faça injeções de algoritmos dentro da estrutura HTML. Portanto, é possivel que se aplique diretamente na estrutura códigos que renderizarão outras diversas expressões, por exemplo:

const nome = 'Jorge Maravilha';
const element = <h1>Hello, {nome}</h1>;

// E se aprofundarmos um pouco mais chamando uma função na nossa constante element?

function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

// Lembra que falamos sobre a substituição de class por className em JSX? Podemos também utilizar expressões Javascript para atribuir valor à este atributo.

const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;

// -----

// ReactDOM.render

// O ReactDOM.render é o responsável por renderizar e atualizar seu código dentro do HTML, exibindo seus elementos React.

// Todas as vezes que fizermos alguma alteração no código, seja através de uma função ou interação de quem usa, o React DOM compara o elemento novo e seus elementos filhos com os anteriores e aplica mudanças somente onde é necessário para levar a aplicação ao estado desejado. Vamos ver um exemplo:

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

// Neste exemplo, estamos chamando a função tick que chama o ReactDOM.render a cada segundo, e injeta no elemento pai com id root um 'Hello World' e o horário.

// Diferente de elementos DOM do navegador, elementos React são objetos simples e utilizam menos recursos. Pela atualização precisa do DOM, e pela sua composição, o React apresenta grandes avanços na velocidade de processamento

// -----

// CSS e Import

// Você deve estar se perguntando: mas e como fica o CSS nesse contexto?

// Não é nada muito diferente do que você já vem fazendo. Assim como fazia no HTML você deve criar um arquivo para manter todo o seu CSS e então deverá importá-lo onde você deseja utiliza-lo e colocar as classes e ids que você criou nos elementos da sua página. Para facilitar o entendimento veja o exemplo abaixo:

// App.css
/*
  .App {
    background-color: #282c34;
    text-align: center;
  }
*/

// App.js
/*
  import React from 'react';
  import './App.css';

  function App() {
    return (
      <div className='App'>
        <h1>APP</h1>
      </div>
    );
  }

  export default App;
*/

// Se quiser ver um exemplo maior da importação e utilização do CSS retorne ao app testando-meu-computador que você criou, ao observar a estrutura você verá que não é nada muito diferente do que você já estava fazendo.

// -----

// Criação de componentes funcionais e de classe

// Como dito acima, o React nos permite criar uma tela como uma junção de diferentes pequenas peças reutilizáveis e com lógica isolada - os componentes.

// Esses componentes podem ser criados de duas formas: mediante funções ou com a criação de classes - uma das inovações trazidas pelo ES2015 (ES6). As classes surgiram como um "açúcar sintático" sobre funções, dando a possibilidade de criar novos objetos.

// -----

// Métodos

// Até o presente momento, você deve estar achando que uma classe e uma função são exatamente a mesma coisa, afinal, ambas recebem atributos e nós as chamamos em seguida. Porém, uma classe pode possuir métodos, que nada mais são do que ações que toda entidade criada a partir de uma classe pode realizar.

// Podemos atribuir vários métodos - os quais podem, inclusive, alterar o próprio estado do objeto. Por enquanto, só precisamos saber que métodos existem e não precisamos nos preocupar, pois veremos com detalhes os métodos de classe mais adiante em React, junto com estado da aplicação.

// Em React, classe é uma das formas de renderizar os componentes na página. Então quando um componente precisa ser alterado, utilizamos componentes de classe, para que possamos utilizar seus estados para realizar essas alterações. Mas não se preocupe, você verá isso em breve com muito mais detalhamento.

// Classes e React

// Talvez você já tenha percebido, mas a principal diferença entre o uso de componentes por classe e o uso de componentes por função reside no fato daqueles gerados por classe terem acesso a métodos e ao estado próprios de qualquer componente React gerado via classe, como o método render(), que te permite renderizar todo o conteúdo criado na tela, os quais são acessíveis somente por componentes criados por classe na maior parte das versões do React. A sintaxe para criar um componente com classes é a seguinte:

import React from 'react';

class ReactClass extends React.Component {
  render() {
    return (
      <h1>My first React Class Component!</h1>
    )
  }
}
