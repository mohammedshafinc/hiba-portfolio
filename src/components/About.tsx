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
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
      {/* Colorful decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-200 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-violet-200 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-ink-600 leading-relaxed">
                Hello! I'm <span className="font-serif font-semibold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Hiba</span>, a digital author and copywriter 
                passionate about the power of words to inform, inspire, and persuade.
              </p>
              <p className="text-lg text-ink-600 leading-relaxed">
                With experience spanning various industries from technology and finance to lifestyle and educationI bring 
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
            <div className="aspect-[4/5] bg-gradient-to-br from-violet-400 via-pink-400 to-rose-400 rounded-lg shadow-elegant-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Pen className="w-16 h-16 text-violet-600" />
                  </div>
                  <p className="text-lg font-serif italic text-white font-medium">
                    "Words are the voice of the heart."
                  </p>
                </div>
              </div>
              {/* Decorative pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)`,
                }}></div>
              </div>
            </div>
            {/* Colorful decorative border */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-transparent bg-gradient-to-br from-cyan-400 via-emerald-400 to-amber-400 rounded-lg -z-10"></div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const colorSchemes = [
              { bg: 'from-violet-100 to-pink-100', icon: 'bg-violet-500', text: 'text-violet-700', border: 'hover:border-violet-300' },
              { bg: 'from-cyan-100 to-emerald-100', icon: 'bg-cyan-500', text: 'text-cyan-700', border: 'hover:border-cyan-300' },
              { bg: 'from-rose-100 to-amber-100', icon: 'bg-rose-500', text: 'text-rose-700', border: 'hover:border-rose-300' },
              { bg: 'from-indigo-100 to-purple-100', icon: 'bg-indigo-500', text: 'text-indigo-700', border: 'hover:border-indigo-300' },
            ];
            const color = colorSchemes[index % colorSchemes.length];
            return (
              <div 
                key={index}
                className={`text-center p-6 rounded-lg bg-gradient-to-br ${color.bg} border-2 border-transparent ${color.border} hover:shadow-elegant transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${color.icon} text-white mb-4 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className={`text-lg font-serif font-semibold ${color.text} mb-2`}>
                  {item.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;

