import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Check } from 'lucide-react';
import { toast } from 'sonner';

interface WaitlistCardProps {
  className?: string;
}

const WaitlistCard: React.FC<WaitlistCardProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Por favor, insira um endereço de e-mail válido');
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      toast.error('Por favor, insira um endereço de e-mail válido');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Obrigado por se juntar à nossa lista de espera!');
    }, 1000);
  };

  return (
    <div className={cn("saas-card shadow-[0_10px_30px_rgba(0,0,0,0.3)] p-8 md:p-10", className)}>
      {!isSubmitted ? (
        <>
          <h3 className="text-xl font-bold mb-2 text-[#ffffffcc]">Entre na lista de espera</h3>
          <p className="text-[#ffffff80] mb-6">
            Seja o primeiro a saber quando lançarmos. Obtenha acesso antecipado à nossa plataforma e receba um guia exclusivo sobre investimentos em cripto.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="w-full px-4 py-3 rounded-lg bg-[#2c2c2e]/60 border border-[#ffffff10] text-[#ffffffcc] placeholder:text-[#ffffff40] focus:outline-none focus:ring-2 focus:ring-purple-light/30 transition-all duration-300 premium-input backdrop-blur-[8px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffffff08] to-transparent opacity-0 hover:opacity-100 pointer-events-none rounded-lg" style={{ transform: 'translateY(25%)', height: '50%' }}></div>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg accent-gradient text-[#ffffffcc] font-medium transition-all hover:opacity-90 disabled:opacity-70 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <span>Entrar na Lista de Espera</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </div>
            </button>
          </form>
        </>
      ) : (
        <div className="text-center py-6">
          <div className="mx-auto h-16 w-16 rounded-full bg-purple-light/20 flex items-center justify-center mb-4 animate-pulse-subtle soft-glow">
            <Check className="h-8 w-8 text-purple-light" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[#ffffffcc]">Você está na lista!</h3>
          <p className="text-[#ffffff80]">
            Vamos notificá-lo quando lançarmos. Obrigado pelo seu interesse em revolucionar seus investimentos em criptomoedas.
          </p>
          <div className="mt-6 p-4 rounded-lg glass-effect">
            <p className="text-sm text-[#ffffff80]">
              <span className="font-medium">Dica:</span> Adicione nosso email à sua lista de contatos para garantir que você receba as atualizações importantes.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitlistCard;
