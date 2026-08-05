import React, { useState } from 'react';
import { SERVICES_CATEGORIES } from '../data/companyData';
import { ServiceCategory } from '../types';
import { ArrowRight, Check, Sparkles, Shield, Wrench, Building2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceModal: (category: ServiceCategory) => void;
  onOpenQuoteModal: (presetService?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceModal,
  onOpenQuoteModal
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories = activeTab === 'all' 
    ? SERVICES_CATEGORIES 
    : SERVICES_CATEGORIES.filter(c => c.id === activeTab);

  return (
    <section id="servicos" className="py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0066CC]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-[#0066CC]/10 px-3 py-1.5 rounded-md border border-[#0066CC]/20">
              Serviços Especializados
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight font-['Plus_Jakarta_Sans']">
              Soluções Integrais em Alumínio e Vidro
            </h2>
            <p className="text-lg text-gray-400 mt-3 max-w-2xl font-light">
              Do projeto executivo à fabricação própria e manutenção preventiva com padrões internacionais de caixilharia.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-[#2E2E2E]/60 p-1.5 rounded-xl border border-white/10 w-fit">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'all' 
                  ? 'bg-[#0066CC] text-white shadow-md' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Todos os Serviços
            </button>
            {SERVICES_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === cat.id 
                    ? 'bg-[#0066CC] text-white shadow-md' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Big Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="relative group rounded-2xl overflow-hidden bg-[#2E2E2E] border border-white/10 hover:border-[#0066CC] transition-all duration-500 flex flex-col justify-between h-full shadow-2xl hover:shadow-[#0066CC]/20"
            >
              {/* Background Image with Dark Gradient Overlay */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2E] via-[#2E2E2E]/60 to-black/30" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-xs font-bold text-blue-400 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{category.badge}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between -mt-12 relative z-10">
                <div>
                  <h3 className="text-2xl font-black text-white font-['Plus_Jakarta_Sans'] group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-light mt-2 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-6 space-y-2.5 pt-4 border-t border-white/10">
                    {category.items.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-gray-200">
                        <div className="w-4 h-4 rounded-full bg-[#0066CC]/20 border border-[#0066CC]/40 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="font-medium line-clamp-1">{item.name}</span>
                      </div>
                    ))}
                    {category.items.length > 4 && (
                      <p className="text-[11px] text-gray-400 italic pl-6">
                        + {category.items.length - 4} outros serviços inclusos...
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectServiceModal(category)}
                    className="flex-1 bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group/btn border border-white/10"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(category.title)}
                    className="bg-[#0066CC] hover:bg-blue-600 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 shrink-0"
                  >
                    Orçar
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
