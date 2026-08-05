import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FinalCTAProps {
  onOpenQuoteModal: (presetService?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative py-28 bg-[#111111] text-white overflow-hidden">
      {/* High-res background with rich dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Projeto JM SOLUÇÕES"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/75 z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center sm:text-left">
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center space-x-2 bg-[#0066CC]/20 border border-[#0066CC]/40 px-4 py-2 rounded-full mb-6 text-xs font-bold text-blue-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultoria Técnica Gratuita em Esquadrias</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.1]">
            Vamos Transformar Seu Projeto em Realidade?
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 font-light leading-relaxed">
            Entre em contato hoje mesmo com nossa engenharia. Receba uma análise personalizada dos vãos do seu projeto e garanta acabamento de luxo com 10 anos de garantia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#0066CC] hover:bg-blue-600 text-white font-bold text-base px-9 py-4 rounded-xl shadow-2xl shadow-blue-600/40 transition-all duration-300 flex items-center justify-center space-x-3 group transform hover:-translate-y-1"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20direto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2E2E2E]/90 hover:bg-zinc-700 text-white font-bold text-base px-8 py-4 rounded-xl border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-3 transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Quick info badges */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs font-semibold text-gray-400">
            <span className="flex items-center text-gray-300">
              <ShieldCheck className="w-4 h-4 text-[#0066CC] mr-1.5" />
              Garantia de 10 Anos NBR
            </span>
            <span>•</span>
            <span className="flex items-center text-gray-300">
              <Phone className="w-4 h-4 text-[#0066CC] mr-1.5" />
              Retorno Comercial em <span className="text-white ml-1 font-bold">menos de 2 horas</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
