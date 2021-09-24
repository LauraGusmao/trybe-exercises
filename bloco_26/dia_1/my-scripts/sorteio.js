const readline = require('readline-sync');

function sorteio() {
  const numeroEscolhido = readline.questionInt('Escolha um número de 0 a 10: ');
  const numeroSorteado = parseInt(Math.random() * 10);
  
  if (numeroEscolhido !== numeroSorteado) {
    console.log(`Infelizmente não foi dessa vez. O número sorteado foi ${numeroSorteado}.`)
  } else {
    console.log('Parabéns, número correto!');
  };

  const jogarNovamente = readline.question('Deseja jogar novamente? (Digite s para sim, e qualquer outra coisa para não) ');

  if (jogarNovamente !== 's') return console.log('Até mais!');
  sorteio();
}

sorteio();