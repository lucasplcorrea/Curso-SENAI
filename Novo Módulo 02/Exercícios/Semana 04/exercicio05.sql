-- 1. Listar todos os pedidos junto com as informações dos clientes, usando um INNER JOIN
SELECT p.pedido_id, p.cliente_id, p.data_pedido, p.valor, c.nome, c.cidade, c.idade
FROM pedidos p
INNER JOIN clientes c ON p.cliente_id = c.cliente_id;

-- 2. Consulta que retorna todos os clientes e seus pedidos, incluindo clientes que não fizeram pedidos (LEFT JOIN)
SELECT c.cliente_id, c.nome, c.cidade, c.idade, p.pedido_id, p.data_pedido, p.valor
FROM clientes c
LEFT JOIN pedidos p ON c.cliente_id = p.cliente_id;

-- 3. Consulta que retorna todos os produtos e seus itens pedidos, incluindo produtos que não foram pedidos (RIGHT JOIN)
SELECT p.produto_id, p.nome_produto, p.preco, i.item_id, i.pedido_id, i.quantidade
FROM produtos p
RIGHT JOIN itens_pedidos i ON p.produto_id = i.produto_id;

-- 4. UNION para combinar clientes de 'São Paulo' e 'Rio de Janeiro'
SELECT * 
FROM clientes
WHERE cidade = 'São Paulo'
UNION
SELECT *
FROM clientes
WHERE cidade = 'Rio de Janeiro';
