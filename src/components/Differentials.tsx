import React from 'react';
import { DIFFERENTIALS } from '../data/companyData';
import { 
  Factory, 
  UserCheck, 
  Shield, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Ruler,
  Check
} from 'lucide-react';

export const Differentials: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Factory': return Factory;
      case 'UserCheck': return UserCheck;
      case 'Shield': return Shield;
      case 'Award': return Award;
      case 'Sparkles': return Sparkles;
      case 'CheckCircle2': return CheckCircle2;
      case 'Clock': return Clock;
      case 'Ruler': return Ruler;
      default: return Check;
    }
  };

  return (
    <section id="diferenciais" className="py-24 bg-[#111111] text-white relative overflow-hidden">
      {/* Glow effect background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066CC]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-[#0066CC]/10 px-3 py-1.5 rounded-md border border-[#0066CC]/20">
            Nossos Pilares
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight font-['Plus_Jakarta_Sans']">
            Por Que Escolher a JM SOLUÇÕES?
          </h2>
          <p className="text-lg text-gray-400 mt-3 font-light">
            Soluções que unem estética minimalista, segurança estrutural e a certeza de um investimento duradouro.
          </p>
        </div>

        {/* 8 Differentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((item, idx) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#2E2E2E]/80 border border-white/10 hover:border-[#0066CC] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#111111] border border-white/10 text-[#0066CC] flex items-center justify-center mb-5 group-hover:bg-[#0066CC] group-hover:text-white transition-all shadow-md">
                    <Icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans'] group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-300 font-light mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center text-[11px] font-bold text-[#0066CC] space-x-1.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>Padrão Premium Certificado</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
