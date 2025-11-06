import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  // Generate a color based on the title hash for consistency
  const colorIndex = title.length % 5;
  const colorSchemes = [
    { border: 'border-indigo-300', hoverBorder: 'border-indigo-500', badge: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200', link: 'hover:text-indigo-600', gradient: 'from-indigo-300' },
    { border: 'border-purple-300', hoverBorder: 'border-purple-500', badge: 'bg-purple-100 text-purple-700 hover:bg-purple-200', link: 'hover:text-purple-600', gradient: 'from-purple-300' },
    { border: 'border-pink-300', hoverBorder: 'border-pink-500', badge: 'bg-pink-100 text-pink-700 hover:bg-pink-200', link: 'hover:text-pink-600', gradient: 'from-pink-300' },
    { border: 'border-rose-300', hoverBorder: 'border-rose-500', badge: 'bg-rose-100 text-rose-700 hover:bg-rose-200', link: 'hover:text-rose-600', gradient: 'from-rose-300' },
    { border: 'border-violet-300', hoverBorder: 'border-violet-500', badge: 'bg-violet-100 text-violet-700 hover:bg-violet-200', link: 'hover:text-violet-600', gradient: 'from-violet-300' },
  ];
  const colors = colorSchemes[colorIndex];

  return (
    <Card className={`overflow-hidden bg-white border-2 ${colors.border} hover:${colors.hoverBorder} group elegant-hover shadow-lg hover:shadow-xl transition-all duration-300`}>
      {thumbnail && (
        <CardHeader className="p-0">
          <div className={`aspect-[4/3] relative overflow-hidden bg-gradient-to-br ${colors.gradient} to-transparent`}>
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6 space-y-4">
        {/* Meta information */}
        <div className="flex items-center gap-2 text-xs text-ink-500 uppercase tracking-wide">
          <Badge variant="secondary" className={`${colors.badge} text-xs font-medium px-2 py-1`}>
            {source}
          </Badge>
          <span className="text-ink-300">•</span>
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-semibold text-ink-800 line-clamp-2 leading-tight">
          <a
            href={link}
            {...(link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className={`${colors.link} transition-colors duration-300`}
          >
            {title}
          </a>
        </h3>

        {/* Excerpt */}
        <p className="text-ink-600 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent"></div>

        {/* Read more link */}
        <a
          href={link}
          {...(link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`inline-flex items-center text-ink-700 ${colors.link} font-medium text-sm transition-colors duration-300 group/link`}
        >
          {type === 'article' ? 'Read Article' : 'View Project'}
          {link.startsWith('http') ? (
            <ExternalLink className="ml-2 w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          ) : (
            <svg className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </a>
      </CardContent>
    </Card>
  );
};

export default CardComponent;

