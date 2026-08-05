import React, { useState, useMemo } from 'react';
import { RENOVATION_SERVICES } from '../data/companyData';
import { RenovationServiceItem } from '../types';
import { 
  Hammer, 
  Wrench, 
  Building, 
  Sparkles, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Droplet, 
  Zap, 
  Layers, 
  Maximize2, 
  Sun, 
  VolumeX, 
  Trash2, 
  Grid, 
  DoorClosed, 
  ShieldAlert, 
  Home, 
  Umbrella, 
  Wind,
  PhoneCall
} from 'lucide-react';

interface RenovationsSectionProps {
  onOpenQuoteModal: (presetService?: string) => void;
}

export const RenovationsSection: React.FC<RenovationsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Todas',
    'Estrutura & Alvenaria',
    'Acabamentos & Interiores',
    'Esquadrias, Vidros & Manutenção',
    'Fachadas, Coberturas & Proteção'
  ];

  const filteredServices = useMemo(() => {
    return RENOVATION_SERVICES.filter(service => {
      const matchesCategory = selectedCategory === 'Todas' || service.category === selectedCategory;
      const matchesQuery = searchQuery === '' || 
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Helper function to render matching Lucide icon based on iconName string
  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#0066CC]" };
    switch (iconName) {
      case 'Hammer': return <Hammer {...props} />;
      case 'Building': return <Building {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Trash2': return <Trash2 {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Grid': return <Grid {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'DoorClosed': return <DoorClosed {...props} />;
      case 'Maximize2': return <Maximize2 {...props} />;
      case 'Shield': return <ShieldCheck {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'VolumeX': return <VolumeX {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Droplet': return <Droplet {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Home': return <Home {...props} />;
      case 'Umbrella': return <Umbrella {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      default: return <Wrench {...props} />;
    }
  };

  return (
    <section id="reformas" className="py-24 bg-[#161616] text-white relative overflow-hidden border-t border-white/10">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0066CC]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-[#0066CC]/10 px-3.5 py-1.5 rounded-md border border-[#0066CC]/20">
            Soluções em Reformas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight font-['Plus_Jakarta_Sans']">
            Reformas, Manutenção & Serviços Complementares
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mt-4 font-light leading-relaxed">
            Atendemos condomínios, residências e escritórios com equipe qualificada para reformas de pequeno a grande porte, vedação de fachadas, substituição de acessórios e serviços de manutenção preventiva.
          </p>
        </div>

        {/* Filters & Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-[#222222] p-3 rounded-2xl border border-white/10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#0066CC] text-white shadow-lg shadow-blue-600/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar serviço de reforma..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#161616] border border-white/15 text-white pl-10 pr-4 py-2 rounded-xl text-xs placeholder-gray-500 focus:outline-none focus:border-[#0066CC] transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Services Count Badge */}
        <div className="flex items-center justify-between mb-8 text-xs text-gray-400">
          <span>Exibindo <strong className="text-white">{filteredServices.length}</strong> de <strong className="text-white">{RENOVATION_SERVICES.length}</strong> serviços disponíveis</span>
          <span className="flex items-center text-blue-400">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" />
            Equipe Própria & Mão de Obra Especializada
          </span>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#222222] border border-white/10 rounded-2xl overflow-hidden hover:border-[#0066CC]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-[#0066CC]/10 transform hover:-translate-y-1"
            >
              <div>
                {/* Image & Badge Header */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-[#222222]/40 to-transparent" />
                  
                  {service.badge && (
                    <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 text-[11px] font-bold text-blue-400">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <div className="flex items-start space-x-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#0066CC]/15 border border-[#0066CC]/30 shrink-0">
                      {renderIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#0066CC] uppercase tracking-wider">
                        {service.category}
                      </span>
                      <h3 className="text-base font-bold text-white font-['Plus_Jakarta_Sans'] group-hover:text-blue-400 transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 font-light leading-relaxed mt-2 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0 border-t border-white/5 mt-4">
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="w-full bg-[#0066CC] hover:bg-blue-600 text-white text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-md shadow-blue-600/20 group/btn"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-[#222222] rounded-2xl border border-white/10 p-8">
            <Search className="w-10 h-10 text-gray-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">Nenhum serviço encontrado</h3>
            <p className="text-xs text-gray-400 mt-1">
              Tente buscar por outro termo ou selecione a categoria "Todas".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todas');
                setSearchQuery('');
              }}
              className="mt-4 bg-[#0066CC] text-white text-xs font-bold py-2 px-4 rounded-lg"
            >
              Ver Todos os Serviços
            </button>
          </div>
        )}

        {/* Bottom Banner Callout */}
        <div className="mt-16 bg-gradient-to-r from-[#0066CC]/20 via-[#222222] to-blue-900/20 p-8 rounded-3xl border border-[#0066CC]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Precisa de um serviço específico para sua obra ou condomínio?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-2xl">
              Nossa equipe técnica realiza visitas para levantamento quantitativo e elaboração de proposta técnica sem compromisso.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal("Reforma Completa / Manutenção Especializada")}
            className="bg-[#0066CC] hover:bg-blue-600 text-white font-bold py-3.5 px-7 rounded-xl transition-all shadow-xl shadow-blue-600/30 flex items-center space-x-2 text-xs shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Falar com Engenheiro de Reformas</span>
          </button>
        </div>

      </div>
    </section>
  );
};
