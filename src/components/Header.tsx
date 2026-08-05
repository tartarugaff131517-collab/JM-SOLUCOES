import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenQuoteModal: (presetService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Empresa', href: '#empresa' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Reformas', href: '#reformas' },
    { name: 'Processo', href: '#processo' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <>
      {/* Top Banner Bar for Trust */}
      <div className="bg-[#111111] text-[#A0A0A0] text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-white/90 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0066CC] mr-1.5" />
              Garantia de 10 Anos NBR 10821
            </span>
            <span className="hidden lg:inline text-white/50">|</span>
            <span className="hidden lg:inline">Atendimento a Arquitetos, Construtoras e Obras de Alto Padrão</span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} 
              className="hover:text-white transition-colors flex items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-[#0066CC]" />
              {COMPANY_INFO.phone}
            </a>
            <span className="text-white/30">/</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20esquadrias.`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#0066CC] hover:text-blue-400 font-semibold transition-colors flex items-center"
            >
              WhatsApp Direto
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#111111]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl' 
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <svg className="w-10 h-10 shadow-lg shadow-blue-900/30 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logo-blue-grad-header" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0066CC" />
                  <stop offset="100%" stopColor="#002266" />
                </linearGradient>
                <linearGradient id="logo-cyan-grad-header" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00F2FE" />
                  <stop offset="100%" stopColor="#4FACFE" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#logo-blue-grad-header)" />
              <path d="M9 9V19C9 22 11.5 23 13.5 23C15.5 23 17 22 17 19.5" stroke="url(#logo-cyan-grad-header)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17 9V22M17 9L22 14.5L27 9V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-lg sm:text-xl font-black tracking-wider text-white uppercase font-['Plus_Jakarta_Sans']">
              JM <span className="text-[#0066CC]">SOLUÇÕES</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0066CC] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-[#0066CC] hover:bg-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-lg shadow-blue-600/25 transition-all duration-300 flex items-center space-x-2 group hover:shadow-blue-600/40 transform hover:-translate-y-0.5"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#111111] border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-200 hover:text-[#0066CC] py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-[#0066CC] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center space-x-2 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span>Solicitar Orçamento</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#2E2E2E] hover:bg-zinc-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center space-x-2 text-sm"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Falar no WhatsApp ({COMPANY_INFO.phone})</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
