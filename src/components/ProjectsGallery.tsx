import React, { useState } from 'react';
import { PROJECTS } from '../data/companyData';
import { ProjectItem } from '../types';
import { Maximize2, MapPin, Calendar, Layers, ShieldCheck, ArrowRight, X, Sparkles } from 'lucide-react';

interface ProjectsGalleryProps {
  onOpenQuoteModal: (presetService?: string) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  const categories = ['Todos', 'Residencial', 'Comercial', 'Industrial', 'Minimalista'];

  const filteredProjects = activeCategory === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projetos" className="py-24 bg-[#111111] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-[#0066CC]/10 px-3 py-1.5 rounded-md border border-[#0066CC]/20">
              Portfólio de Obras
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight font-['Plus_Jakarta_Sans']">
              Projetos Entregues
            </h2>
            <p className="text-lg text-gray-400 mt-2 max-w-xl font-light">
              Conheça algumas das obras executadas com nossas esquadrias minimalistas e fachadas de alto padrão.
            </p>
          </div>

          {/* Categories Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#2E2E2E]/80 p-1.5 rounded-xl border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0066CC] text-white shadow-lg shadow-blue-600/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project);
                setActiveGalleryIndex(0);
              }}
              className="group relative rounded-2xl overflow-hidden bg-[#2E2E2E] border border-white/10 hover:border-[#0066CC] transition-all duration-500 cursor-pointer shadow-2xl flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-blue-400 border border-white/15">
                  {project.category}
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-xs text-gray-300 mb-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#0066CC]" />
                    <span>{project.location}</span>
                    <span>•</span>
                    <Calendar className="w-3.5 h-3.5 text-[#0066CC]" />
                    <span>{project.completionYear}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans'] group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Spec Footer */}
              <div className="p-4 bg-[#2E2E2E] border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span className="truncate max-w-[220px]">{project.profileLine}</span>
                <span className="text-[#0066CC] font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Ver Fotos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in">
          <div className="bg-[#111111] border border-white/15 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl relative flex flex-col lg:flex-row">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Gallery Viewer */}
            <div className="lg:w-3/5 p-6 bg-black flex flex-col justify-between">
              <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={selectedProject.gallery[activeGalleryIndex] || selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails if multiple */}
              {selectedProject.gallery.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                  {selectedProject.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`w-20 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        activeGalleryIndex === idx ? 'border-[#0066CC] scale-105' : 'border-transparent opacity-60'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Specifications & CTA */}
            <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold text-[#0066CC] uppercase tracking-widest bg-[#0066CC]/10 px-3 py-1 rounded-md">
                  {selectedProject.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 font-['Plus_Jakarta_Sans']">
                  {selectedProject.title}
                </h3>

                <div className="flex items-center space-x-4 text-xs text-gray-400 mt-2">
                  <span className="flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-[#0066CC] mr-1" />
                    {selectedProject.location}
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 text-[#0066CC] mr-1" />
                    Concluído em {selectedProject.completionYear}
                  </span>
                </div>

                <p className="text-sm text-gray-300 font-light mt-4 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Specs Box */}
                <div className="mt-6 p-4 rounded-xl bg-[#2E2E2E] border border-white/10 space-y-3">
                  <div className="flex items-start space-x-2">
                    <Layers className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">Perfil de Alumínio</p>
                      <p className="text-xs text-white font-semibold">{selectedProject.profileLine}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <ShieldCheck className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">Especificação de Vidro</p>
                      <p className="text-xs text-white font-semibold">{selectedProject.glassType}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onOpenQuoteModal(`Projeto Similar: ${title}`);
                  }}
                  className="w-full bg-[#0066CC] hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Quero um Projeto Semelhante</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
