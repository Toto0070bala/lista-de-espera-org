import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useIsMobile, useBreakpoint } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const isXSmall = useBreakpoint('xs');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-[#1c1c1e]/80 backdrop-blur-[8px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)] py-2 md:py-3" : "bg-transparent py-3 md:py-4"
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3 md:gap-3">
          <img src="/logo-purple.png" alt="Frapto.AI logo" className="h-11 w-11 md:h-12 md:w-12 object-contain" />
          <span className="font-bold text-[#ffffffee] text-base md:text-xl tracking-tight">Frapto.AI</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          <a 
            href="#analise-personalizada" 
            className="text-sm font-medium text-[#ffffff90] hover:text-[#ffffffee] transition-colors link-underline"
            onClick={(e) => handleLinkClick(e, 'analise-personalizada')}
          >
            Features
          </a>
          <a 
            href="#waitlist" 
            className="text-sm font-medium text-[#ffffff90] hover:text-[#ffffffee] transition-colors link-underline"
            onClick={(e) => handleLinkClick(e, 'waitlist')}
          >
            Entrar na Lista
          </a>
        </nav>
        
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            className="hidden md:flex items-center gap-2 text-sm px-5 py-2.5 rounded-md transition-all duration-200 font-medium glass-effect hover:border-purple-light/20 blur-glow"
            onClick={() => scrollToSection('waitlist')}
          >
            <span className="text-[#ffffffee] font-semibold">Entrar na Lista</span>
            <ArrowRight className="h-4 w-4 text-purple-light" />
          </button>
          
          {/* New Mobile menu button */}
          <button 
            className="md:hidden relative flex flex-col items-center justify-center w-12 h-12 rounded-xl glass-effect border border-[#ffffff15] hover:border-purple-light/30 transition-all duration-300 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            <div className={cn(
              "absolute w-6 h-0.5 bg-[#ffffffee] transition-all duration-300",
              mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            )} />
            <div className={cn(
              "absolute w-6 h-0.5 bg-[#ffffffee] transition-all duration-300",
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            )} />
            <div className={cn(
              "absolute w-6 h-0.5 bg-[#ffffffee] transition-all duration-300",
              mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
            )} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" />
      )}
      
      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={cn(
          "fixed inset-x-0 top-0 h-screen bg-[#1c1c1e]/98 backdrop-blur-xl z-50 transition-all duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full glass-effect border border-[#ffffff15] hover:border-purple-light/30 transition-all"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6 text-[#ffffffee]" />
          </button>

          <div className="flex flex-col h-full justify-start items-center gap-8 px-6 pt-20">
            <a 
              href="#analise-personalizada" 
              className="text-xl font-semibold text-[#ffffffee] py-2 border-b-2 border-transparent hover:border-purple-light/50 transition-all w-full text-center"
              onClick={(e) => handleLinkClick(e, 'analise-personalizada')}
            >
              Features
            </a>
            <a 
              href="#waitlist" 
              className="text-xl font-semibold text-[#ffffffee] py-2 border-b-2 border-transparent hover:border-purple-light/50 transition-all w-full text-center"
              onClick={(e) => handleLinkClick(e, 'waitlist')}
            >
              Entrar na Lista
            </a>
            <button 
              className="mt-8 flex items-center justify-center w-full max-w-[240px] mx-auto gap-2 bg-[#2c2c2e]/80 backdrop-blur-[8px] border border-[#ffffff15] text-[#ffffffee] px-6 py-3.5 rounded-lg transition-all font-semibold shadow-[0_4px_15px_-3px_rgba(0,0,0,0.25)] hover:border-purple-light/30 hover:shadow-[0_0_10px_rgba(155,135,245,0.15)]"
              onClick={() => scrollToSection('waitlist')}
            >
              <span>Entrar na Lista de Espera</span>
              <ArrowRight className="h-5 w-5 text-purple-light" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
