'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

interface MalayalamCopywritingWorkItem {
  id: string;
  thumbnail: string;
  link: string;
  description: string;
  type: string;
}

const MalayalamCopywritingWork = () => {
  const [projects, setProjects] = useState<MalayalamCopywritingWorkItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/malayalam-copywriting');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch malayalam copywriting works:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="malayalam-copywriting"
      className="py-20 md:py-28 bg-gradient-to-b from-emerald-50 via-cyan-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Colorful decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-35 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-25 -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-25 -z-10"></div>

      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-500 to-cyan-500"></span>
            <span className="mx-4 text-emerald-600 text-2xl">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent via-indigo-500 to-violet-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Malayalam Copywriting
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 via-cyan-500 via-indigo-500 to-violet-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">
            Malayalam copy and captions—crafted for clarity, culture, and conversion
          </p>
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading malayalam copywriting works...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No malayalam copywriting works available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => {
              const borderColors = [
                'border-emerald-400',
                'border-cyan-400',
                'border-indigo-400',
                'border-violet-400',
                'border-amber-400',
                'border-rose-400',
                'border-sky-400',
              ];
              const borderColor = borderColors[index % borderColors.length];
              return (
                <div
                  key={project.id}
                  className="group cursor-pointer elegant-hover"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <div
                    className={`aspect-square relative overflow-hidden bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-lg shadow-lg border-2 ${borderColor} group-hover:shadow-xl transition-all duration-300`}
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.description}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-ink-700 text-center leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-indigo-600 text-white hover:from-emerald-700 hover:to-indigo-700 px-10 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore More Malayalam Works
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MalayalamCopywritingWork;

