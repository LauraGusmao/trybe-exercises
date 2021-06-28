//COMPONENTES REACT

// Uma aplicação desenvolvida em React é composta de componentes. Ou seja, eles são as peças de lego que serão combinadas de forma a construir toda a aplicação! Logo, saber usar componentes é saber montar do zero uma aplicação React. A checagem de tipos é outra parte disso: ela economiza muito tempo de desenvolvimento, protegendo quem desenvolve de cometer erros facilmente evitáveis na utilização dos componentes.

// -----

// Como já sabemos, componentes são a base de toda aplicação React. Eles nos permitem segmentar uma página web em blocos de códigos independentes e reutilizáveis, além de tornarem o ambiente de desenvolvimento um local mais organizado. Conceitualmente, componentes React são funções ou classes JavaScript que podem aceitar parâmetros, chamados de props (do inglês properties), e retornam elementos React responsáveis por determinarem o que será renderizado na tela.

// Existem duas maneiras de definirmos um componente:

// 1. Via funcao JS:

function Greeting(props) {
  return (<h1>Hello, {props.name}</h1>);
}

export default Greeting;

// 2. Via classe:

import React from 'react';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name}</h1>);
  }
}

export default Greeting;

// Apesar de ambos os métodos serem equivalentes, tanto a função quanto a classe possuem recursos adicionais, os quais nos aprofundaremos em um futuro próximo. Nesse momento, acabamos de aprender conceitos básicos de um componente. Vamos analizar o exemplo abaixo:

import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Greeting;

// Temos:

// 1. A declaração de um componente chamado Greeting.

// 2. O componente Greeting herda da classe Component da biblioteca react.

// 3. O componente Greeting descreve o que vai ser mostrado para quem usar a aplicação, declarado no método obrigatório render. Nesse caso, Greeting retorna: <h1>Hello, {this.props.name}</h1>.

// 4. O componente Greeting possui como propriedade um objeto chamado props, que contém todos os dados passados como parâmetro na hora de chamar um componente. Ou seja, chamar <Greeting name="Samuel" /> faz com que o componente tenha uma prop igual a { name: "Samuel" }.

// 5. Exportamos o componente Greeting de forma que ele possa ser reutilizado na aplicação.

// -----

// Props

// As props são umas das partes mais importantes de um componente. São por elas que você passa os valores para o componente, e é como o torna reutilizável em diferentes contextos. Elas são como os parâmetros de uma função. Observe o exemplo abaixo de como seria uma função que retornaria a mesma mensagem que o componente Greeting renderiza:

function greeting(name){
  return `Hello, ${name}`;
}
console.log(greeting('Samuel'));

// Lembrando que, assim como podemos ter vários parâmetros em uma função, conseguimos também passar inúmeras propriedades para o componente por meio das props. Adicionemos o sobrenome da pessoa à função e ao componente.

function greeting(name, lastName){
  return `Hello, ${name} ${lastName}`;
}
console.log(greeting('Samuel', 'Silva'));

// Ao componente Greeting:

import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting;

// Agora o chamamos dentro do componente App:

import Greeting from './Greeting';

function App() {
  return (
    <main>
      <Greeting name="Samuel" lastName="Silva" />
    </main>
  );
}

export default App;

// Observe como a chamada do componente lembra a chamada de uma função com passagem de parâmetros! Seu retorno, nesse caso, será <h1>Hello, Samuel Silva</h1>.

// Você pode estar pensando: entendi que o uso de props é importante e como passá-las para um componente, mas como funciona exatamente o trâmite das props? Para compreender isso melhor, vamos analisar com mais cuidado a linha 6 do código anterior. Ao atribuir as props name e lastName ao componente Greeting, o React automaticamente monta um objeto contendo as informações passadas e as disponibiliza para o componente montado numa variável chamada props, num formato parecido com esse:

const props = { name: 'Samuel', lastName: 'Silva' }

// Esse objeto props, por sua vez, é passado para o componente Greeting, o qual poderá resgatar tanto o nome como o sobrenome através do this.props.name e this.props.lastName.

// -----

// Composição de componentes

// Confome dito anteriormente, componentes são utilizados para construir uma aplicação React. Mas como essa construção é feita? Em React, faz-se uso de composição de componentes.

// Mas antes de nos aprofundarmos no assunto, vamos dar um passo para trás e refletir: de forma geral, o que é composição? São elementos ordenados de forma a constituir algo maior e mais complexo. São, por exemplo, as músicas em um álbum musical, as frutas em uma salada de frutas ou até mesmo os inputs , as labels e os buttons em um form. Como você já deve ter percebido, composições já fazem parte do nosso cotidiano e, com o uso do React, isso se tornará ainda mais comum.

