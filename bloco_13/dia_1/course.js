// CICLO DE VIDA DE COMPONENTES

// Existem funções específicas que são executadas ao final de cada fase do ciclo de vida de um componente: componentDidMount, componentDidUpdate e componentWillUnmount. Além dessas, existem também outras funções consideradas menos comuns, como é caso de shouldComponentUpdate, que pode ser chamada na fase de atualização.

// Os componentes React , assim como os seres vivos, possuem um ciclo de vida. No caso do React, o ciclo é dividido em 4 etapas. São elas:
// - Inicialização: quando o componente recebe as props e os estados;
// - Montagem: quando o componente é inserido no DOM;
// - Atualização: quando os props ou estados do componente são alterados;
// - Desmontagem: quando o componente morre 🧟‍♂️, sumindo do DOM.

// Essa é a big picture, mas dentro dessas 4 etapas existem vários métodos que podemos interceptar para, assim, agir em determinado momento do ciclo de vida dos componentes.

// O ciclo de vida é acessível por meio de métodos nativos dos class components. Como exemplo, pense no render, que é um método de renderização dos class components e que é chamado toda vez que uma atualização acontece. Ele possui características intrínsecas que permitem adicionar o componente no DOM. Assim como o render, outros métodos possuem suas próprias características e objetivos.

/**
  O ciclo de vida e os principais métodos funcionam da seguinte maneira:

  - Inicialização:
    .constructor - recebe as props e define o estado;
  
  - Montagem:
    .render - renderiza o componente, inserindo-o no DOM;
    .componentDidMount - dispara uma ou mais ações após o componente ser inserido no DOM (ideal para requisições);

  - Atualização:
    .shouldComponentUpdate - possibilita autorizar ou não o componente a atualizar;
    .componentDidUpdate - dispara uma ou mais ações após o componente ser atualizado;

  - Desmontagem:
    .componentWillUnmount - dispara uma ou mais ações antes de o componente ser desmontado.
 */

// -----

// Exemplo API

// Vamos fazer uma requisição para uma API de piadas, e para isto nossa função de fetch está sendo chamada dentro do método componentDidMount. Este vai ser o primeiro passo para o nosso código ter o mesmo comportamento do vídeo de introdução deste bloco.

class DadJoke extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState({
      jokeObj: requestObject,
    })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //Salvando a piada no array de piadas existentes

  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

      <span>RENDERIZAÇÃO CONDICIONAL</span>

      </div>
    );
  }
}