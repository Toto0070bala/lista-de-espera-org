import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useBreakpoint } from '@/hooks/use-mobile';

const MetricsSection = () => {
  const metricsRef = useRef<HTMLDivElement>(null);
  const [animatedValues, setAnimatedValues] = useState({
    monitoring: 0,
    accuracy: 0,
    return: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const isSmallScreen = useBreakpoint('sm');

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, {
      threshold: 0.1
    });
    const cards = metricsRef.current?.querySelectorAll('.metric-card');
    cards?.forEach(card => observer.observe(card));
    return () => {
      cards?.forEach(card => observer.unobserve(card));
    };
  }, []);

  // Animate the values when section becomes visible
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // Animation duration in ms
      const interval = 15; // Update interval in ms

      const monitoringIncrement = 24 / (duration / interval);
      const accuracyIncrement = 95 / (duration / interval);
      const returnIncrement = 40 / (duration / interval);
      let currentValues = {
        monitoring: 0,
        accuracy: 0,
        return: 0
      };
      const timer = setInterval(() => {
        const newValues = {
          monitoring: Math.min(24, currentValues.monitoring + monitoringIncrement),
          accuracy: Math.min(95, currentValues.accuracy + accuracyIncrement),
          return: Math.min(40, currentValues.return + returnIncrement)
        };
        setAnimatedValues({
          monitoring: Math.round(newValues.monitoring),
          accuracy: Math.round(newValues.accuracy),
          return: Math.round(newValues.return)
        });
        currentValues = newValues;
        if (newValues.monitoring >= 24 && newValues.accuracy >= 95 && newValues.return >= 40) {
          clearInterval(timer);
        }
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  // Add a return statement with JSX
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 relative" ref={metricsRef}>
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient">Resultados que Impressionam</h2>
          <p className="text-sm sm:text-base md:text-lg text-[#ffffff80] max-w-3xl mx-auto">
            Nossa plataforma de investimento alcança resultados notáveis através de monitoramento constante e análise precisa do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <div className="metric-card opacity-0 glass-effect p-6 sm:p-8 rounded-xl border border-[#ffffff10] text-center hover:border-[#ffffff15] transition-all duration-300 blur-glow">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full purple-gradient flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[0_0_15px_rgba(155,135,245,0.2)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#ffffffcc]">
                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 text-gradient">{animatedValues.monitoring}h</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#ffffffcc]">Monitoramento Diário</h3>
            <p className="text-xs sm:text-sm text-[#ffffff80]">Análise contínua do mercado para identificar as melhores oportunidades</p>
          </div>

          <div className="metric-card opacity-0 glass-effect p-6 sm:p-8 rounded-xl border border-[#ffffff10] text-center hover:border-[#ffffff15] transition-all duration-300 blur-glow">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full purple-gradient flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[0_0_15px_rgba(155,135,245,0.2)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#ffffffcc]">
                <path d="M5 22H19M5 22V16M5 22H3M19 22V16M19 22H21M5 16V2H19V16M5 16H19M12 19V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 6H15M9 10H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 text-gradient">{animatedValues.accuracy}%</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#ffffffcc]">Precisão</h3>
            <p className="text-xs sm:text-sm text-[#ffffff80]">Taxa de acerto das nossas operações automatizadas</p>
          </div>

          <div className="metric-card opacity-0 glass-effect p-6 sm:p-8 rounded-xl border border-[#ffffff10] text-center hover:border-[#ffffff15] transition-all duration-300 blur-glow sm:col-span-2 md:col-span-1 mx-auto sm:mx-0 sm:max-w-md md:max-w-none" style={{width: isSmallScreen ? 'calc(100% - 2rem)' : 'auto'}}>
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full purple-gradient flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-[0_0_15px_rgba(155,135,245,0.2)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#ffffffcc]">
                <path d="M12 16L12 8M12 8L8 12M12 8L16 12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 text-gradient">+{animatedValues.return}%</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#ffffffcc]">Retorno Médio</h3>
            <p className="text-xs sm:text-sm text-[#ffffff80]">Rendimento médio anual dos nossos clientes</p>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          <a href="#features" className="inline-flex items-center text-purple-light hover:text-purple transition-colors text-sm sm:text-base">
            <span className="mr-2">Conheça todos os recursos</span>
            <ArrowRight size={isSmallScreen ? 16 : 18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
