import {
  PieChartIcon,
  TimerIcon,
  CheckCircledIcon,
  BarChartIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: CheckCircledIcon,
    name: "95% de Precisão",
    description: "Nossos algoritmos atingem 95% de precisão nas análises de mercado, resultado de anos de desenvolvimento e milhões de operações analisadas.",
    href: "#waitlist",
    cta: "Saiba mais",
    background: (
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-purple-light/30 blur-2xl"></div>
        <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-purple-dark/40 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 h-16 w-16 rounded-full bg-pink-500/20 blur-xl"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-transparent"></div>
      </div>
    ),
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    Icon: PieChartIcon,
    name: "+40% ROI Anual",
    description: "Rendimento médio anual de 40%, superando em 15% os melhores gestores do mercado tradicional. Resultados verificáveis.",
    href: "#waitlist",
    cta: "Ver histórico",
    background: (
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-8 right-10 h-24 w-24 sm:h-40 sm:w-40 rounded-full bg-green-500/20 blur-xl sm:blur-2xl"></div>
        <div className="absolute -bottom-10 -left-4 h-24 w-24 sm:h-40 sm:w-40 rounded-full bg-emerald-400/15 blur-xl sm:blur-2xl"></div>
        <div className="absolute top-1/3 left-1/4 h-12 w-12 sm:h-20 sm:w-20 rounded-full bg-green-400/20 blur-lg sm:blur-xl"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-green-500/5 via-transparent to-transparent"></div>
      </div>
    ),
    className: "col-span-1 sm:row-span-2",
  },
  {
    Icon: TimerIcon,
    name: "Monitoramento 24/7",
    description: "Nossos agentes realizam mais de 1.500 análises por segundo, identificando padrões de mercado e reagindo a oportunidades em tempo real.",
    href: "#waitlist",
    cta: "Como funciona",
    background: (
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute -bottom-4 -left-4 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl"></div>
        <div className="absolute top-4 right-4 h-32 w-32 rounded-full bg-indigo-400/15 blur-2xl"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-transparent"></div>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    Icon: BarChartIcon,
    name: "78% Menos Risco",
    description: "Estratégia que reduz em 78% as perdas máximas comparadas a métodos tradicionais, preservando seu capital mesmo em condições extremas.",
    href: "#waitlist",
    cta: "Saber mais",
    background: (
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute -bottom-4 -right-4 h-40 w-40 rounded-full bg-purple-light/25 blur-2xl"></div>
        <div className="absolute top-4 left-4 h-28 w-28 rounded-full bg-pink-400/15 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 h-16 w-16 rounded-full bg-purple-400/20 blur-xl"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-500/5 via-transparent to-transparent"></div>
      </div>
    ),
    className: "md:col-span-1",
  },
];

export function BentoDemo() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">Resultados que Impressionam</h2>
          <p className="text-lg text-[#ffffff80] max-w-3xl mx-auto">
            Nossa plataforma entrega desempenho superior através de tecnologia avançada, estratégia rigorosa e execução precisa.
          </p>
        </div>
        
        <BentoGrid className="sm:grid-rows-2 max-w-6xl mx-auto">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
