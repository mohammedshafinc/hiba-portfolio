const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-violet-100 via-pink-100 via-rose-100 to-cyan-100 overflow-hidden">
      {/* Colorful background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-rose-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-28 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Decorative flourish */}
          <div className="flex items-center justify-center mb-8">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-violet-500 to-pink-500"></span>
            <span className="mx-4 text-violet-600 text-2xl">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent via-rose-500 to-cyan-500"></span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold bg-gradient-to-r from-violet-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-6 tracking-tight">
            Hiba
          </h1>
          
          <div className="h-1.5 w-24 bg-gradient-to-r from-violet-500 via-pink-500 via-rose-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-2xl md:text-3xl font-serif text-ink-700 mb-8 italic font-light">
            Digital Author & Copywriter
          </p>
          
          <p className="text-lg md:text-xl text-ink-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Crafting compelling narratives and persuasive copy that resonates. 
            Specializing in thoughtful content across diverse industries with a focus on 
            authenticity and impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#articles"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-medium rounded-lg hover:from-violet-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 smooth-scroll"
            >
              View My Work
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-violet-600 font-medium border-2 border-violet-500 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500 hover:text-white hover:border-transparent transition-all duration-300 smooth-scroll"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex flex-col items-center">
            <p className="text-xs uppercase tracking-wide text-violet-600 mb-3 font-medium">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-violet-400 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-gradient-to-b from-violet-500 to-pink-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

