import React, { useState } from 'react';
import { FAQS } from '../data/companyData';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQS[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section className="py-24 bg-[#FFFFFF] text-[#111111] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] mt-4 tracking-tight font-['Plus_Jakarta_Sans']">
            Perguntas & Respostas
          </h2>
          <p className="text-lg text-gray-600 mt-3 font-light">
            Esclareça suas dúvidas técnicas, prazos de entrega e condições comerciais.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-[#0066CC] bg-blue-50/30 shadow-lg' 
                    : 'border-gray-200 bg-[#F5F5F5] hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-[#111111] text-base sm:text-lg font-['Plus_Jakarta_Sans'] cursor-pointer"
                >
                  <span className="flex items-center space-x-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? 'text-[#0066CC]' : 'text-gray-400'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#0066CC] text-white' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-gray-700 font-light leading-relaxed border-t border-blue-100/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need More Assistance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#111111] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#0066CC] text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base font-['Plus_Jakarta_Sans']">
                Ainda tem alguma dúvida específica sobre seu projeto?
              </h3>
              <p className="text-xs text-gray-300 font-light">
                Fale diretamente com nossa equipe técnica de engenheiros pelo WhatsApp.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20espec%C3%ADfica%20sobre%20o%20meu%20projeto.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0066CC] hover:bg-blue-600 text-white font-bold text-xs py-3 px-6 rounded-xl transition-all shrink-0 flex items-center space-x-2 shadow-lg"
          >
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
