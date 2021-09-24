const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Sorteio de números', script: './sorteio.js' },
];

let mensagem = scripts.map((script, index) => `${index + 1} - ${script.name}`);

console.log('Escolha um número para executar o script correspondente:');

mensagem = mensagem.join('\n');

const scriptNumber = (readline.questionInt(`${mensagem}  
Número do script: `) - 1);

const script = scripts[scriptNumber];

if (!script) return console.log('Número inválido. Saindo');

require(script.script);
