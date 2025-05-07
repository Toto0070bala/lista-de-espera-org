import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="pt-12 pb-8 sm:py-12 md:py-16 lg:py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-dark/10 via-background to-background"></div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 sm:mb-6">
            <img src="/logo-purple.png" alt="Frapto.AI logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
            <span className="font-semibold text-[#ffffffcc] text-lg sm:text-xl">Frapto.AI</span>
            </div>
          <p className="text-sm sm:text-base text-[#ffffff80] mb-6 max-w-lg">
              Revolucionando o investimento em criptomoedas com inteligência artificial precisa e personalizada.
            </p>
          <div className="flex items-center gap-4 sm:gap-5">
            <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full glass-effect hover-highlight transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ffffff80]">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full glass-effect hover-highlight transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ffffff80]">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full glass-effect hover-highlight transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ffffff80]">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-[#ffffff10]">
          <div className="text-xs sm:text-sm text-[#ffffff80] mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} Frapto.AI. Todos os direitos reservados.
          </div>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <a href="#" className="text-[#ffffff80] hover:text-[#ffffffcc] transition-colors text-xs sm:text-sm">
              Termos
            </a>
            <a href="#" className="text-[#ffffff80] hover:text-[#ffffffcc] transition-colors text-xs sm:text-sm">
              Privacidade
            </a>
            <a href="#" className="text-[#ffffff80] hover:text-[#ffffffcc] transition-colors text-xs sm:text-sm">
              Cookies
            </a>
            
            <button 
              onClick={scrollToTop}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full glass-effect hover:border-purple-light/20 hover:shadow-[0_0_10px_rgba(155,135,245,0.12)] transition-all ml-2"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={16} className="text-[#ffffff80]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
