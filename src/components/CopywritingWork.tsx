'use client';

import Card from './Card';
import { Button } from '@/components/ui/button';

const CopywritingWork = () => {
  const projects = [
    {
      thumbnail: "/copyright/cp1.png",
      link: "https://www.instagram.com/p/DMfWNJkSq70/?igsh=d2ttMWVnMzJucmt2",
      type: "copywriting" as const,
      description: "Tag line for business launch.",
    },
    {
      thumbnail: "/copyright/cp2.png",
      link: "https://www.instagram.com/p/DNQPvCPxSKB/?igsh=c3M3OHFwcTFmNXhj", // Add your photo redirection link here
      type: "copywriting" as const,
      description: "Content to boost digital agency",
    },
    {
      thumbnail: "/copyright/cp3.png",
      link: "https://www.instagram.com/p/DNQPvCPxSKB/?igsh=c3M3OHFwcTFmNXhj", // Add your photo redirection link here
      type: "copywriting" as const,
      description: "Youth Day Content Idea",
    },
    {
      thumbnail: "/copyright/cp4.png",
      link: "https://www.instagram.com/p/DQEa7HLDuLo/?igsh=MWU4OTRqdmNjYmRiYQ==", // Add your photo redirection link here
      type: "copywriting" as const,
      description: "Content to Promote Python Course",
    },
    {
      thumbnail: "/copyright/cp5.png",
      link: "https://www.instagram.com/p/DN2zUXo2sbw/?igsh=eGh5dDZic3FuYXV6", // Add your photo redirection link here
      type: "copywriting" as const,
      description: "Content for digital support agency",
    },
    {
      thumbnail: "/copyright/cp6.png",
      link: "https://www.instagram.com/p/DPYLzTgjgiT/?igsh=MTFhdXoxd2dxNnVwMQ==", // Add your photo redirection link here
      type: "copywriting" as const,
      description: "Importance of skill",
    },
    {
      thumbnail: "/copyright/cp7.png",
      link: "https://www.instagram.com/p/DOdtrdxDQTk/?igsh=MXM3b3dmZnU2eW4xeQ==", // Add your photo redirection link here
      type: "copywriting" as const,
      description: "Suicide Prevention content based on films",
    },
  ];

  return (
    <section id="copywriting" className="py-20 md:py-28 bg-gradient-to-b from-rose-50 via-amber-50 to-emerald-50 relative overflow-hidden">
      {/* Colorful decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-25 -z-10"></div>

      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-rose-500 to-pink-500"></span>
            <span className="mx-4 text-rose-600 text-2xl">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent via-emerald-500 to-cyan-500"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Copywriting Work
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-rose-500 via-pink-500 via-emerald-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-ink-600 max-w-2xl mx-auto">
            Strategic copy that converts—from landing pages to email campaigns
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const borderColors = [
              'border-rose-400',
              'border-pink-400',
              'border-emerald-400',
              'border-cyan-400',
              'border-amber-400',
              'border-violet-400',
              'border-indigo-400',
            ];
            const borderColor = borderColors[index % borderColors.length];
            return (
              <div
                key={index}
                className="group cursor-pointer elegant-hover"
                onClick={() => window.open(project.link, '_blank')}
              >
                <div className={`aspect-square relative overflow-hidden bg-gradient-to-br from-rose-100 to-pink-100 rounded-lg shadow-lg border-2 ${borderColor} group-hover:shadow-xl transition-all duration-300`}>
                  <img
                    src={project.thumbnail}
                    alt={`Copyright work ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:from-rose-700 hover:to-pink-700 px-10 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            Discover More Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CopywritingWork;
