// PARTE 2 - TEMPLATE LITERALS

const myName = "Isabella"
// Concatenacao de strings (modo antigo)
console.log('Hello' + ' ' + myName + '!');

// Template literals
// sinal de crase no inicio e final da frase e variaveis e expressoes dentro de ${...a + b...}
console.log(`Welcome ${myName}!`);

// Quebra de linhas
// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')
