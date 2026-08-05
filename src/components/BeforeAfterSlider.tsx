import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_ITEMS } from '../data/companyData';
import { Sliders, Sparkles, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentItem = BEFORE_AFTER_ITEMS[selectedIdx] || BEFORE_AFTER_ITEMS[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-24 bg-[#FFFFFF] text-[#111111] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100">
            Transformação Arquitetônica
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] mt-4 tracking-tight font-['Plus_Jakarta_Sans']">
            Antes e Depois: A Diferença de um Projeto de Luxo
          </h2>
          <p className="text-lg text-gray-600 mt-3 font-light">
            Arraste o divisor para comparar a renovação de caixilhos antigos por nossas soluções minimalistas em alumínio.
          </p>

          {/* Project Switcher if multiple */}
          {BEFORE_AFTER_ITEMS.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {BEFORE_AFTER_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedIdx(idx);
                    setSliderPosition(50);
                  }}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all border ${
                    selectedIdx === idx
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-[#F5F5F5] text-gray-600 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {item.title.split('-')[0]}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Interactive Comparison Slider Container */}
        <div className="max-w-5xl mx-auto bg-[#111111] p-4 sm:p-6 rounded-3xl border border-gray-200 shadow-2xl">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[500px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/10"
          >
            {/* AFTER Image (Background) */}
            <img
              src={currentItem.afterImage}
              alt="Depois - Esquadrias ALU PRIME"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* "DEPOIS" Label */}
            <div className="absolute top-4 right-4 bg-[#0066CC] text-white text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-lg z-10 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DEPOIS (ALU PRIME)</span>
            </div>

            {/* BEFORE Image (Clipped Foreground) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentItem.beforeImage}
                alt="Antes - Esquadrias Antigas"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
              />
            </div>

            {/* "ANTES" Label */}
            <div className="absolute top-4 left-4 bg-black/80 text-gray-300 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg backdrop-blur-md border border-white/20 z-10">
              ANTES (CAIXILHO ANTIGO)
            </div>

            {/* Divider Handle Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-[#111111] shadow-2xl flex items-center justify-center border-2 border-[#0066CC]">
                <Sliders className="w-5 h-5 text-[#0066CC]" />
              </div>
            </div>
          </div>

          {/* Specs & Narrative Below Slider */}
          <div className="mt-6 p-6 rounded-2xl bg-[#2E2E2E] border border-white/10 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-blue-400 tracking-wider">
                {currentItem.category}
              </span>
              <h3 className="text-lg font-bold text-white font-['Plus_Jakarta_Sans'] mt-0.5">
                {currentItem.title}
              </h3>
              <p className="text-xs text-gray-300 font-light mt-1 max-w-2xl">
                {currentItem.description}
              </p>
            </div>

            <div className="bg-[#111111] p-3.5 rounded-xl border border-white/10 shrink-0 flex items-center space-x-2 text-xs font-semibold text-blue-300">
              <CheckCircle2 className="w-4 h-4 text-[#0066CC]" />
              <span>{currentItem.specs}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
