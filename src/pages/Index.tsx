import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import { HeroScrollDemo } from '@/components/ui/hero-scroll-demo';
import { TimelineDemo } from '@/components/ui/timeline-demo';
import { BentoDemo } from '@/components/ui/bento-demo';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    document.body.classList.add('loaded');
    return () => {
      document.body.classList.remove('loaded');
    };
  }, []);

  // Dados do gráfico de investimentos
  const investmentData = [
    { month: 'Jan', valor: 4000 },
    { month: 'Fev', valor: 3800 },
    { month: 'Mar', valor: 5200 },
    { month: 'Abr', valor: 5800 },
    { month: 'Mai', valor: 6800 },
    { month: 'Jun', valor: 7200 },
    { month: 'Jul', valor: 8900 },
    { month: 'Ago', valor: 9500 },
    { month: 'Set', valor: 11000 },
    { month: 'Out', valor: 10800 },
    { month: 'Nov', valor: 12500 },
    { month: 'Dez', valor: 14000 },
  ];

  const chartConfig = {
    valor: {
      label: 'Valor do Investimento',
      color: '#9b87f5',
    },
  };

  return <div className="min-h-screen bg-[#121214] text-white/90">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Estilos CSS locais para o efeito de reflexo */}
        <style>{`
          .glow-effect {
            position: relative;
            overflow: hidden;
          }
          
          .glow-effect::before {
            content: '';
            position: absolute;
            top: 0;
            width: 100px;
            height: 100%;
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.05) 50%,
              rgba(255, 255, 255, 0) 100%
            );
            transform: skewX(-15deg) translateX(-150%);
            animation: shine 3s infinite;
            pointer-events: none;
          }
          
          @keyframes shine {
            0% {
              transform: skewX(-15deg) translateX(-150%);
            }
            25% {
              transform: skewX(-15deg) translateX(150%);
            }
            100% {
              transform: skewX(-15deg) translateX(150%);
            }
          }
          
          .glow-effect-delayed::before {
            animation-delay: 1s;
          }
          
          .glow-effect-delayed-more::before {
            animation-delay: 2s;
          }
          
          .glow-effect-chart::before {
            width: 150px;
            background: linear-gradient(
              to right,
              rgba(255, 255, 255, 0) 0%,
              rgba(155, 135, 245, 0.07) 50%,
              rgba(255, 255, 255, 0) 100%
            );
          }
        `}</style>
        
        {/* Technology Section com fundo gradiente */}
        <section id="analise-personalizada" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-dark/5 via-background to-background"></div>
          
          <div className="container relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 text-gradient leading-tight">Análise Personalizada e Precisão Algorítmica</h2>
                  <p className="text-base md:text-lg text-white/70 mb-8 md:mb-10 leading-relaxed">
                    Nossa tecnologia utiliza agentes de IA que analisam o mercado cripto 24 horas por dia, identificando padrões que investidores humanos normalmente não percebem.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="glow-effect rounded-2xl p-5 lg:p-6 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.03] hover:border-purple-light/10 backdrop-blur-md will-change-transform">
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-light/20 to-purple-dark/20 border border-purple-light/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-light">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white/90 mb-2">Perfil de Investimento Personalizado</h3>
                          <p className="text-white/70 leading-relaxed">Cada estratégia é adaptada ao seu perfil. A IA se ajusta às suas preferências e evolui para otimizar seu portfólio conforme seus objetivos financeiros.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glow-effect rounded-2xl p-5 lg:p-6 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.03] hover:border-purple-light/10 backdrop-blur-md will-change-transform">
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-light/20 to-purple-dark/20 border border-purple-light/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-light">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white/90 mb-2">Análise de Mercado em Tempo Real</h3>
                          <p className="text-white/70 leading-relaxed">Monitoramento contínuo de mais de 27 indicadores técnicos e fundamentalistas para identificar as melhores oportunidades.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glow-effect rounded-2xl p-5 lg:p-6 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.03] hover:border-purple-light/10 backdrop-blur-md will-change-transform">
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-light/20 to-purple-dark/20 border border-purple-light/20 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-light">
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white/90 mb-2">Precisão Algorítmica</h3>
                          <p className="text-white/70 leading-relaxed">Taxa de acerto de 95% nas previsões, resultado de anos de desenvolvimento e milhões de operações analisadas.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-light/20 to-purple-dark/20 rounded-2xl blur-md opacity-60"></div>
                    <div className="relative bg-[#1a1a1c] rounded-2xl overflow-hidden backdrop-blur-sm">
                      <div className="flex items-center justify-between px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                          <h3 className="text-lg font-semibold text-white/95">Análise de Crescimento</h3>
                        </div>
                        <div className="flex items-center gap-1.5 bg-[#1e1e22] border border-green-500/10 rounded-full px-3 py-1">
                          <span className="text-sm font-medium text-green-400">+40% ROI</span>
                          <TooltipProvider>
                            <Tooltip delayDuration={0}>
                              <TooltipTrigger asChild>
                                <InfoIcon className="h-3.5 w-3.5 text-green-400/80 ml-0.5 cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent side="top" className="bg-[#1c1c1e] border border-white/10 text-white/90 text-xs max-w-[220px] p-2 shadow-xl">
                                ROI médio anual obtido em backtests no período de 2021 a 2023 com perfil de risco moderado.
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                      
                      <div className="h-64 sm:h-68 px-4 py-4 animate-fadeIn">
                        <ChartContainer config={chartConfig} className="h-full w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={investmentData} margin={{ top: 8, right: 5, bottom: 8, left: 5 }}>
                              <defs>
                                <linearGradient id="colorValor" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.5}/>
                                  <stop offset="95%" stopColor="#9b87f5" stopOpacity={0.02}/>
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="4 4" stroke="#ffffff08" vertical={false} />
                              <XAxis 
                                dataKey="month" 
                                stroke="#6E59A5" 
                                tick={{ fill: '#ffffff70', fontSize: 10 }} 
                                axisLine={{ stroke: '#ffffff08' }}
                                tickLine={false}
                              />
                              <YAxis 
                                stroke="#6E59A5" 
                                tick={{ fill: '#ffffff70', fontSize: 10 }} 
                                axisLine={{ stroke: '#ffffff08' }}
                                tickLine={false}
                                tickFormatter={(value) => `R$${value/1000}k`}
                              />
                              <ChartTooltip 
                                content={
                                  <ChartTooltipContent 
                                    labelFormatter={(label) => `${label}/2023`}
                                    formatter={(value, name) => [
                                      `R$ ${value.toLocaleString()}`, 
                                      'Valor do Investimento'
                                    ]}
                                  />
                                }
                                cursor={{stroke: '#9b87f5', strokeWidth: 1}}
                              />
                              <Area 
                                type="monotone" 
                                dataKey="valor" 
                                stroke="#9b87f5" 
                                strokeWidth={2}
                                fillOpacity={1} 
                                fill="url(#colorValor)" 
                                animationDuration={1500}
                                animationEasing="ease-in"
                                dot={false}
                                activeDot={{ stroke: '#ffffff', fill: '#9b87f5', strokeWidth: 2, r: 4 }}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-px p-0 bg-white/[0.02]">
                        <div className="py-3 px-4 bg-[#1a1a1c]">
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Perfil de Risco</span>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                              <span className="text-sm text-white/90 font-medium">Moderado</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="py-3 px-4 bg-[#1a1a1c]">
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Foco Principal</span>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-light"></div>
                              <span className="text-sm text-white/90 font-medium">DeFi</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="py-3 px-4 bg-[#1a1a1c]">
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Horizonte</span>
                            <div className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                              <span className="text-sm text-white/90 font-medium">Médio-longo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Seção de Resultados que Impressionam */}
        <BentoDemo />
        
        {/* Componente de animação de scroll - Reduzindo o espaçamento */}
        <div className="mt-20 sm:mt-28 md:mt-36 relative z-10 mb-0">
          <HeroScrollDemo />
        </div>
        
        {/* Seção de Agentes IA (Substitui a seção "Tecnologia Exclusiva") */}
        <div className="mt-0">
          <TimelineDemo />
        </div>
        
        <WaitlistForm />
      </main>
      <Footer />
    </div>;
};
export default Index;
