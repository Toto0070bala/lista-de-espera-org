// Script para testar a conexão com o Supabase
import { createClient } from '@supabase/supabase-js';

// URL e chave anônima do Supabase
const supabaseUrl = 'https://kantyhlatszzrhqxfecr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthbnR5aGxhdHN6enJocXhmZWNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMzkzNDUsImV4cCI6MjA2MTgxNTM0NX0.za5zHQw4unrpCl5Nc25D9CFE_AP9FiBVcLhXAs63MC4';

// Criar cliente Supabase
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Função para testar a conexão
async function testConnection() {
  console.log('Testando conexão com o Supabase...');
  
  try {
    // Testar se conseguimos acessar a tabela emails
    const { data, error } = await supabase
      .from('emails')
      .select('*')
      .limit(5);
    
    if (error) {
      console.error('❌ Erro ao consultar tabela emails:', error);
      
      // Verificar se é um problema de permissão
      if (error.code === '42501' || error.message.includes('permission denied')) {
        console.error('O problema parece ser de permissão. Verifique as políticas RLS na tabela.');
      }
      
      // Verificar se é um problema de tabela não encontrada
      if (error.code === '42P01' || error.message.includes('relation') || error.message.includes('not exist')) {
        console.error('A tabela "emails" parece não existir. Você precisa criar a tabela primeiro.');
      }
    } else {
      console.log('✅ Conexão bem-sucedida!');
      console.log(`Encontrados ${data.length} registros na tabela emails:`);
      console.log(data);
      
      // Testar inserção
      await testInsertion();
    }
  } catch (err) {
    console.error('❌ Erro ao testar conexão:', err);
  }
}

// Função para testar inserção
async function testInsertion() {
  console.log('\nTestando inserção de dados...');
  
  const testEmail = `test${Date.now()}@example.com`;
  
  try {
    const { data, error } = await supabase
      .from('emails')
      .insert([
        { 
          email: testEmail, 
          origem: 'test',
          metadata: { teste: true } 
        }
      ])
      .select();
    
    if (error) {
      console.error('❌ Erro ao inserir email de teste:', error);
      
      // Verificar erros comuns
      if (error.code === '23505' || error.message.includes('duplicate key') || error.message.includes('unique constraint')) {
        console.error('Erro de duplicação. O email já existe na tabela.');
      } else if (error.message.includes('já cadastrado')) {
        console.error('A função de trigger está detectando email duplicado.');
      } else if (error.code === '42501' || error.message.includes('permission denied')) {
        console.error('Permissão negada. Verifique as políticas de inserção (RLS) na tabela.');
      }
    } else {
      console.log(`✅ Email de teste "${testEmail}" inserido com sucesso!`);
      console.log('Dados inseridos:', data);
    }
  } catch (err) {
    console.error('❌ Erro ao testar inserção:', err);
  }
}

// Executar o teste de conexão
testConnection(); 