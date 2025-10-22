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
  return (
    <Card className="overflow-hidden bg-white border-sand-200 hover:border-sand-400 group elegant-hover shadow-elegant">
      {thumbnail && (
        <CardHeader className="p-0">
          <div className="aspect-[4/3] relative overflow-hidden bg-sand-100">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6 space-y-4">
        {/* Meta information */}
        <div className="flex items-center gap-2 text-xs text-ink-400 uppercase tracking-wide">
          <Badge variant="secondary" className="bg-sand-200 text-ink-700 hover:bg-sand-300 text-xs font-medium px-2 py-1">
            {source}
          </Badge>
          <span className="text-sand-400">•</span>
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-semibold text-ink-800 line-clamp-2 leading-tight">
          <a
            href={link}
            {...(link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="hover:text-sand-600 transition-colors duration-300"
          >
            {title}
          </a>
        </h3>

        {/* Excerpt */}
        <p className="text-ink-500 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sand-300 to-transparent"></div>

        {/* Read more link */}
        <a
          href={link}
          {...(link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="inline-flex items-center text-ink-700 hover:text-sand-600 font-medium text-sm transition-colors duration-300 group/link"
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

