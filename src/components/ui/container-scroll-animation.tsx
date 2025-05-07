"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue, useSpring, useInView } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
  imageUrl,
}: {
  titleComponent: string | React.ReactNode;
  children?: React.ReactNode;
  imageUrl?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  // Configurações de scroll melhoradas
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Spring mais responsivo para animações mais suaves
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,    // Reduzido para menor rigidez
    damping: 30,      // Ajustado para melhor amortecimento
    mass: 0.5,        // Massa menor para movimento mais leve
    restDelta: 0.001  // Valor que determina quando a animação é considerada completa
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.85, 1] : [0.9, 1.05];
  };

  // Valores de transformação ajustados para animação mais suave
  const rotate = useTransform(
    smoothProgress, 
    [0, 0.2, 0.8, 1], 
    [35, 20, 5, 0]  // Curva mais gradual
  );
  
  const scale = useTransform(
    smoothProgress, 
    [0, 0.2, 0.6, 1], 
    [isMobile ? 0.8 : 0.85, isMobile ? 0.85 : 0.9, isMobile ? 0.95 : 1, isMobile ? 1.02 : 1.08]
  );
  
  const translateY = useTransform(
    smoothProgress, 
    [0, 0.4, 1], 
    [0, -80, -150]  // Movimento mais gradual
  );
  
  // Efeitos visuais mais pronunciados
  const opacity = useTransform(
    smoothProgress, 
    [0, 0.4, 1], 
    [0.5, 0.8, 1]  // Começa mais transparente
  );
  
  const translateX = useTransform(
    smoothProgress, 
    [0, 1], 
    [isMobile ? -25 : -50, 0]  // Movimento lateral maior
  );
  
  const rotateY = useTransform(
    smoothProgress, 
    [0, 1], 
    [isMobile ? 8 : 12, 0]  // Rotação mais acentuada
  );

  return (
    <div
      className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] flex items-center justify-center relative p-2 md:p-20 py-16 sm:py-20 md:py-28"
      ref={containerRef}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-dark/20 via-background to-background"></div>
      
      <motion.div
        className="py-10 sm:py-16 md:py-24 w-full relative z-10 mt-10 sm:mt-16 md:mt-20"
        style={{
          perspective: "1800px",
        }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isInView ? 1 : 0,
          transition: { duration: 0.5, ease: "easeOut" }
        }}
      >
        <Header 
          translateY={translateY} 
          opacity={opacity} 
          translateX={translateX} 
          titleComponent={titleComponent} 
        />
        <Card 
          rotate={rotate} 
          translateY={translateY} 
          scale={scale} 
          rotateY={rotateY} 
          opacity={opacity}
          imageUrl={imageUrl}
        >
          {children}
        </Card>
      </motion.div>
    </div>
  );
};

export const Header = ({ 
  translateY, 
  opacity, 
  translateX, 
  titleComponent
}: {
  translateY: MotionValue<number>;
  opacity: MotionValue<number>;
  translateX: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY,
        opacity,
        translateX,
      }}
      className="div max-w-5xl mx-auto text-center mb-12 sm:mb-14 md:mb-16 relative z-20"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translateY,
  rotateY,
  opacity,
  children,
  imageUrl,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translateY: MotionValue<number>;
  rotateY: MotionValue<number>;
  opacity: MotionValue<number>;
  children?: React.ReactNode;
  imageUrl?: string;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        rotateY,
        scale,
        translateY,
        opacity,
        boxShadow: "0 0 #0000004d, 0 12px 30px #0000004a, 0 45px 45px #00000042, 0 90px 60px #00000026",
        background: "rgba(28, 28, 32, 0.3)",
        backdropFilter: "blur(8px)",
      }}
      className="max-w-5xl mt-5 sm:mt-8 md:mt-10 mx-auto h-[20rem] sm:h-[25rem] md:h-[40rem] w-full border border-[#ffffff35] p-2 md:p-5 rounded-[20px] shadow-xl dashboard-glow"
      whileHover={{ 
        scale: 1.05,  // Maior efeito ao passar o mouse
        rotateX: -5,  // Leve rotação 3D ao passar o mouse
        rotateY: 5,   // Leve rotação 3D ao passar o mouse
        transition: { duration: 0.4, ease: "easeOut" } 
      }}
    >
      <div className="h-full w-full overflow-hidden rounded-xl bg-[#1a1a1c]/20 border border-[#ffffff25] md:rounded-xl md:p-2 flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl}
            alt="Dashboard visual"
            className="w-full h-full object-cover sm:object-contain brightness-125 contrast-110 dashboard-image"
            loading="eager"
            style={{
              filter: "drop-shadow(0 0 10px rgba(155, 135, 245, 0.3))"  // Adiciona um brilho suave à imagem
            }}
          />
        ) : children}
      </div>
    </motion.div>
  );
}; 