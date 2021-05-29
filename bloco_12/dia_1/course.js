// COMPONENTES COM ESTADOS E EVENTOS

// Estados

// O Estado de um componente é um lugar especial que todo componente tem para armazenar informações que devem persistir enquanto a tela não for fechada ou atualizada. É o filtro selecionado, o item da lista destacado, o carrinho de compras, tudo isso e mais!

// Essa é, talvez, a peça mais essencial para o funcionamento do React. Enquanto numa aplicação JavaScript sem uso de bibliotecas tais informações ficariam, muito provavelmente, espalhadas e desorganizadas, no React cada componente cuida das suas informações e o React garante que todas estejam atualizadas de maneira otimizada. Mas, antes de nos aprofundarmos em como usamos o Estado de um componente, vamos dar um passo atrás e falar de Eventos!

// Eventos

// Eventos são como os eventListeners estudados anteriormentes: você os associa aos elementos que exibirá na tela e eles nortearão como cada componente reage a uma ação de quem usa.

// -----

// Para acessar uma função que criamos dentro de uma classe num eventListener precisamos explicitar a origem de nossa função com a sintaxe this.minhaFuncao.

// Constructor

// Toda classe em JavaScript tem acesso a um método chamado constructor(), e com as classes de React, definidas com class MinhaClasse extends React.Component, não é diferente! Quando um componente React é criado, ou seja, quando é colocado na tela do navegador, a primeira coisa que é executada é a função constructor(). Toda a lógica interna que o React adiciona aos seus componentes começa a ser inclusa neles nesse momento.

// A grande questão, no entanto, é que é possível adicionar aos construtores das classes React comportamentos e lógica extras!

// ex:
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()

    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
  }

  render() {
    return <span>Meu componente!</span>
  }
}

export default App;

// This

// O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente. Um código de Hello, World! em React, ilustrado abaixo, gera a impressão no console a seguir:

import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    console.log(this)
    return <span>Hello, world!</span>
  }
}

export default App;

// this:
/**
  App {
    context: {}
    props: {}
    refs: {}
    state: null
    updater: { isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ }
    _reactInternalFiber: FiberNode { tag: 1, key: null, stateNode: App, elementType: ƒ, type: ƒ, …}
    _reactInternalInstance: {_processChildContext: ƒ}
    isMounted: (...)
    replaceState: (...)
    __proto__: Component
      constructor: class App
      isMounted: (...)
      render: ƒ render()
      replaceState: (...)
      __proto__: {...}
    // ... Continua
  }
*/

// Como se pode ver, o this, dentro das classes de componentes React, é um objeto enorme que contém, basicamente, tudo que concerne aquele componente dentro da aplicação. Quando fazemos this.props, estamos acessando a chave props dentro do objeto this, que irá conter as propriedades ( props vem de propriedades !) passadas àquele componente. Com ele, por exemplo, conseguimos acessar as props e outras coisas, como o estado do componente, dentro das funções render e constructor, para dar dois exemplos.

// Mas qual é, então, o grande problema do this ? Quando definimos funções nossas numa classe de componente React , ele não funciona tão bem! Veja só:

import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    // Essa chamada (console.log) ao `this` retorna `undefined`? !
    console.log(this)
    console.log('Clicou')
  }

  render() {
    // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
    console.log(this)
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;

// Esse comportamento acontece, em resumo, em função de dificuldades que o JavaScript tem com a implementação de uma lógica de classes, lógica para qual a linguagem não foi feita! A solução é, no constructor, fazermos para cada uma de nossas funções um vínculo "manual" da nossa função com o this. Para isso, utilizamos o bind.

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;

// -----

// Unindo componentes com estados e eventos

// Agora que aprendemos sobre this e sobre como lidar com eventos dentro das classes React, vamos finalmente acessar o estado! Veja o exemplo abaixo para conhecer a sintaxe:

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    this.setState({
      numeroDeCliques: 1
    })
  }

  render() {
    /*Para LER o estado, você pode usar `this.state.chaveDoMeuEstado`*/
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;

// E muita atenção ao que foi dito acima! Você NUNCA deve atribuir valores ao estado diretamente com this.state. O estado é atualizado de forma assíncrona pelo React, para garantir performance, e o React não garante a ordem em que as atualizações ocorrerão. Se você fizer uma atribuição direta, terá problemas! Faça-o sempre através da função this.setState(meuNovoObjetoQueRepresentaOEstado).

// Mas se a a atualização do estado não ocorre em ordem, vocês perguntam, "como eu atualizo meu estado com base no estado anterior? Se tudo ocorre fora de ordem, como eu sei que uma conta de novoEstado = estadoAtual + 1 não dará problemas?"

// Pois bem! Lembre-se de que, com Promises, para garantir que algum código executasse somente após o retorno da Promise, que é assíncrona, você tinha que colocá-lo dentro da função .then. Aqui a lógica é da mesma natureza:

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;

// Se você quisesse chamar, no elemento, um evento passando um parâmetro, você deveria trocar a sintaxe <button onClick{this.minhaFuncao} ...> por <button onClick={() => this.minhaFuncao('meu parametro')} . Basicamente, substitua a função do evento por uma chamada à mesma feita via callback!

// -----

// State vs Props

// Você pode entender a diferença props vs state da seguinte forma:
// . props são uma forma de passar dados de pai para filho.
// . state é reservado para dados que seu componente controla.

// O conceito é: state, ou estado do componente, deve servir para guardar valores do Componente que mudam com o uso do mesmo. As props são valores fixos que um componente recebe e não altera.

// Pelos princípios do React você nunca deve tentar alterar o que um componente recebe como props como no exemplo abaixo:

this.props.name = 'novo nome';
