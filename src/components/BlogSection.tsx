import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/companyData';
import { BlogPost } from '../types';
import { Calendar, Clock, ArrowRight, X, User } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-[#111111] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066CC] bg-[#0066CC]/10 px-3 py-1.5 rounded-md border border-[#0066CC]/20">
              Conhecimento & Tendências
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight font-['Plus_Jakarta_Sans']">
              Blog & Artigos Técnicos
            </h2>
            <p className="text-lg text-gray-400 mt-2 max-w-xl font-light">
              Fique por dentro das inovações em esquadrias minimalistas, acústica e arquitetura envidraçada.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-[#2E2E2E] rounded-2xl overflow-hidden border border-white/10 hover:border-[#0066CC] transition-all duration-300 group cursor-pointer flex flex-col justify-between shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-bold text-blue-400 border border-white/15">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-[#0066CC]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#0066CC]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans'] group-hover:text-blue-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-gray-300 font-light mt-3 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-xs text-gray-300 font-medium">{post.author.name}</span>
                </div>

                <span className="text-xs font-bold text-[#0066CC] flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>Ler Mais</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Blog Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in">
          <div className="bg-[#111111] border border-white/15 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl relative p-6 sm:p-10">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#0066CC] uppercase tracking-widest bg-[#0066CC]/10 px-3 py-1 rounded-md">
              {selectedPost.category}
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 font-['Plus_Jakarta_Sans']">
              {selectedPost.title}
            </h2>

            <div className="flex items-center space-x-4 text-xs text-gray-400 mt-3 pb-6 border-b border-white/10">
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
              <span>•</span>
              <span>Por {selectedPost.author.name} ({selectedPost.author.role})</span>
            </div>

            <div className="my-6 h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base font-light leading-relaxed">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-[#2E2E2E] hover:bg-zinc-700 text-white font-bold text-xs py-3 px-6 rounded-xl transition-all"
              >
                Fechar Artigo
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
