import React from 'react';
import { ServiceCategory } from '../types';
import { X, Check, Sparkles, ShieldCheck, ArrowRight, Wrench, Building2, Factory } from 'lucide-react';

interface ServiceDetailModalProps {
  category: ServiceCategory | null;
  onClose: () => void;
  onOpenQuoteModal: (presetService?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  category,
  onClose,
  onOpenQuoteModal
}) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in">
      <div className="bg-[#111111] border border-white/15 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl relative p-6 sm:p-10 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="mb-6">
          <span className="text-xs font-bold text-[#0066CC] uppercase tracking-widest bg-[#0066CC]/10 px-3 py-1 rounded-md border border-[#0066CC]/20">
            {category.badge}
          </span>
          <h2 className="text-3xl font-extrabold text-white mt-3 font-['Plus_Jakarta_Sans']">
            {category.title}
          </h2>
          <p className="text-sm text-gray-300 font-light mt-1">
            {category.description}
          </p>
        </div>

        {/* Items List */}
        <div className="space-y-6 my-8">
          {category.items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#2E2E2E] border border-white/10 flex flex-col md:flex-row gap-6 items-start"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full md:w-48 h-36 rounded-xl object-cover border border-white/10 shrink-0"
              />

              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans']">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center space-x-2 text-[11px] text-gray-300">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#0066CC]/20 border border-[#0066CC]/40 text-[#0066CC] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <ShieldCheck className="w-4 h-4 text-[#0066CC]" />
            <span>Garantia de 10 Anos NBR 10821 & Suporte Pós-Obra</span>
          </div>

          <button
            onClick={() => {
              const title = category.title;
              onClose();
              onOpenQuoteModal(title);
            }}
            className="w-full sm:w-auto bg-[#0066CC] hover:bg-blue-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2 text-xs"
          >
            <Sparkles className="w-4 h-4" />
            <span>Solicitar Orçamento para {category.title}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
