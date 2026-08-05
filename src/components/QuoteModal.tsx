import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ShieldCheck, Sparkles, Building2, User, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, presetService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    projectCategory: 'Residencial',
    serviceType: presetService || 'Esquadrias Minimalistas (Padrão Luxo)',
    timeline: 'Início em até 30 dias',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (presetService) {
      setFormData(prev => ({ ...prev, serviceType: presetService }));
    }
  }, [presetService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format Structured WhatsApp Message
    const message = `*SOLICITAÇÃO DE ORÇAMENTO - JM SOLUÇÕES*%0A%0A` +
      `*Nome:* ${encodeURIComponent(formData.name)}%0A` +
      `*Telefone:* ${encodeURIComponent(formData.phone)}%0A` +
      `*E-mail:* ${encodeURIComponent(formData.email || 'Não informado')}%0A` +
      `*Cidade/Obra:* ${encodeURIComponent(formData.city)}%0A` +
      `*Categoria:* ${encodeURIComponent(formData.projectCategory)}%0A` +
      `*Serviço Desejado:* ${encodeURIComponent(formData.serviceType)}%0A` +
      `*Prazo da Obra:* ${encodeURIComponent(formData.timeline)}%0A` +
      `*Observações:* ${encodeURIComponent(formData.notes || 'Sem detalhes adicionais')}%0A%0A` +
      `_Enviado pelo formulário do site JM SOLUÇÕES._`;

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${message}`;

    // Mark submitted state
    setSubmitted(true);

    // Open WhatsApp in new tab after brief delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-[#111111] border border-white/15 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl relative p-6 sm:p-8 text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center space-x-1.5 bg-[#0066CC]/20 border border-[#0066CC]/40 px-3 py-1 rounded-md text-xs font-bold text-blue-300 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Orçamento Rápido em Menos de 2 Horas</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
                Solicite Seu Orçamento de Caixilharia
              </h2>
              <p className="text-xs text-gray-400 font-light mt-1">
                Preencha os dados abaixo. Nossos engenheiros entrarão em contato para elaborar sua proposta técnica.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome */}
                <div>
                  <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider">
                    Seu Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Roberto Mendonça"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#2E2E2E] border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066CC] transition-colors"
                    />
                  </div>
                </div>

                {/* Telefone / WhatsApp */}
                <div>
                  <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider">
                    WhatsApp / Celular *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="(11) 94568-8116"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#2E2E2E] border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066CC] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#2E2E2E] border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066CC] transition-colors"
                    />
                  </div>
                </div>

                {/* Cidade / Obra */}
                <div>
                  <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider">
                    Cidade / Bairro da Obra *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: São Paulo / Alphaville"
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#2E2E2E] border border-white/10 rounded-xl py-2.5 pl-10 pr-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066CC] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Categoria do Projeto */}
              <div>
                <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider">
                  Categoria do Projeto
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Residencial', 'Comercial', 'Industrial', 'Outro'] as const).map(cat => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setFormData({ ...formData, projectCategory: cat })}
                      className={`py-2 px-3 rounded-lg text-xs font-bold transition-all border ${
                        formData.projectCategory === cat
                          ? 'bg-[#0066CC] text-white border-[#0066CC]'
                          : 'bg-[#2E2E2E] text-gray-300 border-white/5 hover:border-white/20'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Serviço Desejado */}
              <div>
                <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider">
                  Solução / Caixilharia Desejada
                </label>
                <select
                  value={formData.serviceType}
                  onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-[#2E2E2E] border border-white/10 rounded-xl py-2.5 px-3 text-white focus:outline-none focus:border-[#0066CC] transition-colors font-medium"
                >
                  <option value="Esquadrias Minimalistas (Padrão Luxo)">Esquadrias Minimalistas (Padrão Luxo)</option>
                  <option value="Fachada Pele de Vidro / Structural Glazing">Fachada Pele de Vidro / Structural Glazing</option>
                  <option value="Portas Pivotantes e Grandes Vãos">Portas Pivotantes e Grandes Vãos</option>
                  <option value="Janela Integrada com Automação Motorizada">Janela Integrada com Automação Motorizada</option>
                  <option value="Guarda-Corpo de Alumínio e Vidro">Guarda-Corpo de Alumínio e Vidro</option>
                  <option value="Cobertura de Alumínio / Pergolado">Cobertura de Alumínio / Pergolado</option>
                  <option value="Soluções em Reformas / Demolição / Alvenaria">Soluções em Reformas / Demolição / Alvenaria</option>
                  <option value="Vedação / Lavagem de Fachadas / Telhados">Vedação / Lavagem de Fachadas / Telhados</option>
                  <option value="Troca de Borrachas / Vidros / Manutenção">Troca de Borrachas / Vidros / Manutenção</option>
                  <option value="Outro Projeto Sob Medida">Outro Projeto Sob Medida</option>
                </select>
              </div>

              {/* Prazo */}
              <div>
                <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider">
                  Previsão para Início da Obra
                </label>
                <select
                  value={formData.timeline}
                  onChange={e => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-[#2E2E2E] border border-white/10 rounded-xl py-2.5 px-3 text-white focus:outline-none focus:border-[#0066CC] transition-colors font-medium"
                >
                  <option value="Imediato (Obra em andamento)">Imediato (Obra em andamento)</option>
                  <option value="Início em até 30 dias">Início em até 30 dias</option>
                  <option value="De 30 a 90 dias">De 30 a 90 dias</option>
                  <option value="Fase de Projeto Arquitetônico">Fase de Projeto Arquitetônico</option>
                </select>
              </div>

              {/* Observações */}
              <div>
                <label className="block text-gray-300 font-bold mb-1.5 uppercase tracking-wider">
                  Detalhes / Quantidade de Vãos (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Descreva detalhes como altura do pé-direito, cor do alumínio desejada ou envie os vãos..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#2E2E2E] border border-white/10 rounded-xl p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0066CC] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#0066CC] hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2 text-sm"
                >
                  <MessageCircle className="w-5 h-5 fill-white/20" />
                  <span>Enviar Solicitação via WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-gray-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0066CC]" />
                <span>Seus dados são 100% confidenciais e protegidos pela LGPD.</span>
              </div>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-extrabold text-white font-['Plus_Jakarta_Sans']">
              Solicitação Direcionada!
            </h3>

            <p className="text-sm text-gray-300 font-light max-w-md mx-auto leading-relaxed">
              Abrimos o aplicativo do WhatsApp com a sua mensagem pré-formatada. Caso a janela não tenha aberto automaticamente, clique no botão abaixo:
            </p>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#0066CC] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg text-xs transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Abrir Conversa no WhatsApp</span>
            </a>

            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-gray-400 hover:text-white underline"
              >
                Voltar ao site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
