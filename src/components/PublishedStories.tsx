'use client';

import { useEffect, useState } from 'react';
import Card from './Card';
import { Button } from '@/components/ui/button';

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

  return (
    <section id="articles" className="py-20 md:py-28 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Colorful background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-25 -z-10"></div>
      
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-indigo-500 to-purple-500"></span>
            <span className="mx-4 text-indigo-600 text-2xl">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent via-pink-500 to-rose-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Published Stories
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 to-rose-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">
            A selection of my published articles covering technology, culture, and current affairs
          </p>
        </div>

        {/* Articles Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading articles...</p>
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article) => (
              <Card
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                source={article.source}
                date={article.date}
                thumbnail={article.thumbnail}
                link={article.link}
                type={article.type as "article"}
              />
            ))}
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-10 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublishedStories;
