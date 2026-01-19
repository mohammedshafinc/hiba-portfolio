'use client';

import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Article Writing', level: 95 },
    { name: 'Copywriting', level: 90 },
    { name: 'Content Strategy', level: 85 },
    { name: 'SEO Writing', level: 80 },
  ];

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--accent-primary)]/5 to-transparent"></div>
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image/Visual */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative aspect-[4/5] bg-[var(--bg-tertiary)] border border-white/10 overflow-hidden">
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-[var(--accent-primary)]/30"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-8 border-2 border-[var(--accent-primary)] flex items-center justify-center">
                    <span className="text-5xl font-editorial italic text-gradient">H</span>
                  </div>
                  <blockquote className="text-xl font-editorial italic text-[var(--text-secondary)] leading-relaxed">
                    "Words have the power to both destroy and heal. When words are both true and kind, they can change our world."
                  </blockquote>
                  <div className="mt-6 divider-accent mx-auto"></div>
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--accent-primary)]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--accent-primary)]"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--accent-primary)] text-[var(--bg-primary)] px-6 py-4">
              <span className="text-3xl font-bold">1+</span>
              <span className="block text-xs uppercase tracking-wider">Years</span>
            </div>
          </div>

          {/* Right - Content */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="divider-accent"></div>
              <span className="text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-[0.2em]">
                About Me
              </span>
            </div>

            <h2 className="text-[var(--text-primary)] mb-8">
              A Storyteller at<br />
              <span className="text-gradient font-editorial italic">Heart</span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                I'm <strong className="text-[var(--text-primary)]">Hiba</strong>, a digital author and copywriter 
                with a passion for transforming complex ideas into engaging narratives that captivate and convert.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                With experience spanning technology, finance, lifestyle, and education, I bring a unique blend of 
                creativity and strategic thinking to every project. My work has been featured on platforms like 
                SkillOpt and UpdatesFeed.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Whether crafting compelling articles, persuasive landing pages, or engaging email campaigns, 
                I focus on creating content that resonates with audiences and drives meaningful results.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
                    <span className="text-sm text-[var(--accent-primary)]">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 150}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
