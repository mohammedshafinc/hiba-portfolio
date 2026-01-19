'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-primary)]">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-[150px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[var(--accent-secondary)] rounded-full blur-[120px] opacity-15 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--accent-primary)]/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--accent-primary)]/10 to-transparent"></div>
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div 
            className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="divider-accent"></div>
            <span className="text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-[0.2em]">
              Digital Author & Copywriter
            </span>
          </div>

          {/* Main headline */}
          <h1 
            className={`mb-8 transition-all duration-700 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="block text-[var(--text-primary)]">Crafting Stories</span>
            <span className="block text-[var(--text-primary)]">That <span className="text-gradient font-editorial italic">Resonate</span></span>
          </h1>

          {/* Description */}
          <p 
            className={`text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mb-12 leading-relaxed font-light transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            I turn ideas into compelling narratives. From published articles to 
            persuasive copy, I help brands find their voice and connect with their audience.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 mb-20 transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a href="#copywriting" className="btn-primary group">
              View My Work
              <svg className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div 
            className={`flex flex-wrap gap-12 md:gap-16 pt-12 border-t border-white/10 transition-all duration-700 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {[
              { number: '50+', label: 'Articles Published' },
              { number: '20+', label: 'Brands Served' },
              { number: '3+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform">
                  {stat.number}
                </div>
                <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-xs text-[var(--text-muted)] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[var(--accent-primary)] to-transparent animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
