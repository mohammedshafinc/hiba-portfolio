import { Award, BookOpen, Lightbulb, Pen } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Pen className="w-6 h-6" />,
      title: "Versatile Writing",
      description: "From articles to ad copy, I adapt my voice to suit any medium and audience."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Research-Driven",
      description: "Every piece is backed by thorough research and understanding of the subject matter."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Strategic Thinking",
      description: "Crafting content that not only informs but drives engagement and conversions."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Focused",
      description: "Committed to delivering polished, error-free content that exceeds expectations."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sand-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cream-300 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink-800 mb-4">
              About Me
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-sand-400 via-sand-500 to-sand-400 mx-auto"></div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-ink-600 leading-relaxed">
                Hello! I'm <span className="font-serif font-semibold text-ink-800">Hiba</span>, a digital author and copywriter 
                passionate about the power of words to inform, inspire, and persuade.
              </p>
              <p className="text-lg text-ink-600 leading-relaxed">
                With experience spanning various industries—from technology and finance to lifestyle and education—I bring 
                a unique blend of creativity and strategic thinking to every project. My work has been featured on platforms 
                like SkillOpt and UpdatesFeed, where I cover everything from tech innovations to cultural commentary.
              </p>
              <p className="text-lg text-ink-600 leading-relaxed">
                Whether I'm crafting engaging articles, compelling copy for landing pages, or persuasive email campaigns, 
                my goal remains the same: to create content that resonates with audiences and drives meaningful results.
              </p>
            </div>
          </div>

          {/* Image Placeholder / Decorative Element */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-sand-200 via-sand-300 to-sand-400 rounded-lg shadow-elegant-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/50 flex items-center justify-center">
                    <Pen className="w-16 h-16 text-sand-600" />
                  </div>
                  <p className="text-lg font-serif italic text-ink-700">
                    "Words are the voice of the heart."
                  </p>
                </div>
              </div>
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)`,
                }}></div>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-sand-300 rounded-lg -z-10"></div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-cream-100 border border-sand-200 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sand-300 text-ink-700 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-serif font-semibold text-ink-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-ink-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

