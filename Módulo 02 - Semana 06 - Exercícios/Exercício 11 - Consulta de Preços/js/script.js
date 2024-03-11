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

    // Array para armazenar os produtos selecionados
    let carrinho = [];

    // Função para adicionar um produto ao carrinho
    function adicionarAoCarrinho(produto) {
        carrinho.push(produto);
        atualizarLocalStorage();
        atualizarQuantidadeProdutos(); // Atualizar a quantidade de produtos no carrinho
        atualizarListaCompras();
        calcularValorTotal();
    }

    // Função para carregar o carrinho do localStorage
    function carregarCarrinho() {
        const carrinhoArmazenado = localStorage.getItem('carrinho');
        if (carrinhoArmazenado) {
            carrinho = JSON.parse(carrinhoArmazenado);
            atualizarQuantidadeProdutos(); // Atualizar a quantidade de produtos no carrinho ao carregar do localStorage
            atualizarListaCompras();
            calcularValorTotal();
        }
    }

    // Função para atualizar o localStorage com os itens do carrinho
    function atualizarLocalStorage() {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }

    // Função para calcular o valor total da compra
    function calcularValorTotal() {
        let total = 0;
        // Percorrer cada item do carrinho e somar os preços
        carrinho.forEach(item => {
            total += item.preco;
        });
        // Exibir o valor total na tela
        const totalValueElement = document.getElementById('totalValue');
        if (total > 0) {
            totalValueElement.innerText = `Valor total da compra: R$ ${total.toFixed(2)}`;
        } else {
            totalValueElement.innerText = 'Carrinho vazio';
        }
    }

    // Função para atualizar a quantidade de produtos no carrinho
    function atualizarQuantidadeProdutos() {
        const quantidadeProdutosElement = document.getElementById('quantidade-produtos');
        quantidadeProdutosElement.innerText = carrinho.length.toString();
    }

    // Função para limpar o carrinho
    function limparCarrinho() {
        carrinho = [];
        atualizarListaCompras();
        atualizarQuantidadeProdutos();
        calcularValorTotal();
        atualizarLocalStorage();
    }

    // Função para exibir os itens do carrinho
    function atualizarListaCompras() {
        const listaCompras = document.getElementById('lista-compras');
        listaCompras.innerHTML = '';
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

    // Adicionar evento de clique ao botão de comprar produto consultado
    document.getElementById('buyButton').addEventListener('click', function() {
        const inputProduto = document.getElementById('productInput').value;
        const produtoEncontrado = produtos.find(produto => produto.codigo === inputProduto || produto.nome.toLowerCase() === inputProduto.toLowerCase());
        if (produtoEncontrado) {
            adicionarAoCarrinho(produtoEncontrado);
            alert(`Produto ${produtoEncontrado.nome} adicionado ao carrinho.`);
        } else {
            alert("Produto não encontrado.");
        }
    });

    // Adicionar evento de clique ao botão de limpar carrinho
    document.getElementById('clearButton').addEventListener('click', limparCarrinho);

    // Adicionar evento de clique ao botão de consultar valor total
    document.getElementById('totalButton').addEventListener('click', calcularValorTotal);

    // Carregar o carrinho do localStorage ao carregar a página
    carregarCarrinho();
});
