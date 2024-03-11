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