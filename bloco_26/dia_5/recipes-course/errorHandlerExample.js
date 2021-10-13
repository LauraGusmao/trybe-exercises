// ATENCAO, exemplo apenas para fins didáticos.
// Jamais devemos realizar a leitura de um arquivo do sistema de arquivos dessa forma. Concatenar parâmetros recebidos do usuário diretamente na chamada para qualquer método representa uma falha gigantesca de segurança.

/* errorHandlerExample.js */
const express = require('express');
const fs = require('fs/promises');

const app = express();

app.get('/:fileName', async (req, res, next) => {
    try {
        const file = await fs.readFile(`./${req.params.fileName}`);
        res.send(file.toString('utf-8'));
    } catch (e) {
        next(e); 
    }
});

app.use(function (err, req, res, next) { 
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3002);

// Para testar, execute essa nova API com o comando node errorHandlerExample.js e faça uma requisição para a URL http://localhost:3002/abc .
