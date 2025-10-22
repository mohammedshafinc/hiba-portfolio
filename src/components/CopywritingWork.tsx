import Card from './Card';
import { Button } from '@/components/ui/button';

const CopywritingWork = () => {
  const projects = [
    {
      title: "Project Title Placeholder",
      excerpt: "Short project description goes here. This is dummy content used to represent a copywriting case study summary.",
      source: "Client/Channel Placeholder",
      date: "Jan 2024",
      thumbnail: "/copywriting1.jpg",
      link: "#",
      type: "copywriting" as const,
    },
    {
      title: "Landing Page Copy Placeholder",
      excerpt: "Brief overview of the landing page objectives and results. This placeholder text demonstrates where content will appear.",
      source: "Project Type Placeholder",
      date: "Feb 2024",
      thumbnail: "/copywriting2.jpg",
      link: "#",
      type: "copywriting" as const,
    },
    {
      title: "Email Campaign Placeholder",
      excerpt: "Concise description of the email campaign, audience, and primary outcome. Dummy text for layout purposes.",
      source: "Channel Placeholder",
      date: "Mar 2024",
      thumbnail: "/copywriting3.jpg",
      link: "#",
      type: "copywriting" as const,
    },
  ];

  return (
    <section id="copywriting" className="py-20 md:py-28 bg-white relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cream-300 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-sand-400"></span>
            <span className="mx-4 text-sand-500">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-sand-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink-800 mb-4">
            Copywriting Work
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sand-400 via-sand-500 to-sand-400 mx-auto mb-6"></div>
          <p className="text-lg text-ink-500 max-w-2xl mx-auto">
            Strategic copy that converts—from landing pages to email campaigns
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              excerpt={project.excerpt}
              source={project.source}
              date={project.date}
              thumbnail={project.thumbnail}
              link={project.link}
              type={project.type}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 px-10 py-6 text-base font-medium shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Discover More Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CopywritingWork;
