function compor(f, g) {
    return function(x) {
      return f(g(x));
    };
  }
  
  function somar1(x) {
    return x + 1;
  }
  
  function multiplicar2(x) {
    return x * 2;
  }
  
  let funcaoComposta = compor(somar1, multiplicar2);
  console.log(funcaoComposta(5));
  