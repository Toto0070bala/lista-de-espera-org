-- Script para corrigir o erro de webhook

-- 1. Primeiro, vamos descobrir qual trigger está causando o problema
SELECT 
    trigger_name,
    event_manipulation,
    action_statement
FROM information_schema.triggers
WHERE event_object_table = 'emails';

-- 2. Remover o trigger problemático (ajuste o nome conforme necessário)
DROP TRIGGER IF EXISTS notify_webhook_trigger ON emails;

-- 3. Remover a função problemática
DROP FUNCTION IF EXISTS notify_webhook();

-- 4. Opção 1: Criar uma versão da função que não faz nada (placeholder)
CREATE OR REPLACE FUNCTION notify_webhook()
RETURNS TRIGGER AS $$
BEGIN
    -- Esta é uma versão vazia que não tenta usar http_post
    RAISE NOTICE 'Email inserido: %', NEW.email;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 5. Opção 2: Reinstalar a função com pg_net (comentado - use se tiver permissão)
-- Descomente apenas se você tiver permissões de administrador
/*
-- Instalar a extensão pg_net se ela não existir
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Recriar a função webhook corretamente
CREATE OR REPLACE FUNCTION notify_webhook()
RETURNS TRIGGER AS $$
BEGIN
    PERFORM net.http_post(
        'https://primary-production-9e52.up.railway.app/webhook-test/19fcae22-a298-4efb-9436-45da35dd1f31',
        json_build_object('email', NEW.email),
        '{"Content-Type": "application/json"}',
        60  -- timeout
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recriar o trigger
CREATE TRIGGER notify_webhook_trigger
AFTER INSERT ON emails
FOR EACH ROW
EXECUTE FUNCTION notify_webhook();
*/

-- 6. Verificar se todos os triggers estão corretos agora
SELECT 
    trigger_name,
    event_manipulation,
    action_statement
FROM information_schema.triggers
WHERE event_object_table = 'emails';

-- 7. Testar inserção para ver se funciona
INSERT INTO emails (email, origem, metadata)
VALUES ('teste_sem_webhook@exemplo.com', 'test', '{"teste": true}'::jsonb)
RETURNING *; 