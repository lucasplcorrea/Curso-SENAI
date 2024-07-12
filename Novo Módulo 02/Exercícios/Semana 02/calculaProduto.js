function calcularProduto(numeros) {
    return numeros.reduce((produto, numero) => produto * numero, 1);
  }
  
  let numeros = [1, 2, 3, 4, 5];
  console.log(calcularProduto(numeros));
  