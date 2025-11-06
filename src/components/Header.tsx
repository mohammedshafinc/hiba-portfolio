'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Published Articles', href: '#articles' },
    { name: 'Copywriting Work', href: '#copywriting' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-gradient-to-r from-violet-200 via-pink-200 to-cyan-200' 
          : 'bg-transparent'
      }`}
      style={scrolled ? {
        borderImage: 'linear-gradient(to right, #c4b5fd, #fbcfe8, #a5f3fc) 1'
      } : {}}
    >
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-2xl font-serif font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent tracking-tight hover:from-violet-700 hover:to-pink-700 transition-all duration-300"
            >
              Hiba
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const colorClasses = [
                { text: 'hover:text-violet-600', underline: 'bg-gradient-to-r from-violet-500 to-violet-600' },
                { text: 'hover:text-pink-600', underline: 'bg-gradient-to-r from-pink-500 to-pink-600' },
                { text: 'hover:text-rose-600', underline: 'bg-gradient-to-r from-rose-500 to-rose-600' },
                { text: 'hover:text-cyan-600', underline: 'bg-gradient-to-r from-cyan-500 to-cyan-600' },
                { text: 'hover:text-emerald-600', underline: 'bg-gradient-to-r from-emerald-500 to-emerald-600' },
              ];
              const color = colorClasses[index % colorClasses.length];
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium text-ink-600 ${color.text} transition-colors duration-300 group smooth-scroll`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 ${color.underline} transition-all duration-300 group-hover:w-3/4`}></span>
                </a>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-violet-600 hover:text-pink-600 hover:bg-violet-50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animate-in slide-in-from-top duration-300 bg-white/95 backdrop-blur-md rounded-lg mt-2">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => {
                const colorClasses = [
                  { text: 'hover:text-violet-600', bg: 'hover:bg-violet-50' },
                  { text: 'hover:text-pink-600', bg: 'hover:bg-pink-50' },
                  { text: 'hover:text-rose-600', bg: 'hover:bg-rose-50' },
                  { text: 'hover:text-cyan-600', bg: 'hover:bg-cyan-50' },
                  { text: 'hover:text-emerald-600', bg: 'hover:bg-emerald-50' },
                ];
                const color = colorClasses[index % colorClasses.length];
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 text-base font-medium text-ink-600 ${color.text} ${color.bg} rounded-md transition-all duration-200 smooth-scroll`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

