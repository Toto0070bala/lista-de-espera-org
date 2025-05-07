// Script para testar a inserção de email com detalhes de erro completos
import { createClient } from '@supabase/supabase-js';

// URL e chave anônima do Supabase
const supabaseUrl = 'https://kantyhlatszzrhqxfecr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbnR5aGxhdHN6enJocXhmZWNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMzkzNDUsImV4cCI6MjA2MTgxNTM0NX0.za5zHQw4unrpCl5Nc25D9CFE_AP9FiBVcLhXAs63MC4';

// Criar cliente Supabase com configurações especiais para debug
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
  debug: true, // Habilita mensagens de debug
});

// Função para testar inserção com log detalhado
async function testDetailedInsertion() {
  console.log('Testando inserção de email com log detalhado...');
  
  // Email de teste único
  const testEmail = `test_detailed_${Date.now()}@example.com`;
  
  try {
    console.log(`Tentando inserir email: ${testEmail}`);
    
    // Primeiro, testar conexão simples para verificar se está funcionando
    console.log('Verificando conexão...');
    const { data: connectionTest, error: connectionError } = await supabase
      .from('emails')
      .select('id, email')
      .limit(1);
      
    if (connectionError) {
      console.error('❌ Erro de conexão:', connectionError);
      return;
    }
    
    console.log('✅ Conexão OK, encontrados registros:', connectionTest);
    console.log('Tentando inserção...');
    
    // Tentar inserção direta
    const { data, error, status, statusText } = await supabase
      .from('emails')
      .insert([
        { 
          email: testEmail, 
          origem: 'test',
          metadata: { teste_detalhado: true } 
        }
      ])
      .select();
    
    console.log('Status HTTP:', status, statusText);
    
    if (error) {
      console.error('❌ Erro ao inserir email:', error);
      console.error('Código:', error.code);
      console.error('Mensagem:', error.message);
      console.error('Detalhes:', error.details);
      console.error('Hint:', error.hint);
      
      // Verificar erros específicos
      if (error.code === '23505' || error.message.includes('duplicate key') || error.message.includes('unique constraint')) {
        console.error('O email já existe na tabela (violação de restrição unique).');
      } else if (error.message.includes('já cadastrado')) {
        console.error('O trigger está detectando email duplicado.');
      } else if (error.code === '42501' || error.message.includes('permission denied')) {
        console.error('Permissão negada. Verifique as políticas RLS.');
      } else if (error.code === '42883' || error.message.includes('function') || error.message.includes('does not exist')) {
        console.error('Função não existe no banco de dados. Pode ser um problema com o trigger.');
      }
    } else if (!data || data.length === 0) {
      console.warn('⚠️ Nenhum erro retornado, mas nenhum dado foi retornado também.');
    } else {
      console.log(`✅ Email "${testEmail}" inserido com sucesso!`);
      console.log('Dados inseridos:', data);
    }
  } catch (err) {
    console.error('❌ Exceção não tratada:', err);
    console.error('Mensagem:', err.message);
    console.error('Stack:', err.stack);
  }
}

// Executar o teste
testDetailedInsertion(); 