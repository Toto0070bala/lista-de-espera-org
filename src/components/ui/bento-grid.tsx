import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[20rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl backdrop-blur-sm border border-white/10 sm:h-auto h-80",
      // Dark theme styles
      "bg-gradient-to-b from-[#1c1c1e]/90 to-[#121214]/95 shadow-[0_8px_30px_rgb(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.05)_inset] transition-all duration-500",
      "hover:shadow-[0_15px_40px_-15px_rgba(155,135,245,0.4)] hover:border-purple-light/20",
      "hover:scale-[1.01] hover:-translate-y-1",
      className,
    )}
  >
    {background}
    
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-3 p-6 transition-all duration-300 group-hover:-translate-y-8">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-purple-light/10 border border-purple-light/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-purple-light/20 group-hover:border-purple-light/30">
          <Icon className="h-6 w-6 text-purple-light transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:text-white" />
        </div>
        <h3 className="text-xl font-bold text-white/90 group-hover:text-white transition-colors duration-300">
          {name}
        </h3>
      </div>
      <p className="text-[#E0E0E0] text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button 
        variant="ghost" 
        asChild 
        size="sm" 
        className="pointer-events-auto text-purple-light hover:text-white hover:bg-purple-dark/30 border border-purple-light/20 transition-all duration-300 hover:border-purple-light/40"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#121214]/95 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </div>
);

export { BentoCard, BentoGrid };
