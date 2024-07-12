-- 1. Encontre o total de itens pedidos em cada mês
SELECT DATE_TRUNC('month', p.data_pedido) AS mes, SUM(i.quantidade) AS total_itens
FROM pedidos p
JOIN itens_pedidos i ON p.pedido_id = i.pedido_id
GROUP BY mes
ORDER BY mes;

-- 2. Liste os clientes que não têm pedidos associados
SELECT c.*
FROM clientes c
LEFT JOIN pedidos p ON c.cliente_id = p.cliente_id
WHERE p.pedido_id IS NULL;

-- 3. Encontre o pedido de maior valor
SELECT *
FROM pedidos
ORDER BY valor DESC
LIMIT 1;

-- 4. Encontre o total de itens pedidos para cada produto
SELECT p.produto_id, p.nome_produto, SUM(i.quantidade) AS total_itens
FROM produtos p
JOIN itens_pedidos i ON p.produto_id = i.produto_id
GROUP BY p.produto_id, p.nome_produto
ORDER BY total_itens DESC;

-- 5. Calcule a soma dos valores dos pedidos para cada cliente que tenha feito mais de um pedido
SELECT p.cliente_id, c.nome, SUM(p.valor) AS soma_valores
FROM pedidos p
JOIN clientes c ON p.cliente_id = c.cliente_id
GROUP BY p.cliente_id, c.nome
HAVING COUNT(p.pedido_id) > 1;

-- 6. Encontre o preço médio dos produtos em cada categoria
SELECT c.nome_categoria, AVG(p.preco) AS preco_medio
FROM produtos p
JOIN categorias c ON p.categoria_id = c.categoria_id
GROUP BY c.nome_categoria;

-- 7. Encontre o cliente que fez o pedido de maior valor
SELECT c.*
FROM clientes c
JOIN pedidos p ON c.cliente_id = p.cliente_id
ORDER BY p.valor DESC
LIMIT 1;