// Componentes React podem conter um ou mais componentes! Essa é uma funcionalidade muito importante do React, pois permite a reutilização e a redução do nível de complexidade de códigos.

// Vamos refatorar o código abaixo para poder entender, na prática, sobre composição de componentes e seus benefícios. O código a seguir renderiza informações básicas sobre dois albuns do Coldplay.

// src/App.js
import React from 'react';

class App extends React.Component {
  render() {
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    // Retorno do que será renderizado
    return (
      <article>
        <section>
          <img src={ album01.image } alt={ album01.title } />
          <h2>{ album01.title }</h2>
          <p>Lançamento: { album01.releaseDate.year }</p>
          <p>Gravadora: { album01.others.recordCompany }</p>
          <p>Formatos: { album01.others.formats }</p>
        </section>
        <section>
          <img src={ album02.image } alt={ album02.title } />
          <h2>{ album02.title }</h2>
          <p>Lançamento: { album02.releaseDate.year }</p>
          <p>Gravadora: { album02.others.recordCompany }</p>
          <p>Formatos: { album02.others.formats }</p>
        </section>
      </article>
    );
  }
}

export default App;

// Como você deve ter notado, o código, apesar de conter pouca lógica, está extenso. Ambas as sections, apesar de possuirem estruturas semelhantes, renderizam informações diferentes. Imagine o tamanho do código se tivéssemos cinco albuns. Ou dez? Percebe-se que, nesse contexto, a section é uma excelente candidata a ser transformada em um componente reutilizável, dando início à nossa refatoração. Para isso, vamos criar um novo arquivo, chamado Album.js, para armazenar o código das sections e adaptá-lo para fazer a leitura das props que iremos passar futuramente:

// /src/components/Album.js
import React from 'react';

class Album extends React.Component {
  render() {
    return (
      <section>
        <img src={ this.props.album.image } alt={ this.props.album.title } />
        <h2>{ this.props.album.title }</h2>
        <p>{ this.props.album.releaseDate.year }</p>
        <p>
          Lançamento:
          { `${ this.props.album.releaseDate.day }/${ this.props.album.releaseDate.month }/${ this.props.album.releaseDate.year }` }
        </p>
        <p>Gravadora: { this.props.album.others.recordCompany }</p>
        <p>Formatos: { this.props.album.others.formats }</p>
      </section>
    );
  }
}

export default Album;

// Em seguida, vamos refatorar o App.js. Para substituirmos as sections pelo novo componente criado, temos que:
// 1-Importá-lo no arquivo App.js:

  // src/App.js
  import React from 'react';
  import Album from './components/Album'

// 2-Passar as props apropriadas:

  // src/App.js
  class App extends React.Component {
    // ...
    render() {
      return (
        <div>
          <Album album={ album01 } />
          <Album album={ album02 } />
        </div>
      );
    }
  }
  // ...

// Desse modo, o componente App.js ficará assim:

// src/App.js
import React from 'react';
import Album from './components/Album'

class App extends React.Component {
  render() {
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    return (
      <div>
        <Album album={ album01 } />
        <Album album={ album02 } />
      </div>
    );
  }
}

export default App;

// Veja como o código ficou mais limpo e melhor de ler. Aqui, o nosso componente App contém dois componentes Album. Isso é composição de componentes! Cada um desses componentes recebe um objeto diferente através da prop album. Importante notar que os dois componentes irmãos <Album />, são, na realidade, o mesmo componente, porém reutilizados** com base nas props recebidas. Ou seja, apesar de serem o mesmo componente, renderizam informações diferentes, uma vez que recebem props diferentes.

// À primeira vista, componentizar a aplicação em uma combinação de componentes React pode parecer um processo pesado e complexo. No entanto, conforme a aplicação cresce, ter à disposição uma gama de componentes reutilizáveis e de baixo nível de complexidade individual facilitará muito o trabalho!

// Caso você seja uma pessoa bem perceptiva, deve ter reparado que todos os nomes de componentes React são iniciados com letra maíuscula. É uma simples, porém importante, regra de sintaxe do React.

// Essa norma de sintaxe se dá devido ao modo como o React diferencia tags do DOM dos componentes React: quando iniciados com letra minúscula, como <div /> e <input />, serão tratadas como tags do DOM. Por sua vez, quando iniciados com letra maiúscula, como <Greeting />, serão entendidos como componentes React.

// -----

// Lista de componentes e chaves

// Agora que você já sabe o que é componente e como compô-lo, suponha que você precise implementar um componente que renderiza uma lista de compras. Entretanto, você não sabe de antemão os elementos dessa lista. Como você renderizaria dinamicamente essa lista de compras?

