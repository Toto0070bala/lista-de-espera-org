"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const widthTransform = useTransform(scrollYProgress, [0, 1], [2, 3]);
  const glowTransform = useTransform(scrollYProgress, [0, 1], [0, 1.5]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(
      Math.floor(latest * data.length + 0.2),
      data.length - 1
    );
    if (newIndex >= 0 && latest > 0.01) {
      setActiveIndex(newIndex);
    } else {
      setActiveIndex(-1);
    }
  });

  return (
    <div
      className="w-full bg-[#121214] font-sans md:px-10 overflow-hidden relative pt-0"
      ref={containerRef}
    >
      <motion.div 
        className="absolute inset-0 opacity-20 bg-gradient-radial from-purple-dark/10 to-transparent"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0.1]),
        }}
      />

      <div className="max-w-7xl mx-auto py-6 sm:py-10 px-4 md:px-8 lg:px-10 relative">
        {/* Título e subtítulo removidos conforme solicitado */}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10 sm:pb-20">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-6 sm:pt-10 md:pt-40 md:gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: activeIndex >= index ? 1 : 0.4, 
              y: activeIndex >= index ? 0 : 20,
              transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-24 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <motion.div 
                className="h-10 sm:h-12 absolute left-1 sm:left-2 md:left-2 w-10 sm:w-12 rounded-full bg-[#1c1c1e]/80 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] border border-white/5"
                animate={{
                  scale: activeIndex === index ? 1.1 : 1,
                  borderColor: activeIndex === index ? "rgba(155, 135, 245, 0.3)" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: activeIndex === index ? "0 0 25px rgba(155, 135, 245, 0.15)" : "0 0 20px rgba(0,0,0,0.3)",
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div 
                  className="h-4 w-4 sm:h-5 sm:w-5 rounded-full purple-gradient"
                  animate={{ 
                    scale: activeIndex === index ? 1.2 : 1,
                    boxShadow: activeIndex === index ? "0 0 15px rgba(155, 135, 245, 0.5)" : "none",
                    transition: { duration: 0.5 }
                  }}
                />
              </motion.div>
              <motion.h3 
                className="hidden md:block text-xl md:text-3xl font-bold tracking-tight text-white md:pl-20"
                animate={{
                  opacity: activeIndex === index ? 1 : 0.6,
                  x: activeIndex === index ? 0 : -5,
                  transition: { duration: 0.5 }
                }}
              >
                {item.title}
              </motion.h3>
            </div>

            <motion.div 
              className="relative pl-14 sm:pl-16 md:pl-4 pr-2 sm:pr-4 md:pr-4 w-full"
              animate={{
                opacity: activeIndex === index ? 1 : 0.6,
                scale: activeIndex === index ? 1 : 0.98,
                transition: { duration: 0.5 }
              }}
            >
              <h3 className="md:hidden block text-lg sm:text-2xl mb-3 sm:mb-6 text-left font-bold tracking-tight text-white">
                {item.title}
              </h3>
              {item.content}
            </motion.div>
          </motion.div>
        ))}
        
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-5 sm:left-6 md:left-8 top-0 overflow-hidden w-[2px] sm:w-[3px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/5 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              width: widthTransform,
            }}
            className="absolute inset-x-0 top-0 bg-gradient-to-t from-purple-light via-purple to-transparent from-[0%] via-[15%] rounded-full"
          />
          
          <motion.div 
            style={{
              height: 30,
              width: 30,
              top: heightTransform,
              left: -14,
              opacity: opacityTransform,
              boxShadow: useTransform(
                glowTransform, 
                (value) => `0 0 ${15 * value}px ${8 * value}px rgba(155, 135, 245, 0.${3 * value})`
              ),
            }}
            className="absolute rounded-full bg-purple-light/10 blur-xl pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}; 