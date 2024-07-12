-- 1. Inserir um novo cliente na tabela clientes
INSERT INTO clientes (nome, cidade, idade) 
VALUES ('Lucas Lima', 'Salvador', 29);

-- 2. Atualizar o campo cidade do cliente com cliente_id = 3 para 'Fortaleza'
UPDATE clientes
SET cidade = 'Fortaleza'
WHERE cliente_id = 3;

-- 3. Deletar todos os pedidos que têm valor inferior a 150.00
DELETE FROM pedidos
WHERE valor < 150.00;
