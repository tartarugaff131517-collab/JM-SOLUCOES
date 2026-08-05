import React from 'react';
import { TRUST_BAR_STATS } from '../data/companyData';
import { Award, ShieldCheck, Building2, Calendar, MapPin } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const icons = [Building2, Calendar, ShieldCheck, Award, MapPin];

  return (
    <section className="bg-[#2E2E2E] border-y border-white/10 text-white py-10 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          {TRUST_BAR_STATS.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div 
                key={idx} 
                className="flex flex-col items-start p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#0066CC]/40 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0066CC]/20 border border-[#0066CC]/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-gray-200 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-gray-400 font-light mt-0.5">
                  {stat.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
