import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle2, MessageCircle, ArrowRight, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenQuoteModal: (presetService?: string) => void;
}

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
    tag: "Esquadrias Minimalistas & Portas Pivotantes",
    titleSuffix: "Residenciais de Luxo"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    tag: "Fachadas Pele de Vidro & Structural Glazing",
    titleSuffix: "Comerciais e Corporativas"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
    tag: "Guarda-Corpos, Coberturas e Soluções Sob Medida",
    titleSuffix: "Projetos de Arquitetura"
  },
  {
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85",
    tag: "Usinagem CNC & Fabricação Própria",
    titleSuffix: "Engenharia de Precisão"
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-[#111111] overflow-hidden pt-16">
      {/* Background Image Carousel */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.image}
            alt={slide.tag}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Dark Luxury Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/40 z-10" />

      {/* Decorative Grid Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white flex flex-col justify-center min-h-screen">
        
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full mb-6 w-fit animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#0066CC] animate-ping" />
          <span className="w-2 h-2 rounded-full bg-[#0066CC]" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200">
            {HERO_SLIDES[currentSlide].tag}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-5xl uppercase font-['Plus_Jakarta_Sans']">
          SOLUÇÕES EM ALUMÍNIO PARA OBRAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">RESIDENCIAIS, COMERCIAIS E INDUSTRIAIS</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
          Fabricação, Instalação e Manutenção com acabamento impecável, equipe especializada e garantia de 10 anos.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 max-w-xl">
          <button
            onClick={() => onOpenQuoteModal()}
            className="bg-[#0066CC] hover:bg-blue-600 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 transition-all duration-300 flex items-center justify-center space-x-3 group transform hover:-translate-y-1"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20JM%20SOLU%C3%87%C3%95ES%20EM%20ALUM%C3%8DNIO%20e%20gostaria%20de%20falar%20com%20um%20especialista.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2E2E2E]/90 hover:bg-zinc-700 text-white font-semibold text-base px-8 py-4 rounded-xl border border-white/15 backdrop-blur-md transition-all duration-300 flex items-center justify-center space-x-3 hover:border-white/30 transform hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* 4 Trust Indicators Below Buttons */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
          {[
            "Atendimento rápido",
            "Fabricação própria",
            "Equipe especializada",
            "Garantia de 10 Anos"
          ].map((indicator, index) => (
            <div key={index} className="flex items-center space-x-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#0066CC] shrink-0" />
              <span className="text-sm font-semibold text-gray-200">{indicator}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-8 right-8 z-30 hidden lg:flex items-center space-x-3 bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/10">
        <button
          onClick={prevSlide}
          className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Slide Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-mono px-2 text-gray-300">
          0{currentSlide + 1} / 0{HERO_SLIDES.length}
        </span>
        <button
          onClick={nextSlide}
          className="p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Próximo Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
