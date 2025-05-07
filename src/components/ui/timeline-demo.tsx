"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

export function TimelineDemo() {
  const data = [
    {
      title: "Agente Analista de Mercado",
      content: (
        <div className="backdrop-blur-lg bg-[#1c1c1e]/20 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] group">
          <div className="flex items-start gap-3 sm:gap-5 mb-5 sm:mb-8">
            <div className="h-10 w-10 sm:h-14 sm:w-14 relative flex-shrink-0">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-lg group-hover:blur-md transition-all duration-500"></div>
              <div className="relative h-full w-full rounded-full bg-[#1c1c1e]/70 flex items-center justify-center border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 sm:w-5 sm:h-5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 tracking-tight group-hover:text-white/90 transition-colors duration-300">Análise de Mercado 24/7</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Processa milhões de dados diariamente para antecipar movimentos e identificar oportunidades de alto potencial antes do mercado.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-4 sm:mb-6">
            <motion.div 
              whileHover={{ y: -3 }}
              className="backdrop-blur-md bg-[#1c1c1e]/30 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/15 flex flex-col items-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="font-bold text-xl sm:text-3xl text-white/90 mb-1 sm:mb-2 transition-colors duration-300">+27</div>
              <p className="text-[10px] sm:text-xs text-white/60 text-center font-medium">Indicadores analisados em tempo real</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -3 }}
              className="backdrop-blur-md bg-[#1c1c1e]/30 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/15 flex flex-col items-center shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="font-bold text-xl sm:text-3xl text-white/90 mb-1 sm:mb-2 transition-colors duration-300">95%</div>
              <p className="text-[10px] sm:text-xs text-white/60 text-center font-medium">Taxa de acerto nas previsões</p>
            </motion.div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
            <div className="absolute inset-0 bg-white/5 blur-lg opacity-20 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-md bg-[#1c1c1e]/30 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300">
              <div className="flex items-center gap-2 sm:gap-3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 sm:w-5 sm:h-5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m12 16 4-4-4-4"></path>
                  <path d="M8 12h8"></path>
                </svg>
                <p className="text-xs sm:text-sm font-medium text-white/80">Algoritmos treinados com 10+ anos de dados e validados em condições extremas</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Agente de Gerenciamento de Risco",
      content: (
        <div className="backdrop-blur-lg bg-[#1c1c1e]/20 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] group">
          <div className="flex items-start gap-3 sm:gap-5 mb-5 sm:mb-8">
            <div className="h-10 w-10 sm:h-14 sm:w-14 relative flex-shrink-0">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-lg group-hover:blur-md transition-all duration-500"></div>
              <div className="relative h-full w-full rounded-full bg-[#1c1c1e]/70 flex items-center justify-center border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 sm:w-5 sm:h-5">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 tracking-tight group-hover:text-white/90 transition-colors duration-300">Proteção Patrimonial</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Protege seu capital com sistema adaptativo que se ajusta à volatilidade, evitando perdas significativas em eventos imprevisíveis.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mb-4 sm:mb-6">
            <motion.div 
              whileHover={{ y: -3 }}
              className="backdrop-blur-md bg-[#1c1c1e]/30 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#1c1c1e]/70 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 sm:w-5 sm:h-5">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white/80">Volatilidade controlada</p>
                  <p className="text-[10px] sm:text-xs text-white/60 mt-0.5 sm:mt-1">-76% de drawdown máximo</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -3 }}
              className="backdrop-blur-md bg-[#1c1c1e]/30 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="flex flex-row sm:flex-col items-center sm:items-start gap-3">
                <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#1c1c1e]/70 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 sm:w-5 sm:h-5">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white/80">Alocação otimizada</p>
                  <p className="text-[10px] sm:text-xs text-white/60 mt-0.5 sm:mt-1">Maximiza retorno vs. risco</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
            <div className="absolute inset-0 bg-white/5 blur-lg opacity-20 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-md bg-[#1c1c1e]/30 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300">
              <div className="flex items-center justify-between gap-2">
                <span className="text-white/70 text-xs sm:text-sm font-medium">Testes com dados históricos</span>
                <span className="text-white/90 text-sm sm:text-base font-semibold">5+ anos</span>
              </div>
              <div className="w-full h-2 sm:h-3 bg-white/5 rounded-full overflow-hidden mt-2 sm:mt-3">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-full bg-white/20 rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Agente de Execução de Operações",
      content: (
        <div className="backdrop-blur-lg bg-[#1c1c1e]/20 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] group">
          <div className="flex items-start gap-3 sm:gap-5 mb-5 sm:mb-8">
            <div className="h-10 w-10 sm:h-14 sm:w-14 relative flex-shrink-0">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-lg group-hover:blur-md transition-all duration-500"></div>
              <div className="relative h-full w-full rounded-full bg-[#1c1c1e]/70 flex items-center justify-center border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 sm:w-5 sm:h-5">
                  <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"></path>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  <path d="M16 19h6"></path>
                  <path d="M19 16v6"></path>
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 tracking-tight group-hover:text-white/90 transition-colors duration-300">Execução Precisa</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Sistema executa transações em microssegundos, otimizando cada operação para maximizar ganhos e minimizar custos.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
            <motion.div 
              whileHover={{ y: -3 }}
              className="backdrop-blur-md bg-[#1c1c1e]/30 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 text-center hover:border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="text-lg sm:text-2xl font-bold text-white/90 mb-0.5 sm:mb-1 transition-colors duration-300">0.2<span className="text-xs sm:text-sm align-top text-white/70">ms</span></div>
              <p className="text-[8px] sm:text-[11px] text-white/60 font-medium">Tempo de resposta</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -3 }}
              className="backdrop-blur-md bg-[#1c1c1e]/30 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 text-center hover:border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="text-lg sm:text-2xl font-bold text-white/90 mb-0.5 sm:mb-1 transition-colors duration-300">24/7</div>
              <p className="text-[8px] sm:text-[11px] text-white/60 font-medium">Monitoramento</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -3 }}
              className="backdrop-blur-md bg-[#1c1c1e]/30 p-2 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 text-center hover:border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="text-lg sm:text-2xl font-bold text-white/90 mb-0.5 sm:mb-1 transition-colors duration-300">+32<span className="text-xs sm:text-sm text-white/70">%</span></div>
              <p className="text-[8px] sm:text-[11px] text-white/60 font-medium">Melhoria em slippage</p>
            </motion.div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
            <div className="absolute inset-0 bg-white/5 blur-lg opacity-20 transition-opacity duration-500"></div>
            <div className="relative backdrop-blur-md bg-[#1c1c1e]/30 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-all duration-300">
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <span className="text-white/70 text-xs sm:text-sm font-medium">Eficiência de execução</span>
                <span className="text-white/90 text-sm sm:text-base font-semibold">98.7%</span>
              </div>
              <div className="w-full h-2 sm:h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "98.7%" }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-full bg-white/20 rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section className="w-full relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/5 to-transparent pointer-events-none"></div>
      <Timeline data={data} />
    </section>
  );
} 