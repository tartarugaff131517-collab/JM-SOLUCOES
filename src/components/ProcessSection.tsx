import React from 'react';
import { PROCESS_STEPS } from '../data/companyData';
import { 
  FileText, 
  Compass, 
  Layers, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowDown 
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return FileText;
      case 'Compass': return Compass;
      case 'Layers': return Layers;
      case 'Cpu': return Cpu;
      case 'Tool': return Wrench;
      case 'ShieldCheck': return ShieldCheck;
      default: return CheckCircle2;
    }
  };

  return (
    <section id="processo" className="py-24 bg-[#F5F5F5] text-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100">
            Metodologia & Execução
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] mt-4 tracking-tight font-['Plus_Jakarta_Sans']">
            Nosso Processo Passo a Passo
          </h2>
          <p className="text-lg text-gray-600 mt-3 font-light">
            Da primeira consulta à entrega técnica com termo de garantia de 10 anos. Rigor e transparência em todas as fases.
          </p>
        </div>

        {/* Timeline Grid (Desktop Horizontal Grid / Mobile Vertical Connected List) */}
        <div className="relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-blue-200 via-[#0066CC] to-blue-200 -translate-y-12 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {PROCESS_STEPS.map((step) => {
              const IconComp = getIcon(step.iconName);
              return (
                <div
                  key={step.number}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl hover:border-[#0066CC] transition-all duration-300 flex flex-col justify-between group relative"
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center font-black text-lg group-hover:bg-[#0066CC] transition-colors shadow-md font-['Plus_Jakarta_Sans']">
                      0{step.number}
                    </div>
                    <div className="p-2 rounded-lg bg-blue-50 text-[#0066CC]">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-base font-extrabold text-[#111111] font-['Plus_Jakarta_Sans'] group-hover:text-[#0066CC] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-bold text-[#0066CC] mt-1">
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-gray-600 font-light mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Bullet details */}
                  <div className="mt-4 pt-3 border-t border-gray-100 space-y-1">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5 text-[11px] text-gray-500 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066CC]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow Indicator for Mobile sequence */}
                  <div className="lg:hidden flex justify-center mt-4 text-[#0066CC]">
                    <ArrowDown className="w-4 h-4 animate-bounce" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
