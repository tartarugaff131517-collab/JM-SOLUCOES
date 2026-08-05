import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { RenovationsSection } from './components/RenovationsSection';
import { ProcessSection } from './components/ProcessSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { Differentials } from './components/Differentials';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { BlogSection } from './components/BlogSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { FloatingButtons } from './components/FloatingButtons';
import { ServiceCategory } from './types';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [presetService, setPresetService] = useState<string | undefined>(undefined);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<ServiceCategory | null>(null);

  const handleOpenQuoteModal = (service?: string) => {
    setPresetService(service);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col font-['Manrope',sans-serif] selection:bg-[#0066CC] selection:text-white">
      {/* Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Hero Section (100vh) */}
      <main className="flex-1">
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Trust Bar */}
        <TrustBar />

        {/* Quem Somos */}
        <AboutSection />

        {/* Serviços */}
        <ServicesSection 
          onSelectServiceModal={(category) => setSelectedServiceCategory(category)}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Soluções em Reformas */}
        <RenovationsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Nosso Processo */}
        <ProcessSection />

        {/* Projetos & Galeria */}
        <ProjectsGallery onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Diferenciais */}
        <Differentials />

        {/* Depoimentos */}
        <Testimonials />

        {/* FAQ */}
        <FAQSection />

        {/* Blog */}
        <BlogSection />

        {/* Final CTA */}
        <FinalCTA onOpenQuoteModal={handleOpenQuoteModal} />
      </main>

      {/* Rodapé */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Modals & Floating Tools */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        presetService={presetService}
      />

      <ServiceDetailModal
        category={selectedServiceCategory}
        onClose={() => setSelectedServiceCategory(null)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      <FloatingButtons onOpenQuoteModal={handleOpenQuoteModal} />
    </div>
  );
}

