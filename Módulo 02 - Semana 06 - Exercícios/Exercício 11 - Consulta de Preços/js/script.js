document.addEventListener('DOMContentLoaded', function() {
    // Função para consultar o valor do produto
    function consultarValorProduto() {
        // Obter o código ou nome do produto digitado pelo usuário
        const inputProduto = document.getElementById('productInput').value;

        // Buscar o produto no array de produtos
        const produtoEncontrado = produtos.find(produto => produto.codigo === inputProduto || produto.nome.toLowerCase() === inputProduto.toLowerCase());

        // Verificar se o produto foi encontrado
        if (produtoEncontrado) {
            // Exibir o valor do produto
            document.getElementById('productInfo').innerText = `O valor do produto ${produtoEncontrado.nome} é R$ ${produtoEncontrado.preco.toFixed(2)}`;
        } else {
            alert("Produto não encontrado.");
        }
    }

    // Adicionar evento de clique ao botão de consultar valor
    document.getElementById('searchButton').addEventListener('click', consultarValorProduto);
});

document.addEventListener('DOMContentLoaded', function() {
    // Array para armazenar os produtos selecionados
    let carrinho = [];

    // Função para adicionar um produto ao carrinho
    function adicionarAoCarrinho(produto) {
        carrinho.push(produto);
        atualizarListaCompras();
    }

    // Função para atualizar a lista de compras na tela
    function atualizarListaCompras() {
        const listaCompras = document.getElementById('lista-compras');
        // Limpar a lista antes de atualizá-la
        listaCompras.innerHTML = '';
        // Adicionar cada item do carrinho à lista
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.nome;
            listaCompras.appendChild(li);
        });
    }

    // Função para consultar o valor do produto
    function consultarValorProduto() {
        // Obter o código ou nome do produto digitado pelo usuário
        const inputProduto = document.getElementById('productInput').value;

        // Buscar o produto no array de produtos
        const produtoEncontrado = produtos.find(produto => produto.codigo === inputProduto || produto.nome.toLowerCase() === inputProduto.toLowerCase());

        // Verificar se o produto foi encontrado
        if (produtoEncontrado) {
            // Exibir o valor do produto
            document.getElementById('productInfo').innerText = `O valor do produto ${produtoEncontrado.nome} é R$ ${produtoEncontrado.preco.toFixed(2)}`;
        } else {
            alert("Produto não encontrado.");
        }
    }

    // Função para comprar o produto consultado
    function comprarProduto() {
        // Obter o código ou nome do produto digitado pelo usuário
        const inputProduto = document.getElementById('productInput').value;

        // Buscar o produto no array de produtos
        const produtoEncontrado = produtos.find(produto => produto.codigo === inputProduto || produto.nome.toLowerCase() === inputProduto.toLowerCase());

        // Verificar se o produto foi encontrado
        if (produtoEncontrado) {
            // Adicionar o produto ao carrinho
            adicionarAoCarrinho(produtoEncontrado);
            // Exibir mensagem de sucesso
            alert(`Produto ${produtoEncontrado.nome} adicionado ao carrinho.`);
        } else {
            alert("Produto não encontrado.");
        }
    }

    // Adicionar evento de clique ao botão de consultar valor
    document.getElementById('searchButton').addEventListener('click', consultarValorProduto);

    // Adicionar evento de clique ao botão de comprar produto
    document.getElementById('buyButton').addEventListener('click', comprarProduto);
});
