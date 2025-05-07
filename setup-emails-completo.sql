-- Script completo para configurar tabela de emails com webhook para N8N

-- 1. Criar a tabela de emails (ou recriar se necessário)
DROP TABLE IF EXISTS emails;

CREATE TABLE emails (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  origem TEXT NOT NULL, -- 'newsletter' ou 'waitlist'
  data_cadastro TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),
  metadata JSONB DEFAULT '{}'::jsonb,
  enviado_webhook BOOLEAN DEFAULT FALSE,
  webhook_response JSONB DEFAULT NULL
);

-- 2. Criar índices úteis
CREATE INDEX idx_emails_email ON emails(email);
CREATE INDEX idx_emails_origem ON emails(origem);
CREATE INDEX idx_emails_data_cadastro ON emails(data_cadastro);

-- 3. Habilitar Row Level Security (RLS)
ALTER TABLE emails ENABLE ROW LEVEL SECURITY;

-- 4. Criar políticas de segurança para acesso anônimo
-- Política para permitir inserções anônimas
CREATE POLICY "Permitir inserções anônimas"
  ON emails FOR INSERT 
  TO anon
  WITH CHECK (true);

-- Política para permitir leituras anônimas (útil para verificar se um email já existe)
CREATE POLICY "Permitir leituras anônimas"
  ON emails FOR SELECT 
  TO anon
  USING (true);

-- 5. Instalar a extensão pg_net (necessária para webhooks)
CREATE EXTENSION IF NOT EXISTS pg_net;

-- 6. Criar uma função para enviar dados para o webhook N8N
CREATE OR REPLACE FUNCTION notify_n8n_webhook()
RETURNS TRIGGER AS $$
DECLARE
  webhook_url TEXT := 'https://primary-production-9e52.up.railway.app/webhook/19fcae22-a298-4efb-9436-45da35dd1f31';
  response_id BIGINT;
  webhook_data JSONB;
BEGIN
  -- Preparar dados para o webhook
  webhook_data := json_build_object(
    'id', NEW.id,
    'email', NEW.email,
    'origem', NEW.origem,
    'data_cadastro', NEW.data_cadastro,
    'metadata', NEW.metadata
  );
  
  -- Chamar o webhook
  SELECT net.http_post(
    url := webhook_url,
    body := webhook_data,
    headers := '{"Content-Type": "application/json"}',
    timeout_milliseconds := 10000
  ) INTO response_id;
  
  -- Atualizar o registro com o status do webhook
  UPDATE emails
  SET 
    enviado_webhook = TRUE,
    webhook_response = json_build_object('response_id', response_id)
  WHERE id = NEW.id;
  
  -- Retornar o registro atualizado
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Em caso de falha, registrar o erro mas continuar
  UPDATE emails
  SET 
    enviado_webhook = FALSE,
    webhook_response = json_build_object('error', SQLERRM)
  WHERE id = NEW.id;
  
  -- Continuar mesmo com erro (não impede a inserção do email)
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 7. Criar um trigger para ativar o webhook após uma inserção
DROP TRIGGER IF EXISTS after_email_insert ON emails;

CREATE TRIGGER after_email_insert
  AFTER INSERT ON emails
  FOR EACH ROW
  EXECUTE FUNCTION notify_n8n_webhook();

-- 8. Criar uma função para verificar email duplicado (opcional)
CREATE OR REPLACE FUNCTION check_email_exists()
RETURNS TRIGGER AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM emails WHERE email = NEW.email) THEN
    RAISE EXCEPTION 'Email já cadastrado';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 9. Criar trigger para verificar email duplicado antes da inserção
DROP TRIGGER IF EXISTS check_email_before_insert ON emails;

CREATE TRIGGER check_email_before_insert
  BEFORE INSERT ON emails
  FOR EACH ROW
  EXECUTE FUNCTION check_email_exists();

-- 10. Verificar se tudo foi criado corretamente
SELECT
  table_name,
  column_name,
  data_type
FROM
  information_schema.columns
WHERE
  table_name = 'emails';

-- Listar triggers
SELECT 
  trigger_name,
  event_manipulation,
  action_statement
FROM 
  information_schema.triggers
WHERE 
  event_object_table = 'emails'; 