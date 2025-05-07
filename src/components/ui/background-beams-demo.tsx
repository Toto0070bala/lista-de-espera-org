"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { ArrowRight, Loader2, Check, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

function BackgroundBeamsDemo() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@') || !email.includes('.')) {
      toast.error('Por favor, insira um endereço de e-mail válido');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase
        .from('emails')
        .insert([
          { 
            email, 
            origem: 'waitlist',
            metadata: { 
              fonte: 'hero_section',
              data_inscricao: new Date().toISOString(),
              pagina: window.location.pathname,
              utm: window.location.search
            } 
          }
        ]);
        
      if (error) {
        if (error.message.includes('já cadastrado')) {
          toast('Você já está na nossa lista de espera!', {
            icon: <Check className="h-4 w-4 text-green-500" />
          });
        } else {
          console.error('Erro ao cadastrar na waitlist:', error);
          toast.error('Erro ao processar sua solicitação. Tente novamente mais tarde.');
        }
      } else {
        toast.success('Obrigado por se juntar à nossa lista de espera!');
        setEmail("");
      }
    } catch (err) {
      console.error('Erro ao processar inscrição:', err);
      toast.error('Erro ao processar sua solicitação. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="h-auto min-h-[40rem] w-full rounded-md bg-[#121214] relative flex flex-col items-center justify-center antialiased py-16 md:py-24">
      <div className="max-w-3xl mx-auto p-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 mb-6 rounded-full glass-effect border-[#ffffff10]">
            <span className="text-xs font-medium text-purple-light">Vagas Limitadas</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient leading-tight">
            Seja o primeiro a revolucionar seus investimentos em cripto
          </h1>
          
          <p className="text-base md:text-lg text-[#ffffff80] max-w-2xl mx-auto mb-10">
            Nossa lista de espera está se preenchendo rapidamente. Reserve seu lugar agora para ter acesso antecipado à nossa plataforma e benefícios exclusivos.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="relative group">
            <div className="relative flex items-center">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="bg-[#1c1c1e]/60 backdrop-blur-md border-white/10 text-white pr-32 h-14 rounded-full placeholder:text-white/40 focus:border-purple-light/30 focus-visible:ring-purple-light/20 focus-visible:ring-offset-0"
                disabled={isSubmitting}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-1.5 h-11 bg-purple-light hover:bg-purple-light/90 text-white font-medium rounded-full px-6 transition-all flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(155,135,245,0.4)] scale-105"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Entrar <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                )}
              </button>
            </div>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 group-hover:bg-purple-light/5 blur-xl"></div>
          </form>
          
          <div className="mt-6 text-left text-sm">
            <p className="text-[#ffffff90] mb-3">Ao entrar na lista, você garante:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-[#ffffff80]">
                <Check className="h-4 w-4 text-green-400" />
                <span>Acesso antecipado à plataforma</span>
              </li>
              <li className="flex items-center gap-2 text-[#ffffff80]">
                <Check className="h-4 w-4 text-green-400" />
                <span>Desconto de 30% na primeira mensalidade</span>
              </li>
              <li className="flex items-center gap-2 text-[#ffffff80]">
                <Check className="h-4 w-4 text-green-400" />
                <span>Convite para nossa comunidade beta</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 text-center text-sm text-[#ffffff80]">
            Ao entrar na lista de espera, você concorda com nossos
            <div className="mt-1 flex items-center justify-center gap-4">
              <a href="#" className="text-purple-light hover:text-purple-light/90 underline underline-offset-2">Termos de Serviço</a>
              <a href="#" className="text-purple-light hover:text-purple-light/90 underline underline-offset-2">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export { BackgroundBeamsDemo }; 