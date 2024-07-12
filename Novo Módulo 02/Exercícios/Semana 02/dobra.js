function transformarArray(array, transformacao) {
    return array.map(transformacao);
  }
  
  function dobrar(numero) {
    return numero * 2;
  }
  
  let numeros = [1, 2, 3, 4, 5];
  console.log(transformarArray(numeros, dobrar));
  