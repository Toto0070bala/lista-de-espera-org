import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { GetStartedButton } from "@/components/ui/get-started-button";
import { useBreakpoint } from '@/hooks/use-mobile';

const HeroSection = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const isSmallMobile = useBreakpoint('sm');

  const terminalLines = [
    { text: '$ iniciar análise_mercado.crypto', className: 'text-green-400' },
    { text: '→ Analisando mercado de criptomoedas...', className: 'text-[#ffffffcc]' },
    { text: '✓ Oportunidade detectada: BTC em ponto de entrada favorável', className: 'text-purple-light' },
    { text: '→ Avaliando padrões técnicos e sentimento de mercado...', className: 'text-[#ffffffcc]' },
    { text: '✓ Análise concluída: Recomendação de compra gerada', className: 'text-purple-light' },
    { text: '→ Executando estratégia personalizada para perfil conservador', className: 'text-[#ffffffcc]' },
    { text: 'trader@ai-crypto:~$', className: 'text-purple-light' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) return;
    
    const currentLine = terminalLines[currentLineIndex].text;
    let i = 0;
    
    const typingInterval = setInterval(() => {
      if (i < currentLine.length) {
        setTypedText(prev => prev + currentLine.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        
        setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setTypedText('');
        }, currentLineIndex === terminalLines.length - 1 ? 1000 : 300);
      }
    }, 30);
    
    return () => clearInterval(typingInterval);
  }, [currentLineIndex]);

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#121214]">
        <div className="absolute inset-0 grid-background"></div>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-dark/20 via-background to-background"></div>
      
      <div className="container relative z-10 px-2 sm:px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-full sm:max-w-5xl mx-auto">
          <div className="inline-block px-4 sm:px-6 py-1.5 mb-6 sm:mb-6 sm:mb-8 rounded-full glass-effect border-[#ffffff15] animate-fade-in rotating-light" style={{ animationDelay: '0.1s' }}>
            <span className="text-sm sm:text-base font-semibold text-purple-light tracking-wide">Vagas Limitadas — Reserve sua Vaga</span>
          </div>
          
          <h1 className="w-full text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-8 sm:mb-6 sm:mb-8 text-gradient animate-fade-in tracking-tight leading-[1.15] sm:leading-[1.1]" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block">Maximize seus ganhos em</span>{' '}
            <span className="inline-block">criptomoedas com inteligência</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#ffffff95] mb-10 sm:mb-8 sm:mb-12 max-w-3xl animate-fade-in leading-relaxed px-2 italic font-light" style={{ animationDelay: '0.3s' }}>
            Nosso time de inteligências artificiais treinadas analisa o mercado 24/7, identifica oportunidades e executa operações 
            para maximizar seus ganhos com segurança.
          </p>
          
          <div className="flex items-center mb-16 sm:mb-16 sm:mb-20 w-full animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#waitlist" className="w-full max-w-[280px] sm:max-w-[400px] mx-auto">
              <GetStartedButton className="w-full text-lg sm:text-xl font-bold py-6 sm:py-8 shadow-[0_0_25px_rgba(155,135,245,0.5)]" />
            </a>
          </div>
        </div>
        
        <div 
          ref={terminalRef} 
          className="max-w-3xl mx-auto rounded-xl border border-[#ffffff15] shadow-[0_15px_40px_rgba(0,0,0,0.35)] overflow-hidden animated-border saas-card h-[280px] sm:h-[320px] md:h-[360px]"
        >
          <div className="bg-[#1c1c1e]/90 backdrop-blur-[8px] p-1.5 border-b border-[#ffffff10]">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
          </div>
          
          <div className="bg-[#1c1c1e]/60 backdrop-blur-[8px] text-xs sm:text-sm p-3 sm:p-4 md:p-6 text-left font-mono overflow-y-auto h-[calc(100%-2.5rem)]">
            <div className="min-h-full">
              {terminalLines.slice(0, currentLineIndex).map((line, index) => (
                <div key={index} className={line.className + " mb-1.5 whitespace-pre-wrap break-words"}>{line.text}</div>
              ))}
              
              {currentLineIndex < terminalLines.length && (
                <div className={terminalLines[currentLineIndex].className + " mb-1.5 whitespace-pre-wrap break-words"}>
                  {typedText}
                  <span className="animate-pulse ml-1">|</span>
                </div>
              )}
              
              {currentLineIndex === terminalLines.length && (
                <div className="flex items-center">
                  <span className="text-purple-light mr-2">trader@ai-crypto:~$</span>
                  <span className="animate-pulse">|</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
