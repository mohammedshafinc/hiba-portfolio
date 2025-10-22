const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-cream-50 via-cream-100 to-sand-100">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #b8a992 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Decorative flourish */}
          <div className="flex items-center justify-center mb-8">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-sand-400"></span>
            <span className="mx-4 text-sand-500">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-sand-400"></span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-ink-800 mb-6 tracking-tight">
            Hiba
          </h1>
          
          <div className="h-1 w-20 bg-gradient-to-r from-sand-400 via-sand-500 to-sand-400 mx-auto mb-8"></div>
          
          <p className="text-2xl md:text-3xl font-serif text-ink-600 mb-8 italic font-light">
            Digital Author & Copywriter
          </p>
          
          <p className="text-lg md:text-xl text-ink-500 max-w-2xl mx-auto leading-relaxed mb-12">
            Crafting compelling narratives and persuasive copy that resonates. 
            Specializing in thoughtful content across diverse industries with a focus on 
            authenticity and impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#articles"
              className="group inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-sm hover:bg-gray-800 transition-all duration-300 shadow-elegant hover:shadow-elegant-lg hover:-translate-y-0.5 smooth-scroll"
            >
              View My Work
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-black font-medium border-2 border-black rounded-sm hover:bg-black hover:text-white transition-all duration-300 smooth-scroll"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex flex-col items-center">
            <p className="text-xs uppercase tracking-wide text-sand-600 mb-3">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-sand-400 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-sand-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

