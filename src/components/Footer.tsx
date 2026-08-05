import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube, 
  ShieldCheck, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: (presetService?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer id="contato" className="bg-[#111111] text-white border-t border-white/10 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-3 group">
              <svg className="w-10 h-10 shadow-lg shadow-blue-900/30 group-hover:scale-105 transition-transform duration-300" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logo-blue-grad-footer" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0066CC" />
                    <stop offset="100%" stopColor="#002266" />
                  </linearGradient>
                  <linearGradient id="logo-cyan-grad-footer" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00F2FE" />
                    <stop offset="100%" stopColor="#4FACFE" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#logo-blue-grad-footer)" />
                <path d="M9 9V19C9 22 11.5 23 13.5 23C15.5 23 17 22 17 19.5" stroke="url(#logo-cyan-grad-footer)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 9V22M17 9L22 14.5L27 9V22" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xl font-black tracking-wider text-white uppercase font-['Plus_Jakarta_Sans']">
                JM <span className="text-[#0066CC]">SOLUÇÕES</span>
              </span>
            </a>

            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Empresa especializada em engenharia, fabricação e instalação de esquadrias em alumínio de alto padrão, fachadas em vidro e caixilharia minimalista sob medida.
            </p>

            <div className="p-4 rounded-xl bg-[#2E2E2E] border border-white/10 space-y-2">
              <div className="flex items-center space-x-2 text-xs text-gray-300 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#0066CC]" />
                <span>Normas ABNT NBR 10821 & NBR 14718</span>
              </div>
              <p className="text-[11px] text-gray-400 font-light">
                CNPJ: 24.890.112/0001-95 | Inscrição Estadual Certificada
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#2E2E2E] hover:bg-[#0066CC] text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#2E2E2E] hover:bg-[#0066CC] text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#2E2E2E] hover:bg-[#0066CC] text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#2E2E2E] hover:bg-[#0066CC] text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white font-['Plus_Jakarta_Sans']">
              Links Rápidos
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#empresa" className="hover:text-white transition-colors">A Empresa</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a></li>
              <li><a href="#processo" className="hover:text-white transition-colors">Processo Passo a Passo</a></li>
              <li><a href="#projetos" className="hover:text-white transition-colors">Portfólio de Obras</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Diferenciais NBR</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog Técnico</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white font-['Plus_Jakarta_Sans']">
              Atendimento & Contato
            </h3>
            <ul className="space-y-3 text-xs text-gray-300 font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#0066CC] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white">
                  {COMPANY_INFO.phone}
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white text-emerald-400 font-medium"
                >
                  WhatsApp: {COMPANY_INFO.formattedWhatsApp}
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#0066CC] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                  {COMPANY_INFO.email}
                </a>
              </li>

              <li className="flex items-start space-x-3 pt-2">
                <Clock className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-[11px]">{COMPANY_INFO.openingHours}</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full bg-[#0066CC] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-md"
              >
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 4: Map Location Embed (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white font-['Plus_Jakarta_Sans']">
              Localização Industrial
            </h3>
            
            {/* Embedded Google Map Simulation Frame */}
            <div className="w-full h-44 rounded-xl overflow-hidden border border-white/10 relative group">
              <iframe
                title="JM SOLUÇÕES Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197573880479!2d-46.633308!3d-23.55052!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-transparent transition-colors" />
            </div>

            <p className="text-[11px] text-gray-400 font-light">
              Atendimentos em toda a Grande SP, Vale do Paraíba, Campinas, Litoral e Condomínios Fechados.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} JM SOLUÇÕES - Soluções em Alumínio de Alto Padrão. Todos os direitos reservados.</p>
          
          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#home" className="hover:text-gray-300">Termos de Uso</a>
            <span>•</span>
            <a href="#home" className="hover:text-gray-300">Política de Privacidade</a>
            <span>•</span>
            <span className="text-gray-400">Padrão Arquitetura & Engenharia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
