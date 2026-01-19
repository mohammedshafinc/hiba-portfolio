const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-white/5 relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container-custom relative z-10">
        {/* Main footer content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#home" className="inline-block mb-6">
                <span className="text-3xl font-bold tracking-tight text-gradient">HIBA</span>
              </a>
              <p className="text-[var(--text-secondary)] max-w-md mb-6 leading-relaxed">
                Digital author and copywriter crafting compelling narratives and persuasive copy 
                that resonates with audiences and drives meaningful results.
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="mailto:parambadenhiba@gmail.com"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/9544282003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-[var(--text-secondary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[var(--text-primary)] font-semibold mb-6 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Copywriting', href: '#copywriting' },
                  { name: 'Malayalam Copy', href: '#malayalam-copywriting' },
                  { name: 'Published Articles', href: '#articles' },
                  { name: 'About Me', href: '#about' },
                ].map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[var(--text-primary)] font-semibold mb-6 text-sm uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  'Article Writing',
                  'Copywriting',
                  'Content Strategy',
                  'Brand Voice Development',
                ].map((service) => (
                  <li key={service}>
                    <span className="text-[var(--text-secondary)]">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            © {currentYear} Hiba. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)]">
            Designed & Developed by{' '}
            <a 
              href="https://github.com/mohammedshafinc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--accent-primary)] hover:underline"
            >
              Mohammed Shafin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
