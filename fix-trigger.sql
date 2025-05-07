-- Script para corrigir o trigger que está rejeitando todos os emails

-- Remover o trigger existente
DROP TRIGGER IF EXISTS check_email_before_insert ON emails;

-- Remover a função existente
DROP FUNCTION IF EXISTS check_email_exists();

-- Criar uma nova função para verificar email duplicado corretamente
CREATE OR REPLACE FUNCTION check_email_exists()
RETURNS TRIGGER AS $$
BEGIN
  -- Verificar se o email já existe na tabela
  IF EXISTS (SELECT 1 FROM emails WHERE email = NEW.email) THEN
    RAISE EXCEPTION 'Email já cadastrado';
  END IF;
  
  -- Se chegou aqui, o email não existe, então retorna NEW
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar o trigger novamente
CREATE TRIGGER check_email_before_insert
  BEFORE INSERT ON emails
  FOR EACH ROW
  EXECUTE FUNCTION check_email_exists();

-- Verificar se o trigger foi criado corretamente
SELECT tgname, tgrelid::regclass
FROM pg_trigger
WHERE tgname = 'check_email_before_insert';

-- Testar inserção de um email de teste
WITH inserted_email AS (
  INSERT INTO emails (email, origem, metadata)
  VALUES ('trigger_test_' || NOW()::text || '@example.com', 'test', '{"teste_trigger": true}'::jsonb)
  RETURNING *
)
SELECT * FROM inserted_email; 