function filtrarAdultos(pessoas) {
    return pessoas
      .filter(pessoa => pessoa.idade >= 18)
      .map(pessoa => pessoa.nome);
  }
  
  let pessoas = [
    { nome: 'Alice', idade: 17 },
    { nome: 'Bob', idade: 22 },
    { nome: 'Charlie', idade: 16 },
    { nome: 'David', idade: 19 }
  ];
  console.log(filtrarAdultos(pessoas));
  
  