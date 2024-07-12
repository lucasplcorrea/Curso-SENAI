-- 1. Criar a tabela categorias
CREATE TABLE categorias (
    categoria_id SERIAL PRIMARY KEY,
    nome_categoria VARCHAR(50) NOT NULL
);

-- 2. Adicionar coluna categoria_id à tabela produtos
ALTER TABLE produtos
ADD COLUMN categoria_id INT;

-- 3. Criar chave estrangeira para a tabela categorias
ALTER TABLE produtos
ADD CONSTRAINT fk_categoria
FOREIGN KEY (categoria_id) 
REFERENCES categorias(categoria_id);

-- 4. Excluir a tabela categorias
DROP TABLE categorias CASCADE;