const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];

// O primeiro passo é criar uma coleções de elementos. Para isso, iteramos sobre shoppingList com uma HOF que retorne, em um novo array, cada item da lista envolvido por um elemento <li>. A seguir, atribuímos o array resultante para a variável items.

const items = shoppingList.map((item) => {
  return (<li>{ item }</li>);
});

// Agora, só nos resta renderizar a lista que acabamos de criar! Para isso, dentro do escopo do return, devemos fazer o uso das chaves { } e utilizar, dentro dela, a constante de elementos criada anteriormente. É por meio das chaves que o React irá diferenciar o que é código a ser executado e o que deve ser apenas impresso para leitura:

import React from 'react';

class App extends React.Component {

  render() {

    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item) => {
      console.log("item: ", item);
      return (<li>{ item }</li>);
    });

    return (
      <div>
        <h2>Lista de compras</h2>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}

export default App;

// Pronto! Agora já podemos a renderizar múltiplos componentes de forma dinâmica, sem quaisquer problemas, certo? Quase! Ao executar o código acima, receberemos, pelo console, um alerta de que uma key deve ser definida para cada item renderizado. Essas keys são importantes para o React indentificar, com precisão, quais itens foram adicionados, removidos ou alterados.

// Então, como atribuímos e quais devem ser os valores dessas keys? O melhor valor para uma key é um que seja único para cada item da lista, como, por exemplo, um ID. No entanto, nem sempre dispomos de um ID estável em mãos, tal qual o caso do nosso código acima. Para solucionarmos esse problema, utilizamos o índice gerado no segundo parâmetro da nossa HOF. E, para atribuirmos a key, adicionamos na <li> um atributo key com o valor escolhido:

const items = shoppingList.map((item, index) => (<li key={ index }>{ item }</li>));

// Vale ressaltar que, não é recomendado o uso de índices como keys em listas que possibilitam a alteração na ordem dos itens, pois pode impactar negativamente o desempenho da aplicação ou gerar problemas relacionados ao estado do componente.

// -----

// PropTypes, checagem de tipos

// Agora você vai estudar outro importante fundamento do React: a checagem de tipos! Imagine que você criou um componente reutilizável e que ele, para funcionar corretamente, precisa receber determinadas props de tipos específicos, caso contrário a aplicação quebrará. A checagem de tipos ajuda a previnir cenários como esse, pois verifica os tipos das props passadas para um componente durante o desenvolvimento e levanta um warning se algo não estiver como planejado. Como deve ter notado, essa verificação previne inúmeros erros, economizando muito tempo de desenvolvimento!

// A melhor forma para compreender o uso dessa ferramenta é visualizar um exemplo prático e destrinchá-lo:

import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};

export default Greeting;

// 1- O primeiro passo para utilizar o prop-types é importá-lo no componente:
import PropTypes from 'prop-types';

// 2- Em seguida, para executarmos a checagem de tipos no componente Greeting, adicionamos a seguinte estrutura antes do export default:
Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};
// É dentro dessa estrutura que ocorre a checagem das props. Basta pegarmos o nome da prop que queremos tipar, e usar a sintaxe de identificação apropriada para o caso.

// E caso o nosso componente seja renderizado sem nenhum valor numa prop, ainda será disparado o aviso? Em casos como esse, no qual as props são essenciais para o bom funcionamento do componente, é importante acrescentar o .isRequired - inglês para "é obrigatório" - após a definição do tipo da prop:

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

// Desse modo, sempre que o componente for renderizado sem uma das props ou com alguma do tipo errado, um aviso será disparado.

// Abaixo segue alguns dos principais validadores oferecidos pela PropTypes.

MeuComponente.propTypes = {
  // Todos os validadores aqui são, por padrão, validadores opcionais.
  // Para torná-los obrigatórios basta adicionar .isRequired
  numeroObrigatório: PropTypes.number.isRequired,

  // Tipos básico do JS.
  stringOpcional: PropTypes.string,
  numeroOpcional: PropTypes.number,
  booleanoOpcional: PropTypes.bool,
  funcaoOpcional: PropTypes.func,
  objetoOpcional: PropTypes.object,
  arrayOpcional: PropTypes.array,

  // Um array de determinado tipo básico
  arrayDe: PropTypes.arrayOf(PropTypes.number),

  // Um objeto de determinado tipo básico
  objetoDe: PropTypes.objectOf(PropTypes.number),

  // Um objeto com forma específica
  objetoComForma: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),

  // Um objeto que não permite props extras
  objetoComFormatoRigoroso: PropTypes.exact({
    name: PropTypes.string,
    quantity: PropTypes.number,
    avaibility: PropTypes.bool,
  }),
};