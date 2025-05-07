-- Script SQL simplificado para criar tabela emails

-- Criar a tabela se não existir
CREATE TABLE IF NOT EXISTS emails (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  origem TEXT NOT NULL, -- 'newsletter' ou 'waitlist'
  data_cadastro TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),
  metadata JSONB DEFAULT '{}'::jsonb, -- para armazenar informações adicionais como nome, etc.
  ativo BOOLEAN DEFAULT TRUE
);

-- Criar índice para consultas por email se não existir
CREATE INDEX IF NOT EXISTS idx_emails_email ON emails(email);

-- Habilitar RLS
ALTER TABLE emails ENABLE ROW LEVEL SECURITY;

-- Recriar a função para verificar email duplicado
CREATE OR REPLACE FUNCTION check_email_exists()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM emails WHERE email = NEW.email) THEN
    RAISE EXCEPTION 'Email já cadastrado';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Remover o trigger se já existir para evitar duplicação
DROP TRIGGER IF EXISTS check_email_before_insert ON emails;

-- Criar trigger para verificar email duplicado
CREATE TRIGGER check_email_before_insert
  BEFORE INSERT ON emails
  FOR EACH ROW
  EXECUTE FUNCTION check_email_exists();

-- Remover políticas existentes (para evitar conflitos)
DROP POLICY IF EXISTS insert_emails_policy ON emails;
DROP POLICY IF EXISTS select_emails_policy ON emails;

-- Criar políticas de segurança
CREATE POLICY insert_emails_policy
  ON emails FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY select_emails_policy
  ON emails FOR SELECT 
  TO anon
  USING (true);

-- Inserir alguns dados de teste (comentados)
-- INSERT INTO emails (email, origem, metadata) VALUES ('teste@exemplo.com', 'newsletter', '{}'::jsonb);

-- Exibir tabelas existentes para verificação
SELECT tablename FROM pg_tables WHERE schemaname = 'public';

-- Exibir políticas para a tabela emails
SELECT policyname, tablename, cmd 
FROM pg_policies 
WHERE tablename = 'emails';

-- Exibir estrutura da tabela emails
SELECT column_name, data_type, column_default
FROM information_schema.columns
WHERE table_name = 'emails' AND table_schema = 'public'
ORDER BY ordinal_position; 