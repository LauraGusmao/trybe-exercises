// PARTE 7 - DEFAULT PARAMETERS

// Passar um parâmetro como default é um pequeno detalhe que torna o seu código muito mais semântico.

// Ao executar a função greeting abaixo, que imprime uma saudação para o usuário, o que acontece quando você chama a função sem passar o argumento que ela espera? Você verá que a função retornará undefined.
const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!

// Uma solução para corrigir esse problema seria:
const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário!

// Essa solução não é a mais concisa e elegante. Com o ES6, podemos pré-definir um parâmetro padrão para a função. Assim, podemos reescrever o exemplo anterior da seguinte forma:
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

// O default será utilizado caso nenhum argumento seja fornecido a função. Você pode adicionar mais de um parâmetro default caso a sua função receba vários argumentos, se achar necessário. 

// -----

// Escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8));