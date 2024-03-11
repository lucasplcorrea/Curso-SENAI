# Exercícios

## Exercício 01 - Desenvolva uma tela para simular consulta de preços e compra de produtos de mercado

- A tela deve conter os seguintes elementos:

- Input para informar código ou nome do produto;

- Botão para consultar valor;

- Botão para comprar produto consultado;

## Exercício 02 - Adicione um evento ao botão de consultar valor do produto

- Adicione um evento de clique para consultar o valor do produto digitado pelo consumidor. A resposta deve ser trazida de forma dinâmica a partir de uma função, seja por alert ou alteração do innerText de uma tag de texto presente no html. Exemplo: alert('O valor do produto é: ') ou document.getElementById('preco-produto').innerText = 'O valor do produto é…'

## Exercício 03 - Adicione um evento ao botão de comprar o produto

- Para o botão de comprar, adicione um evento de clique. O nome do produto deve ser inserido em um array de lista de compras do usuário, ou seja, dar um ‘push’ do nome ou objeto produto (formado por nome e preço) na variável carrinho (array)

## Exercício 04 - Adicione um botão para consultar o valor total da compra

- Adicione um botão que ao clicar, chame uma função e ela retorne o valor total dos itens no carrinho.

- Retornar ‘Carrinho vazio’ caso o valor seja 0.

- Para um melhor cálculo, utilizar um modelo de array de objetos para a lista de compras / carrinho do usuario.

- carrinho = [{nome: ‘Feijão’, preco: 5.99 }, {nome: ‘Arroz’, preco: 23.99}]

- Após isso, basta percorrer em cada item e somar o preço. Ex: soma += preco

## Exercício 05 - Coloque na tela o valor total do carrinho de forma dinâmica

- Mostre dinamicamente o valor total do carrinho para o usuário, posicione uma tag de texto para receber este valor sempre que o consumidor apertar no botão ‘comprar’.
