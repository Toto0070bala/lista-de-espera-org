import React, { useEffect, useRef } from 'react';
import { ArrowRight, Brain, Target, BarChart3 } from 'lucide-react';

const FeatureSection = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const features = featuresRef.current?.querySelectorAll('.feature-card');
    features?.forEach((feature) => observer.observe(feature));

    return () => {
      features?.forEach((feature) => observer.unobserve(feature));
    };
  }, []);

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <div className="inline-block px-3 py-1 mb-4 sm:mb-6 rounded-full glass-effect border-[#ffffff10]">
            <span className="text-xs font-medium text-purple-light">Tecnologia Exclusiva</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient">
            Agentes IA treinados para potencializar seus lucros
          </h2>
          <p className="text-sm sm:text-base text-[#ffffff80]">
            Nossa plataforma utiliza inteligência artificial avançada para analisar o mercado e tomar decisões precisas de investimento em criptomoedas.
          </p>
        </div>
        
        <div 
          ref={featuresRef} 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          <div className="feature-card opacity-0 glass-effect p-6 sm:p-8 rounded-xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.25)] hover:border-[#ffffff15] blur-glow">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg purple-gradient flex items-center justify-center mb-4 sm:mb-6 shadow-[0_0_15px_rgba(155,135,245,0.2)]">
              <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-[#ffffffcc]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#ffffffcc]">Análise Inteligente</h3>
            <p className="text-sm sm:text-base text-[#ffffff80] mb-4 sm:mb-6">
              Agentes de IA autônomos analisam continuamente o mercado, identificando padrões e oportunidades invisíveis ao olho humano.
            </p>
            <button className="flex items-center gap-1 text-xs sm:text-sm text-[#ffffff80] hover:text-[#ffffffcc] transition-colors">
              <span>Saiba mais</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </div>
          
          <div className="feature-card opacity-0 glass-effect p-6 sm:p-8 rounded-xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.25)] hover:border-[#ffffff15] blur-glow" style={{ transitionDelay: '0.1s' }}>
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg purple-gradient flex items-center justify-center mb-4 sm:mb-6 shadow-[0_0_15px_rgba(155,135,245,0.2)]">
              <Target className="h-5 w-5 sm:h-6 sm:w-6 text-[#ffffffcc]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#ffffffcc]">Perfil Personalizado</h3>
            <p className="text-sm sm:text-base text-[#ffffff80] mb-4 sm:mb-6">
              Estratégias de investimento totalmente adaptadas ao seu perfil de risco e metas financeiras específicas.
            </p>
            <button className="flex items-center gap-1 text-xs sm:text-sm text-[#ffffff80] hover:text-[#ffffffcc] transition-colors">
              <span>Saiba mais</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </div>
          
          <div className="feature-card opacity-0 glass-effect p-6 sm:p-8 rounded-xl transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.25)] hover:border-[#ffffff15] blur-glow sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none md:mx-0" style={{ transitionDelay: '0.2s' }}>
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg purple-gradient flex items-center justify-center mb-4 sm:mb-6 shadow-[0_0_15px_rgba(155,135,245,0.2)]">
              <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-[#ffffffcc]" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#ffffffcc]">Execução Precisa</h3>
            <p className="text-sm sm:text-base text-[#ffffff80] mb-4 sm:mb-6">
              Operações executadas exatamente nos momentos mais favoráveis, maximizando o potencial de retorno de seus investimentos.
            </p>
            <button className="flex items-center gap-1 text-xs sm:text-sm text-[#ffffff80] hover:text-[#ffffffcc] transition-colors">
              <span>Saiba mais</span>
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
          </div>
        </div>
        
        <div className="mt-10 sm:mt-16 text-center">
          <a href="#waitlist" className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md glass-effect hover-highlight text-[#ffffffcc] text-sm sm:text-base font-medium transition-all">
            <span>Ver Todos os Recursos</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
