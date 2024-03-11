const nInformado = 3;

const Fibonacci = (nInformado) => {
  let n1 = 0,
    n2 = 1,
    soma = n1 + n2;

  while (soma <= nInformado) {
    if (soma === nInformado) {
      return console.log("Pertence a sequencia.");
    }
    n1 = n2;
    n2 = soma;
    soma = n1 + n2;
  }

  return console.log("Não pertence a sequencia.");
};

Fibonacci(nInformado);
