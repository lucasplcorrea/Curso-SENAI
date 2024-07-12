function agruparPorCategoria(produtos) {
    return produtos.reduce((acc, produto) => {
      if (!acc[produto.categoria]) {
        acc[produto.categoria] = 0;
      }
      acc[produto.categoria] += produto.preco;
      return acc;
    }, {});
  }
  
  let produtos = [
    { categoria: 'eletrônicos', preco: 99.99 },
    { categoria: 'livros', preco: 19.99 },
    { categoria: 'eletrônicos', preco: 199.99 },
    { categoria: 'livros', preco: 29.99 },
    { categoria: 'roupas', preco: 49.99 }
  ];
  console.log(agruparPorCategoria(produtos));

  