-- 1. Função Agregada: Encontre a média de idade dos clientes que têm pedidos com valor total superior a 300,00
SELECT AVG(c.idade) AS media_idade
FROM clientes c
JOIN (
    SELECT cliente_id, SUM(valor) AS valor_total
    FROM pedidos
    GROUP BY cliente_id
    HAVING SUM(valor) > 300.00
) p ON c.cliente_id = p.cliente_id;

-- 2. Subconsulta: Liste todos os produtos que foram pedidos mais de uma vez
SELECT p.*
FROM produtos p
WHERE p.produto_id IN (
    SELECT produto_id
    FROM itens_pedidos
    GROUP BY produto_id
    HAVING COUNT(*) > 1
);
