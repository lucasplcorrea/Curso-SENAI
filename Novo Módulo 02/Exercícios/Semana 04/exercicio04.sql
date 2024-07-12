-- 1. Encontrar todos os clientes cujo nome começa com a letra 'A'
SELECT * 
FROM clientes
WHERE nome LIKE 'A%';

-- 2. Calcular o valor total de pedidos para cada cliente
SELECT c.cliente_id, c.nome, SUM(p.valor) AS valor_total_pedidos
FROM clientes c
JOIN pedidos p ON c.cliente_id = p.cliente_id
GROUP BY c.cliente_id, c.nome;

-- 3. Encontrar a média de idade dos clientes em cada cidade
SELECT cidade, AVG(idade) AS media_idade
FROM clientes
GROUP BY cidade;
