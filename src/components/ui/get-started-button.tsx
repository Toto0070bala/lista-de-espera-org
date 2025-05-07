import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface GetStartedButtonProps {
  className?: string;
}

export function GetStartedButton({ className }: GetStartedButtonProps) {
  return (
    <Button 
      className={cn(
        "group relative overflow-hidden w-full sm:w-auto bg-[#2c2c2e]/60 backdrop-blur-[8px] border border-[#ffffff15] text-white py-6 hover:bg-[#2c2c2e]/80 hover:border-purple-light/20 transition-all shadow-[0_4px_20px_-4px_rgba(0,0,0,0.25)]",
        className
      )} 
      size="lg"
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
        Lista de Espera
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-purple-light/10 backdrop-blur-sm group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" className="text-purple-light" />
      </i>
    </Button>
  );
}

export function GetStartedButtonDemo() {
  return <GetStartedButton />
}
