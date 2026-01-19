'use client';

import { useEffect, useState, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface CopywritingWork {
  id: string;
  thumbnail: string;
  link: string;
  description: string;
  type: string;
}

const CopywritingWork = () => {
  const [projects, setProjects] = useState<CopywritingWork[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/copywriting');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch copywriting works:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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
    <section ref={sectionRef} id="copywriting" className="section-padding bg-[var(--bg-primary)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/30 to-transparent"></div>
      
      {/* Gradient accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-[200px] opacity-10"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--accent-primary)]"></span>
            <span className="text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-[0.2em]">
              Creative Work
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--accent-primary)]"></span>
          </div>
          <h2 className="text-[var(--text-primary)] mb-6">
            Copywriting <span className="text-gradient font-editorial italic">Portfolio</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Strategic copy that converts—from social media content to brand campaigns.
          </p>
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-[var(--bg-card)] animate-pulse"></div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10">
            <p className="text-[var(--text-muted)]">No copywriting works available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative aspect-square overflow-hidden bg-[var(--bg-card)] border border-white/5 hover:border-[var(--accent-primary)]/30 transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                {/* Image */}
                <img
                  src={project.thumbnail}
                  alt={project.description}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <p className="text-sm text-[var(--text-primary)] font-medium line-clamp-2 mb-2">
                      {project.description}
                    </p>
                    <div className="flex items-center text-xs text-[var(--accent-primary)]">
                      <span>View Project</span>
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-[var(--accent-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        )}

        {/* View More CTA */}
        {projects.length > 0 && (
          <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button className="btn-outline">
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CopywritingWork;
