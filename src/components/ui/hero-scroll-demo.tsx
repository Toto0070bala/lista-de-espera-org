import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function HeroScrollDemo() {
  // Usando a imagem local do diretório public
  const imageUrl = "/Sem Título.png";
  
  return (
    <div className="flex flex-col overflow-hidden pb-[30px] sm:pb-[40px] md:pb-[60px] pt-24 sm:pt-32 md:pt-40 relative z-20">
      {/* Adicionando um efeito de brilho atrás da seção */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-purple-light/10 blur-[120px] rounded-full pointer-events-none will-change-transform"></div>
      
      {/* Adicionando um gradiente extra para iluminar o texto */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[30%] bg-purple-400/20 blur-[80px] rounded-full pointer-events-none will-change-transform"></div>
      
      <style>
        {`
          .glow-text {
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.7), 0 0 30px rgba(148, 130, 238, 0.6);
            position: relative;
            z-index: 2;
            color: rgba(255, 255, 255, 0.95);
            display: inline;
            padding: 0 0.2em;
            font-weight: 700;
            background: linear-gradient(to right, #ffffff, #a593e8, #ffffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: pulse 3s infinite;
            will-change: transform, opacity;
          }
          
          @keyframes pulse {
            0%, 100% {
              text-shadow: 0 0 12px rgba(255, 255, 255, 0.6), 0 0 20px rgba(148, 130, 238, 0.5);
            }
            50% {
              text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(148, 130, 238, 0.7);
            }
          }
          
          .section-title {
            letter-spacing: 0.5px;
            text-transform: uppercase;
            position: relative;
            display: inline-block;
            will-change: transform;
          }
          
          .section-title::after {
            content: '';
            position: absolute;
            width: 60%;
            height: 3px;
            background: linear-gradient(to right, #9b87f5, transparent);
            bottom: -8px;
            left: 20%;
            border-radius: 3px;
          }
          
          .hero-paragraph {
            line-height: 1.7;
            font-weight: 400;
            letter-spacing: 0.2px;
            will-change: opacity, transform;
          }
          
          .dashboard-image {
            will-change: transform, opacity, filter;
          }
        `}
      </style>
      
      <ContainerScroll
        titleComponent={
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <span className="section-title text-base md:text-lg text-purple-light mb-2 sm:mb-3 block font-bold">Interface moderna</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-gradient leading-tight will-change-transform">
              Visualize seu Portfólio <br />
              <span className="text-4xl sm:text-5xl md:text-[6rem] font-bold mt-3 sm:mt-4 md:mt-6 leading-none block tracking-tight">
                <span className="glow-text">Com Clareza</span> e Controle
              </span>
            </h2>
            <p className="hero-paragraph text-base sm:text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 px-1 sm:px-0">
              Nossa interface intuitiva oferece visualização completa de seus investimentos, 
              transações e desempenho com análises detalhadas em tempo real para maximizar seus resultados.
            </p>
          </div>
        }
        imageUrl={imageUrl}
      />
    </div>
  );
} 