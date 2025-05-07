-- Script final para resolver o problema do trigger de webhook

-- 1. Descobrir quais triggers existem na tabela emails
SELECT 
    trigger_name 
FROM information_schema.triggers 
WHERE event_object_table = 'emails';

-- 2. Remover o trigger de webhook (provavelmente se chama notify_webhook_trigger ou algo similar)
DROP TRIGGER IF EXISTS notify_webhook_trigger ON emails;
DROP TRIGGER IF EXISTS emails_webhook_trigger ON emails;
DROP TRIGGER IF EXISTS webhook_notify ON emails;
DROP TRIGGER IF EXISTS notify_after_insert ON emails;

-- 3. Remover a função associada ao webhook
DROP FUNCTION IF EXISTS notify_webhook();
DROP FUNCTION IF EXISTS send_webhook_notification();
DROP FUNCTION IF EXISTS webhook_notification();

-- 4. Verificar que todos os triggers problemáticos foram removidos
SELECT 
    trigger_name 
FROM information_schema.triggers 
WHERE event_object_table = 'emails';

-- 5. Testar inserção - esta deve funcionar agora
INSERT INTO emails (email, origem, metadata)
VALUES ('teste_final_' || NOW()::text || '@example.com', 'test', '{"teste": true}'::jsonb)
RETURNING *; 