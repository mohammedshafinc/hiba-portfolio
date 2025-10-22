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
    <Card className="overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
      {thumbnail && (
        <CardHeader className="p-0">
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </CardHeader>
      )}
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Badge variant="secondary" className="text-xs">
            {source}
          </Badge>
          <span>•</span>
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-serif font-semibold text-foreground mb-3 line-clamp-2">
          <a
            href={link}
            {...(link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="hover:text-primary transition-colors duration-200"
          >
            {title}
          </a>
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>
        <a
          href={link}
          {...(link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-200"
        >
          {type === 'article' ? 'Read More' : 'View Project'}
          {link.startsWith('http') && <ExternalLink className="ml-1 w-4 h-4" />}
        </a>
      </CardContent>
    </Card>
  );
};

export default CardComponent;

