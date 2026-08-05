import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, X, Sparkles, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FloatingButtonsProps {
  onOpenQuoteModal: (presetService?: string) => void;
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({ onOpenQuoteModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWaPopup, setShowWaPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      
      {/* Floating WhatsApp Card Pop-up */}
      {showWaPopup && (
        <div className="pointer-events-auto bg-[#111111] text-white p-5 rounded-2xl border border-white/15 shadow-2xl max-w-xs w-full animate-fade-in relative mb-2">
          <button
            onClick={() => setShowWaPopup(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-white"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center space-x-3 mb-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-[#0066CC] flex items-center justify-center font-bold text-white text-xs">
                JM
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#111111]" />
            </div>
            <div>
              <p className="text-xs font-bold text-white font-['Plus_Jakarta_Sans']">JM SOLUÇÕES</p>
              <p className="text-[10px] text-emerald-400 font-medium">Atendimento Técnico Online</p>
            </div>
          </div>

          <p className="text-xs text-gray-300 font-light leading-snug mb-4">
            Olá! Como podemos ajudar no projeto de esquadrias da sua obra hoje?
          </p>

          <div className="space-y-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20esquadrias.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#0066CC] hover:bg-blue-600 text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
              <span>Iniciar Conversa no WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setShowWaPopup(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-[#2E2E2E] hover:bg-zinc-700 text-gray-200 font-medium py-2 px-3 rounded-lg text-xs transition-colors"
            >
              Formulário de Orçamento
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <div className="pointer-events-auto relative flex items-center group">
        <button
          onClick={() => setShowWaPopup(!showWaPopup)}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-all duration-300 transform hover:scale-110 relative"
          aria-label="Atendimento WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-white/20" />
          
          {/* Online green pulse ring */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-white"></span>
          </span>
        </button>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 rounded-full bg-[#111111] border border-white/20 text-white shadow-xl flex items-center justify-center hover:bg-[#0066CC] hover:border-[#0066CC] transition-all duration-300 transform hover:scale-105"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
};
