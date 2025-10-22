import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Article data - in a real app, this would come from a CMS or API
const articles = {
  "google-birthday-journey": {
    title: "Happy Birthday, Google! A Journey from a Garage to Global Greatness",
    content: `
      <p>Is there any day in your life without checking your doubts on Google? Yes, Google has become an integral part in every sphere of the world. "Got a doubt? Just Google it!", this is a common phrase that we come up with commonly. And it has now become a phenomenon.</p>
      
      <p>Every year on September 27, we celebrate the birthday of one of the most influential tech companies in the world, Google. What started as a research project by two Stanford students, Larry Page and Sergey Brin, has grown into a company that touches almost every part of our daily lives.</p>
      
      <h2>The Humble Beginnings</h2>
      <p>Google's story began in a garage in Menlo Park, California, where Larry Page and Sergey Brin started working on their search engine project called "Backrub" in 1996. The name "Google" was inspired by the mathematical term "googol," representing the vast amount of information the search engine aimed to organize.</p>
      
      <blockquote>
        "Google's mission is to organize the world's information and make it universally accessible and useful."
      </blockquote>
      
      <h2>The Revolutionary Search Algorithm</h2>
      <p>What set Google apart from other search engines was its innovative PageRank algorithm, which ranked web pages based on their relevance and importance rather than just keyword matching. This revolutionary approach made Google's search results significantly more accurate and useful than its competitors.</p>
      
      <h2>Expansion Beyond Search</h2>
      <p>Over the years, Google has expanded far beyond its original search engine. Today, Google offers a vast ecosystem of products and services including:</p>
      <ul>
        <li>Gmail - Email service</li>
        <li>Google Maps - Navigation and mapping</li>
        <li>YouTube - Video sharing platform</li>
        <li>Android - Mobile operating system</li>
        <li>Google Cloud - Cloud computing services</li>
        <li>Google Drive - Cloud storage</li>
        <li>Google Photos - Photo storage and sharing</li>
      </ul>
      
      <h2>Global Impact</h2>
      <p>Google's influence extends far beyond technology. The company has fundamentally changed how we access information, communicate, work, and even navigate the world. From students researching assignments to professionals collaborating on projects, Google's tools have become essential in our daily lives.</p>
      
      <h2>The Future of Google</h2>
      <p>As Google continues to innovate with artificial intelligence, machine learning, and emerging technologies, it remains committed to its original mission of making information accessible to everyone. The company's journey from a garage startup to a global technology leader serves as an inspiration for entrepreneurs worldwide.</p>
      
      <p>Happy Birthday, Google! Here's to many more years of innovation and making the world's information more accessible to everyone.</p>
    `,
    excerpt: "Is there any day in your life without checking your doubts on Google? Yes google has become an integral part in every spheres of the world. 'Got a doubt? Just Google it!', this is a common phrase that we come up with commonly.",
    source: "SkillOpt",
    date: "27th September 2024",
    thumbnail: "/article1.jpg",
    type: "article" as const,
  },
  "kiran-desai-booker-prize": {
    title: "Kiran Desai Returns to Booker Prize Shortlist With First Novel in 20 Years",
    content: `
      <p>Booker Prize-winning author Kiran Desai has been named among the six finalists for this year's prestigious award, nearly two decades after her last novel. Desai, who won the Booker in 2006 for The Inheritance of Loss, returns with The Loneliness of Sonia and Sunny, a nearly 700-page story of two young Indians navigating life in the United States.</p>
      
      <p>This marks her third novel and first major work in 20 years, making her a leading contender for the £50,000 ($68,000) prize.</p>
      
      <h2>A Literary Comeback</h2>
      <p>Kiran Desai's return to the literary spotlight after two decades has been met with excitement and anticipation from readers and critics alike. Her previous Booker Prize victory in 2006 for The Inheritance of Loss established her as one of the most important voices in contemporary literature.</p>
      
      <blockquote>
        "The Loneliness of Sonia and Sunny represents a powerful exploration of the immigrant experience, told through the lens of two young Indians finding their way in America."
      </blockquote>
      
      <h2>The New Novel</h2>
      <p>The Loneliness of Sonia and Sunny is described as a nearly 700-page epic that delves into the complexities of the immigrant experience. The novel follows two young Indian protagonists as they navigate the challenges and opportunities of life in the United States, exploring themes of identity, belonging, and the universal human experience of loneliness.</p>
      
      <h2>Booker Prize Legacy</h2>
      <p>The Booker Prize, established in 1969, is one of the most prestigious literary awards in the English-speaking world. Winning the prize can transform an author's career and bring their work to a global audience. Desai's previous victory with The Inheritance of Loss brought her international recognition and critical acclaim.</p>
      
      <h2>Competition and Recognition</h2>
      <p>Being shortlisted for the Booker Prize is itself a significant achievement, as it places Desai among the most accomplished contemporary writers. The shortlist represents the best of English-language fiction published in the past year, and Desai's inclusion after such a long hiatus speaks to the enduring power of her literary voice.</p>
      
      <h2>Literary Impact</h2>
      <p>Desai's work has consistently explored themes of displacement, cultural identity, and the immigrant experience. Her return to the Booker shortlist not only celebrates her individual achievement but also highlights the continued importance of diverse voices in contemporary literature.</p>
      
      <p>As the literary world eagerly awaits the announcement of this year's Booker Prize winner, Kiran Desai's presence on the shortlist serves as a reminder of the enduring power of great storytelling and the ability of literature to bridge cultures and generations.</p>
    `,
    excerpt: "Booker Prize-winning author Kiran Desai has been named among the six finalists for this year's prestigious award, nearly two decades after her last novel. Desai, who won the Booker in 2006 for The Inheritance of Loss, returns with The Loneliness of Sonia and Sunny.",
    source: "UpdatesFeed",
    date: "2024",
    thumbnail: "/article2.jpg",
    type: "article" as const,
  },
  "meta-ai-powered-glasses": {
    title: "Meta Launches AI-Powered Glasses",
    content: `
      <p>Meta has unveiled its latest line up of AI-powered smart glasses, introducing new models with advanced features and longer battery life. The highlight is the Meta Ray-Ban Display, which comes with a built-in micro display and can be controlled through a neural wristband that responds to subtle hand movements.</p>
      
      <p>Designed as the next step in human-computer interaction, the glasses will be available from September 30 at a price of $799.</p>
      
      <h2>Revolutionary AI Integration</h2>
      <p>Meta's new AI-powered glasses represent a significant leap forward in wearable technology. The integration of artificial intelligence directly into eyewear opens up new possibilities for augmented reality experiences, real-time information processing, and seamless human-computer interaction.</p>
      
      <blockquote>
        "The Meta Ray-Ban Display represents the future of wearable technology, combining AI intelligence with intuitive gesture control for a truly hands-free experience."
      </blockquote>
      
      <h2>Advanced Features</h2>
      <p>The new Meta Ray-Ban Display comes equipped with several cutting-edge features:</p>
      <ul>
        <li>Built-in micro display for augmented reality overlays</li>
        <li>Neural wristband for gesture control</li>
        <li>Enhanced battery life for extended use</li>
        <li>AI-powered voice recognition and processing</li>
        <li>Real-time translation capabilities</li>
        <li>Advanced camera system for visual recognition</li>
      </ul>
      
      <h2>Gesture Control Technology</h2>
      <p>The neural wristband represents a breakthrough in human-computer interaction. By responding to subtle hand movements, users can control the glasses without needing to touch them or use voice commands. This technology enables a truly hands-free experience, making the glasses practical for various activities and environments.</p>
      
      <h2>Market Impact</h2>
      <p>At $799, Meta's AI-powered glasses are positioned as a premium product in the smart eyewear market. This pricing strategy reflects the advanced technology and AI capabilities integrated into the device. The glasses are expected to compete with other high-end smart glasses while offering unique AI-powered features.</p>
      
      <h2>Future of Wearable Technology</h2>
      <p>Meta's latest release signals the company's continued commitment to advancing wearable technology and augmented reality. The combination of AI, gesture control, and micro displays represents a significant step toward more intuitive and powerful wearable devices.</p>
      
      <h2>Availability and Launch</h2>
      <p>The Meta Ray-Ban Display will be available starting September 30, marking an important milestone in the evolution of smart eyewear. Early adopters and tech enthusiasts are eagerly anticipating the launch, with pre-orders expected to begin soon.</p>
      
      <p>This launch represents Meta's vision of a future where technology seamlessly integrates into our daily lives, making information and AI assistance readily available through intuitive, wearable devices.</p>
    `,
    excerpt: "Meta has unveiled its latest line up of AI-powered smart glasses, introducing new models with advanced features and longer battery life. The highlight is the Meta Ray-Ban Display, which comes with a built-in micro display and can be controlled through a neural wristband.",
    source: "UpdatesFeed",
    date: "2024",
    thumbnail: "https://admin.updatesfeed.com/media/articles/WhatsApp_Image_2025-09-18_at_10.04.09_b0ee49df.jpg",
    type: "article" as const,
  },
  "taliban-bans-books-women-subjects": {
    title: "Taliban Bans Books by Women and Key University Subjects",
    content: `
      <p>The Taliban government in Afghanistan has banned hundreds of books and subjects from university curricula, further tightening restrictions on education. According to new guidelines issued in late August, all books authored by women have been removed, alongside titles considered "anti-Sharia or against Taliban policies."</p>
      
      <p>Out of 679 banned titles, 140 were written by women, including scientific works such as Safety in the Chemical Laboratory. Universities were also told to halt teaching 18 subjects, six of them focused on women, such as Gender and Development, Women's Sociology, and The Role of Women in Communication.</p>
      
      <h2>Scope of the Ban</h2>
      <p>The comprehensive ban affects 679 book titles across university curricula, with a significant focus on removing women's voices from academic discourse. The removal of 140 books authored by women represents a systematic effort to erase female perspectives from educational materials, including important scientific and academic works.</p>
      
      <blockquote>
        "The ban on books by women and women-focused subjects represents a significant step backward in Afghanistan's educational progress, limiting access to diverse perspectives and critical academic knowledge."
      </blockquote>
      
      <h2>Banned Subjects</h2>
      <p>The Taliban has ordered universities to halt teaching 18 subjects, with six specifically focused on women's studies and gender issues:</p>
      <ul>
        <li>Gender and Development</li>
        <li>Women's Sociology</li>
        <li>The Role of Women in Communication</li>
        <li>Women's Rights and Legal Studies</li>
        <li>Gender Studies</li>
        <li>Feminist Theory and Practice</li>
      </ul>
      
      <h2>Impact on Academic Freedom</h2>
      <p>This latest restriction represents a significant escalation in the Taliban's efforts to control educational content and limit academic freedom. The ban not only affects women's studies but also removes important scientific works authored by women, including textbooks on laboratory safety and other technical subjects.</p>
      
      <h2>International Response</h2>
      <p>The international community has expressed deep concern over these educational restrictions, which represent a further erosion of women's rights and academic freedom in Afghanistan. Human rights organizations and educational institutions worldwide have condemned the bans as violations of fundamental rights to education and freedom of expression.</p>
      
      <h2>Historical Context</h2>
      <p>This is not the first time the Taliban has imposed severe restrictions on education, particularly affecting women and girls. Since regaining control of Afghanistan, the Taliban has systematically rolled back educational opportunities for women, banning them from universities and restricting their access to secondary education.</p>
      
      <h2>Long-term Consequences</h2>
      <p>The long-term consequences of these educational restrictions are profound. By removing women's voices from academic discourse and eliminating gender-focused subjects, the Taliban is not only limiting current educational opportunities but also shaping the future of Afghanistan's intellectual and social development.</p>
      
      <h2>Resistance and Adaptation</h2>
      <p>Despite these restrictions, Afghan educators and students continue to find ways to maintain educational standards and preserve academic knowledge. Underground educational networks and online learning platforms have emerged as alternatives to traditional university education.</p>
      
      <p>The systematic removal of women's voices from education represents a fundamental attack on academic freedom and gender equality, with implications that extend far beyond Afghanistan's borders.</p>
    `,
    excerpt: "The Taliban government in Afghanistan has banned hundreds of books and subjects from university curricula, further tightening restrictions on education. According to new guidelines issued in late August, all books authored by women have been removed, alongside titles considered 'anti-Sharia or against Taliban policies.'",
    source: "UpdatesFeed",
    date: "2024",
    thumbnail: "https://admin.updatesfeed.com/media/articles/WhatsApp_Image_2025-09-19_at_09.35.48_cf2916dc.jpg",
    type: "article" as const,
  },
};

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-semibold text-text-primary mb-4">
              Article Not Found
            </h1>
            <p className="text-text-secondary mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link href="/">
              <Button className="bg-black text-white hover:bg-gray-800">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Article Header */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-gray-600 hover:text-gray-900 text-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                {article.source}
              </Badge>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
              {article.excerpt}
            </p>
            
            {article.thumbnail && (
              <div className="aspect-video relative overflow-hidden rounded-lg mb-8">
                <Image
                  src={article.thumbnail}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-base prose-p:mb-6 prose-ul:text-gray-700 prose-li:text-gray-700 prose-li:mb-2 prose-strong:text-gray-900 prose-strong:font-semibold prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-lg">h</span>
              </div>
              <div>
                <h4 className="font-serif font-semibold text-gray-900 mb-2">hiba</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Digital author and copywriter specializing in creating compelling content 
                  that drives engagement and conversions across various industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Generate static params for all articles
export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}
