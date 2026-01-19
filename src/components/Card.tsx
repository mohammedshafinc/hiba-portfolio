import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface CardProps {
  title: string;
  excerpt: string;
  source: string;
  date: string;
  thumbnail?: string;
  link: string;
  type: 'article' | 'copywriting';
}

const CardComponent = ({ title, excerpt, source, date, thumbnail, link, type }: CardProps) => {
  return (
    <a
      href={link}
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group block bg-[var(--bg-card)] border border-white/5 hover:border-[var(--accent-primary)]/30 transition-all duration-500 hover-lift overflow-hidden"
    >
      {thumbnail && (
        <div className="aspect-[16/10] relative overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent"></div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[var(--accent-primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* External link icon */}
          {link.startsWith('http') && (
            <div className="absolute top-4 right-4 w-10 h-10 bg-[var(--bg-primary)]/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <ExternalLink className="w-4 h-4 text-[var(--accent-primary)]" />
            </div>
          )}
        </div>
      )}
      
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] border border-[var(--accent-primary)]/20">
            {source}
          </span>
          <span className="text-xs text-[var(--text-muted)]">{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 line-clamp-2 group-hover:text-[var(--accent-primary)] transition-colors duration-300">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Read more */}
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center text-sm text-[var(--accent-primary)] font-medium">
          {type === 'article' ? 'Read Article' : 'View Project'}
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default CardComponent;
