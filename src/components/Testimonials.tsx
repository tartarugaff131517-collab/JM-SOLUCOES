import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/companyData';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () => setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-[#F5F5F5] text-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100">
            Satisfação Comprovada
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] mt-4 tracking-tight font-['Plus_Jakarta_Sans']">
            O Que Dizem Nossos Clientes e Parceiros
          </h2>
          <p className="text-lg text-gray-600 mt-3 font-light">
            Depoimentos reais de arquitetos, engenheiros e proprietários de imóveis de alto padrão.
          </p>
        </div>

        {/* Big Testimonial Card Slider */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-2xl relative overflow-hidden">
            {/* Background Quote Mark */}
            <Quote className="absolute top-6 right-6 w-24 h-24 text-gray-100 stroke-[1] pointer-events-none" />

            <div className="relative z-10">
              
              {/* Star Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(TESTIMONIALS[activeIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-gray-400 ml-2">5.0 / 5.0</span>
              </div>

              {/* Quote Content */}
              <p className="text-lg sm:text-xl font-light text-gray-800 leading-relaxed italic">
                "{TESTIMONIALS[activeIdx].content}"
              </p>

              {/* Author Row */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={TESTIMONIALS[activeIdx].avatar}
                    alt={TESTIMONIALS[activeIdx].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#0066CC] shadow-md"
                  />
                  <div>
                    <h3 className="text-base font-extrabold text-[#111111] font-['Plus_Jakarta_Sans']">
                      {TESTIMONIALS[activeIdx].name}
                    </h3>
                    <p className="text-xs font-bold text-[#0066CC]">
                      {TESTIMONIALS[activeIdx].role}
                    </p>
                    <p className="text-xs text-gray-500 font-light mt-0.5">
                      {TESTIMONIALS[activeIdx].city}
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 px-3.5 py-1.5 rounded-lg border border-blue-100 text-xs font-bold text-[#0066CC]">
                  {TESTIMONIALS[activeIdx].projectType}
                </div>
              </div>

            </div>
          </div>

          {/* Slider Arrows & Dots */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIdx === i ? 'w-8 bg-[#0066CC]' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-xl bg-white border border-gray-300 hover:border-[#0066CC] text-[#111111] flex items-center justify-center hover:bg-[#0066CC] hover:text-white transition-all shadow-md"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-xl bg-white border border-gray-300 hover:border-[#0066CC] text-[#111111] flex items-center justify-center hover:bg-[#0066CC] hover:text-white transition-all shadow-md"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
