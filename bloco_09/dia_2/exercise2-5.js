// Exercicio 2: Vamos fazer, passo a passo, uma Promise.
// .Instancie uma Promise
// .Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// .Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
// .Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

const fetchPromise2 = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map((number) => number * number).reduce((sum, number) => sum + number);

    (sum < 8000) ? resolve(sum) : reject(sum);
  });
  myPromise
    .then((sum) => console.log(`Promise resolvida ${sum}`))
    .catch((sum) => console.log(`Promise rejeitada ${sum}`));
}

fetchPromise2();

// Exercicio 3: Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.

const fetchPromise3 = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number).reduce((number, acc) => number + acc, 0);

    (sum < 8000) ? resolve(sum) : reject(sum);
  });

  myPromise
    .then(sum => {
      console.log(`Promise resolvida ${sum}`);
      console.log([2, 3, 5, 10].map(number => sum / number));
    })
    .catch((sum) => console.log(`Promise rejeitada ${sum}`));
};

fetchPromise3();

// Exercicio 4: Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

const fetchPromise4 = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number).reduce((number, acc) => number + acc, 0);

    (sum < 8000) ? resolve(sum) : reject();
  });

  myPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
};

fetchPromise4();

// Exercicio 5: Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const fetchPromise5 = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number).reduce((number, acc) => number + acc, 0);
    
    console.log(`valor sum: ${sum}`);
    (sum < 8000) ? resolve(sum) : reject();
  });

  myPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then(array => array.reduce((number, acc) => number + acc, 0))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
};

fetchPromise5();