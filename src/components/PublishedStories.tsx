'use client';

import { useEffect, useState, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  date: string;
  thumbnail: string;
  link: string;
  type: string;
}

const PublishedStories = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="articles" className="section-padding bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/30 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`max-w-3xl mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="divider-accent"></div>
            <span className="text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-[0.2em]">
              Portfolio
            </span>
          </div>
          <h2 className="text-[var(--text-primary)] mb-6">
            Published <span className="text-gradient font-editorial italic">Stories</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            A curated selection of my published work covering technology, culture, and current affairs.
          </p>
        </div>

        {/* Articles Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/5] bg-[var(--bg-card)] animate-pulse"></div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[var(--text-muted)]">No articles available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-[var(--bg-card)] border border-white/5 hover:border-[var(--accent-primary)]/30 transition-all duration-500 hover-lift overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--accent-primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* External link icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[var(--bg-primary)]/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ExternalLink className="w-4 h-4 text-[var(--accent-primary)]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
                      {article.source}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 line-clamp-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center text-sm text-[var(--accent-primary)] font-medium">
                    Read Article
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PublishedStories;
