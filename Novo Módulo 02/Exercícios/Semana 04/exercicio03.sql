-- 1. Selecionar todos os clientes que moram em 'São Paulo'
SELECT * 
FROM clientes
WHERE cidade = 'São Paulo';

-- 2. Listar todos os pedidos, ordenados pela data_pedido em ordem decrescente
SELECT * 
FROM pedidos
ORDER BY data_pedido DESC;

-- 3. Encontrar todos os clientes com idade entre 25 e 35 anos
SELECT * 
FROM clientes
WHERE idade BETWEEN 25 AND 35;
