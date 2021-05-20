// TESTANDO CÓDIGOS ASSÍNCRONOS

// É comum encontrarmos em JavaScript linhas de código que possuem comportamento assíncrono. Você já conhece três casos em que comportamentos assíncronos acontecem: callbacks, promises e async/await. Para que possamos testar estes casos, o Jest nos fornece algumas soluções com objetivo de que nossos testes saibam o momento em que a função a ser testada foi concluída, e a informação necessária foi retornada. Isto evita que falsos positivos aconteçam e garante seguraça para a aplicação.

// Callbacks: para testar callbacks utilizamos a função done. Ela é chamada para sinalizar ao Jest que o teste deverá aguardar o retorno da função callback para que a validação aconteça.

// Promises: quando testamos promises devemos retorná-la dentro do teste. Lembre-se de utilizar then quando o retorno for um resolve e catch quando o retorno for um reject.

// Async/Await: para testar funções com async e await devemos utilizar a palavra chave async na função passada para teste e await onde esperamos algum retorno assíncrono. Lembre-se que o async/await é apenas uma alternativa de sintaxe mais simples para testar promises.

// -----

// Calbacks

// Ao realizar testes assíncronos, é necessário ter cuidado com falso-positivos, pois o Jest não sabe, por padrão, quando é necessário esperar o término da execução de uma função assíncrona. Ou seja, você roda o teste, o Jest analisa as funções síncronas, não espera as assíncronas terminarem e, dado o final do teste, gera um resultado positivo antes de um eventual problema numa função assíncrona acusar um erro.

// Exemplo de falso positivo:
test("Não deveria passar!", () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
  }, 500);
});

// Como o setTimeout é uma função assíncrona, o teste retorna um resultado falso-positivo quando executado dessa forma — note, inclusive, que a frase 'Deveria falhar!' sequer aparece no console. O Jest não espera o test acabar, gerando esse resultado falso-positivo.

// Para o Jest esperar a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca, chamada done, que precisa ser chamada após os testes assíncronos.

// Agora o Jest no exemplo abaixo consegue identificar o erro.
test("Não deveria passar!", done => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
    done();
  }, 500);
});

// Outro exemplo:
const SumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500)
}

test('Testando SumNumbers, soma 5 mais 10', done => {
  SumNumbers(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
})

// Quando estiver realizando testes, sempre procure verificar se o seu teste não está exibindo resultados falso-positivos. No exemplo acima, em que o teste está passando, basta mudar o valor final do expect de .toBe(15) para analisar outros cenários.

// Mude o valor .toBe(15) para .toBe(10) e verifique. O esperado é o teste identificar o erro. Caso isso ocorra, quer dizer que o seu teste está correto; caso continue passando e não encontre o erro, provavelmente seu teste está com algum falso-positivo.

// 