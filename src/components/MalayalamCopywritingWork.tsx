'use client';

import { useEffect, useState, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

interface MalayalamCopywritingWork {
  id: string;
  thumbnail: string;
  link: string;
  description: string;
  type: string;
}

const MalayalamCopywritingWork = () => {
  const [projects, setProjects] = useState<MalayalamCopywritingWork[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} id="malayalam-copywriting" className="section-padding bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/30 to-transparent"></div>
      
      {/* Decorative Malayalam script element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[20rem] font-editorial text-[var(--accent-primary)]/5 leading-none pointer-events-none select-none">
        മ
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`max-w-3xl mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="divider-accent"></div>
            <span className="text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-[0.2em]">
              Regional Work
            </span>
          </div>
          <h2 className="text-[var(--text-primary)] mb-6">
            Malayalam <span className="text-gradient font-editorial italic">Copywriting</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            Creative copywriting in Malayalam—connecting brands with regional audiences through culturally resonant content.
          </p>
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-[var(--bg-card)] animate-pulse"></div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10">
            <p className="text-[var(--text-muted)]">Malayalam copywriting works coming soon.</p>
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
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Image */}
                <img
                  src={project.thumbnail}
                  alt={project.description}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <p className="text-sm text-[var(--text-primary)] font-medium line-clamp-2 mb-2">
                      {project.description}
                    </p>
                    <div className="flex items-center text-xs text-[var(--accent-primary)]">
                      <span>View</span>
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[var(--accent-primary)] border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MalayalamCopywritingWork;
