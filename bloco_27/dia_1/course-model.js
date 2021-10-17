// MODEL

// O model é onde nós manipulamos e definimos a estrutura dos nossos dados. Todo acesso aos dados deve passar por essa camada.
// Os dados que a aplicação utiliza podem estar armazenados em um banco de dados, acessados através de uma API externa, arquivos ou outros dispositivos de armazenamento.
// O model é responsável por abstrair completamente os detalhes de acesso e armazenamento. As demais camadas não devem saber, por exemplo, se o banco utilizado é MySQL ou MongoDB, ou se sequer há um banco de dados.
// O model se encarrega de fazer o mapeamento dos dados armazenados para as entidades existentes no domínio do seu negócio.

// -----

// userModel.js
const db = require('./db'); // Arquivo "fictício" que representa a conexão com o banco

async function getUser (username) {
    return db.findOne({ username })
    .then(result => result || null);
}

// Agora podemos utilizar esse arquivo em qualquer lugar onde precisemos de um usuário. Por exemplo, numa interface de linha de comando:

// cli.js
const readline = require('readline-sync');
const userModel = require('./userModel');

async function start() {
    const username = readline.question('Digite seu nome de usuário');
    const user = await userModel.getUser(username);

    if (!user) {
        return console.log('Usuário não encontrado');
    }

    console.log('Aqui estão os dados do usuário:');
    console.log(user);
}

start();

// Ao mesmo tempo, podemos utilizar nosso model em um middleware:

// getUserMiddleware.js
const userModel = require('./userModel');

async function getUserMiddleware (req, res, next) {
    const { username } = req.body;

    const user = await userModel.getUser(username);

    if (!user) {
        return res.status(404).json({ message: 'user não encontrado' });
    }

    return res.status(200).json(user);
}

// Dessa forma, caso nossos usuários passem a estar armazenados em outro lugar, como num arquivo, ou num outro banco de dados, nós só precisaremos alterar o arquivo userModel.js e, automaticamente, tudo volta a funcionar.
