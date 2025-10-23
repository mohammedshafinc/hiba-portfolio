const Footer = () => {
  return (
    <footer className="bg-ink-800 text-cream-100 pt-16 pb-10 mt-20">
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-serif font-semibold tracking-tight">Hiba</h3>
          <div className="h-1 w-16 bg-sand-400 mx-auto my-4"></div>
          <p className="text-cream-300/80 max-w-prose mx-auto">
            Digital author and copywriter crafting thoughtful, research-driven content with elegance and impact.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-ink-700 pt-6">
          <p className="text-sm text-cream-300/70">© {new Date().getFullYear()} hiba. All rights reserved.</p>
          <div className="text-xs text-cream-300/60">
            Design and development by{' '}
            <a 
              href="https://github.com/mohammedshafinc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cream-300/80 hover:text-cream-100 transition-colors duration-200 underline decoration-cream-300/40 hover:decoration-cream-100"
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

