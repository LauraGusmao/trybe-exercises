const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Olá meu nome é Laura. No momento estou aprendendo NodeJS.')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
