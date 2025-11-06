const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-900 text-white pt-16 pb-10 mt-20 relative overflow-hidden">
      {/* Colorful background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-15 -z-10"></div>
      
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Top */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-serif font-semibold tracking-tight bg-gradient-to-r from-pink-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">Hiba</h3>
          <div className="h-1.5 w-16 bg-gradient-to-r from-pink-400 via-cyan-400 to-violet-400 mx-auto my-4 rounded-full"></div>
          <p className="text-gray-200 max-w-prose mx-auto">
            Digital author and copywriter crafting thoughtful, research-driven content with elegance and impact.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/20 pt-6">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} hiba. All rights reserved.</p>
          <div className="text-xs text-gray-400">
            Design and development by{' '}
            <a 
              href="https://github.com/mohammedshafinc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-pink-300 transition-colors duration-200 underline decoration-cyan-300/40 hover:decoration-pink-300"
            >
              mohammed shafin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

