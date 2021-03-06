// PARTE 1 - APPLICATION PROGRAMMING INTERFACE (API)

// Em resumo, uma API permite que aplicações se comuniquem umas com as outras, servindo de "ponte" para elas. Uma API não é um banco de dados ou um servidor, mas a responsável pelo controle dos pontos de acesso a eles, através de um conjunto de rotinas e padrões de programação.

// Vamos focar em APIs baseadas na web. Essas APIs retornam dados em response a um request do cliente, nos permitindo acesso a dados de fontes externas.

// APIs também nos permitem compartilhar dados com outros sites ou aplicações. Você já deve ter observado a opção de "Compartilhar no Facebook" ou "Compartilhar no Twitter". No momento em que vocẽ clica nessa opção, a aplicação que você está visitando se comunica com sua conta do Twitter ou Facebook e altera os dados do seu status, por exemplo, através de uma API.

// -----

// Por que precisamos de APIs?

// Se quisessemos exibir aos visitantes do nosso site os tweets que fazem referência a ele, teríamos que contatar o Twitter e solicitar os tweets por e-mail. Entretanto, esse processo seria extremamente manual e o número de solicitações muito alto. Não teríamos também nossos dados atualizados ou em tempo real. 
// Por esse motivo, o Twitter cria uma forma de fazermos consultas a esses dados, através de uma API. Ela vai controlar quais dados podemos requisitar, preparar nosso pedido no servidor e nos enviar uma resposta.

// Quem precisa criar e manter APIs?

// APIs públicas e baseadas na web são desenvolvidas e aprimoradas constantemente por grandes empresas de tecnologia (principalmente de mídias sociais), organizações governamentais, startups de software ou qualquer outra empresa ou pessoa que colete dados e precise disponibilizá-los de algum modo.

// Como uma API se diferencia de um back-end padrão de um site?

// Toda API é um back-end, mas nem todo back-end é uma API.
// Um back-end padrão de um site retorna templates para o front-end de uma única aplicação, através de rotas definidas. Por exemplo, quando você acessa uma página da nossa plataforma, está fazendo um request ao servidor, que te retorna um template como response.
// As APIs também possuem rotas de acesso que permitem a comunicação com o servidor, mas não precisam retornar templates. Geralmente, retornam dados no formato JSON.

// O que é JSON e por que o usamos?

// JSON significa J ava S cript O bject N otation e é basicamente uma forma de representarmos dados como objetos Javascript:
{
  trybers: [
    {
      "name": "Lauro Cesar",
      "github": "lauroandrade",
      "status": "#vqv"
    }
  ]
}
// Perceba o quão legível é o formato JSON, já que nossos dados ficam guardados como pares de key/value . A key fica no lado esquerdo e o value no lado direito. No array trybers, podem ser adicionados vários outros objetos.
// JSON está sempre presente em aplicações web modernas, pois é simples, interpretável e ainda funciona muito bem em aplicações JavaScript. Além disso, é compatível com diversas outras linguagens, que conseguem interpretá-lo e gerar códigos no formato, como Python, Java, PHP, Ruby, entre outras.
// Desse modo, as APIs retornam os dados no formato JSON, a fim de manter uma alta escalabilidade e independência.

// Como construir uma API?

// Para construir uma API, você vai precisar de:
// .Um back-end com algumas rotas;
// .Um banco de dados que guarda os dados da sua aplicação ou alguma outra fonte de dados de terceiros;
// .Um servidor que irá rodar sua API. Nessa etapa, o Heroku é uma ótima opção para fazer o deploy em nuvem da sua API de forma rápida e simples.

// Como utilizar APIs na minha aplicação?

// APIs podem incrementar as funcionalidades da sua aplicação e colocá-la em um outro patamar. Você pode adicionar mapas, receber dados sobre o tempo e outras informações úteis.
// .Encontre uma API pública, que seja bem documentada e mantida;
// .Leia a documentação para ter certeza de que aquela API resolve o problema que você deseja solucionar;
// .Entenda o formato dos dados disponíveis;
// .Faça requests e receba responses da API com os dados que você deseja receber.

// Fazendo uma requisição a uma API

// Você pode fazer requisições a uma API de várias formas. Uma delas é no terminal.
// No exemplo a seguir, vamos fazer um request do tipo GET para uma API, que retorna um JSON como response.
"wget 'https://pokeapi.co/api/v2/pokemon/ditto' -O - -q"
