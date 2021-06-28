// INTRODUÇÃO AO REDUX - O ESTADO GLOBAL DA APLICAÇÃO

// Redux é uma bibloteca utilizada para ajudar no gerenciamento de estado. Ela possui uma ampla adoção na comunidade React , além de contar com implementações que superam as fronteiras do JavaScript , como arquiteturas para desenvolvimento Android e iOS que se baseiam na estrutura de gerenciamento de estado que o Redux traz.

// -----

// É importante dizer que o Redux vem para resolver problemas de fluxo de informação dentro da sua aplicação, assim como o gerenciamento de seus dados. Você verá que ele ajuda na comunicação entre componentes.

// Assim como na vida cotidiana ou no trabalho existem vários fluxos e rotinas que podemos chamar de "modelo de negócio". Cada componente, estado e função têm seus papéis e demandas que precisam ser executadas conforme o "modelo de negócio" do sistema. Isso envolve transmissão de informação - de componentes pais para componentes filhos, filhos dos filhos, filhos para pais, enfim! Nós já vimos que, quando nossa aplicação cresce, a transmissão de informações começa a ficar complicada de se fazer, não é mesmo?

// O Redux existe para auxiliar o fluxo de dados dentro da sua aplicação! Com ele você consegue ter, além do estado local de cada componente, um estado global, acessível a todos os componentes, onde se pode armazenar e recuperar informações que precisam ser compartilhadas. Essa ferramenta pode ser dividida em três partes principais - actions, stores e reducers.

// Action:
// As actions, como o nome indica, são as possíveis ações que seu sistema pode executar na store . Elas atuam como uma regra de negócio para manter os dados dos estados da aplicação e as suas mudanças previsíveis e consistentes. É bem comum ouvirmos que as actions são intenções (grave esse termo) de mudança de estado (para usar um termo mais técnico).

// Store:
// A store é onde o estado da sua aplicação fica registrado e protegido. As mudanças ou consultas feitas na store precisam estar definidas anteriormente numa action. Isso garante a integridade dos dados, como explicado anteriormente.

// -----

// Combinando Reducers

// O Redux auxilia bastante o desenvolvimento do nosso projeto, especialmente quando a aplicação se torna muito complexa.

// Imagine que a sua aplicação tenha dezenas de componentes e actions diferentes com lógicas específicas e complicadas. Agora suponha que você precise organizar tudo isso em vários reducers, e pior, depois ainda precise passar todos os reducers para um único store!

// O problema que você pode já ter notado é justamente esse, como poderíamos unir vários reducers numa aplicação que, normalmente, possui apenas um store?

// O Redux já possui uma função para resolver isso, a combineReducers(). Essa função recebe um objeto como parâmetro contendo cada um dos seus reducers como elementos, por exemplo:

// Arquivo index.js
import { combineReducers } from 'redux';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer});

export default reducerCombinado;

// Agora basta fazer a sua importação no seu store para a mágica acontecer!

import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);
// ...