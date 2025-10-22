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
    <section id="copywriting" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-text-primary mb-4">
            Copywriting Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

        <div className="text-center">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            Discover More Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CopywritingWork;
