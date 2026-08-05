import React from 'react';
import { ABOUT_INFO } from '../data/companyData';
import { Award, ShieldCheck, Clock, Zap, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const miniCards = [
    {
      title: "Experiência",
      desc: "Mais de 18 anos moldando esquadrias de luxo",
      icon: Award
    },
    {
      title: "Qualidade",
      desc: "Ligas de alumínio nobres com certificação ABNT NBR",
      icon: ShieldCheck
    },
    {
      title: "Segurança",
      desc: "Cálculo estrutural e estanqueidade contra ventos fortes",
      icon: Zap
    },
    {
      title: "Pontualidade",
      desc: "Cronograma rigoroso de entrega para sua tranquilidade",
      icon: Clock
    }
  ];

  return (
    <section id="empresa" className="py-24 bg-[#FFFFFF] text-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] mt-4 tracking-tight font-['Plus_Jakarta_Sans']">
            {ABOUT_INFO.title}
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-3xl font-light">
            {ABOUT_INFO.headline}
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Factory/Team Image with Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 group">
              <img
                src={ABOUT_INFO.factoryImage}
                alt="Fábrica de Esquadrias JM SOLUÇÕES EM ALUMÍNIO"
                className="w-full h-[450px] sm:h-[550px] object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#111111]/90 backdrop-blur-md rounded-xl text-white border border-white/10 shadow-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-[#0066CC]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-400">
                    Sede Industrial & Showroom
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-200">
                  Usinagem CNC computadorizada com capacidade industrial para atender obras de qualquer porte com precisão milimétrica.
                </p>
              </div>
            </div>

            {/* Decorative Floating Accent Card */}
            <div className="hidden sm:flex absolute -top-6 -right-6 bg-[#111111] text-white p-6 rounded-2xl border border-white/10 shadow-2xl max-w-xs z-10 flex-col">
              <span className="text-4xl font-extrabold text-[#0066CC] font-['Plus_Jakarta_Sans']">
                100%
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300 mt-1">
                Aderência às Normas NBR 10821 & NBR 14718
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Mini Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>{ABOUT_INFO.textParagraph1}</p>
              <p>{ABOUT_INFO.textParagraph2}</p>
            </div>

            {/* Key Commitment Checkpoints */}
            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Equipe técnica de engenheiros residentes",
                "Tratamento especial contra maresia e oxidação",
                "Vidros laminados, temperados e duplos",
                "Projetos executivos em CAD/BIM"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm font-semibold text-[#111111]">
                  <div className="w-5 h-5 rounded-full bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* 4 Mini Cards Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {miniCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#F5F5F5] border border-gray-200 hover:border-[#0066CC] transition-all duration-300 hover:shadow-md group"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-[#111111] text-white flex items-center justify-center group-hover:bg-[#0066CC] transition-colors">
                        <Icon className="w-4 h-4 text-blue-400 group-hover:text-white" />
                      </div>
                      <h3 className="font-extrabold text-[#111111] text-base font-['Plus_Jakarta_Sans']">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-600 font-light leading-snug">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
