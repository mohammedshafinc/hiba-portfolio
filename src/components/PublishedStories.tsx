import Card from './Card';
import { Button } from '@/components/ui/button';

const PublishedStories = () => {
  const articles = [
    {
      title: "Happy Birthday, Google! A Journey from a Garage to Global Greatness",
      excerpt: "Is there any day in your life without checking your doubts on Google? Yes google has become an integral part in every spheres of the world. 'Got a doubt? Just Google it!', this is a common phrase that we come up with commonly.",
      source: "SkillOpt",
      date: "27th September 2024",
      thumbnail: "https://www.skillopt.com/_next/image?url=https%3A%2F%2Fdashboard.skillopt.com%2F%2Fmedia%2FBlog%2FWhatsApp_Image_2025-09-27_at_4.26.50_PM.jpeg&w=3840&q=75",
      link: "https://www.skillopt.com/blog-details/happy-birthday-google-a-journey-from-a-garage-to-global-greatness",
      type: "article" as const,
    },
    {
      title: "Kiran Desai Returns to Booker Prize Shortlist With First Novel in 20 Years",
      excerpt: "Booker Prize-winning author Kiran Desai has been named among the six finalists for this year's prestigious award, nearly two decades after her last novel. Desai, who won the Booker in 2006 for The Inheritance of Loss, returns with The Loneliness of Sonia and Sunny.",
      source: "UpdatesFeed",
      date: "2024",
      thumbnail: "https://admin.updatesfeed.com/media/articles/Kiran_Desai.jpg",
      link: "https://www.updatesfeed.com/news-details/kiran-desai-returns-to-booker-prize-shortlist-with-first-novel-in-20-years",
      type: "article" as const,
    },
    {
      title: "Meta Launches AI-Powered Glasses",
      excerpt: "Meta has unveiled its latest line up of AI-powered smart glasses, introducing new models with advanced features and longer battery life. The highlight is the Meta Ray-Ban Display, which comes with a built-in micro display and can be controlled through a neural wristband.",
      source: "UpdatesFeed",
      date: "2024",
      thumbnail: "https://admin.updatesfeed.com/media/articles/WhatsApp_Image_2025-09-18_at_10.04.09_b0ee49df.jpg",
      link: "https://www.updatesfeed.com/news-details/meta-launches-ai-powered-glasses",
      type: "article" as const,
    },
    {
      title: "Taliban Bans Books by Women and Key University Subjects",
      excerpt: "The Taliban government in Afghanistan has banned hundreds of books and subjects from university curricula, further tightening restrictions on education. According to new guidelines issued in late August, all books authored by women have been removed, alongside titles considered 'anti-Sharia or against Taliban policies.'",
      source: "UpdatesFeed",
      date: "2024",
      thumbnail: "https://admin.updatesfeed.com/media/articles/WhatsApp_Image_2025-09-19_at_09.35.48_cf2916dc.jpg",
      link: "https://www.updatesfeed.com/news-details/taliban-bans-books-by-women-and-key-university-subjects",
      type: "article" as const,
    },
    {
      title: "Nobel Prize Week 2025 Kicks Off in Stockholm",
      excerpt: "The 2025 Nobel Prize announcements began on Monday in Stockholm, with the medicine prize awarded to three scientists, Mary Brunkow, Fred Ramsdell, and Shimon Sakaguchi for discovering how the immune system prevents itself from attacking the body. Their work has paved the way for new treatments for cancer and autoimmune diseases.",
      source: "UpdatesFeed",
      date: "2025",
      thumbnail: "https://admin.updatesfeed.com/media/articles/WhatsApp_Image_2025-10-08_at_10.05.16_3a2fd5f7.jpg",
      link: "https://www.updatesfeed.com/news-details/nobel-prize-week-2025-kicks-off-in-stockholm",
      type: "article" as const,
    },
    {
      title: "FIFA Unveils Trionda, the Official Ball for 2026 World Cup",
      excerpt: "FIFA has revealed Trionda, the official match ball for the 2026 FIFA World Cup hosted by Canada, Mexico, and the United States. Named after the Spanish word for 'three waves,' Trionda symbolizes the unity of the three host nations with its design featuring red, green, and blue colours representing each country.",
      source: "UpdatesFeed",
      date: "2025",
      thumbnail: "https://admin.updatesfeed.com/media/articles/H24587-WC26_OMB_Global_Product_Pro_Ball_Family_Shot_2_4x5-1355526.jpg",
      link: "https://www.updatesfeed.com/news-details/fifa-unveils-trionda-the-official-ball-for-2026-world-cup",
      type: "article" as const,
    },
  ];

  return (
    <section id="articles" className="py-20 md:py-28 bg-gradient-to-b from-cream-100 to-white">
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-sand-400"></span>
            <span className="mx-4 text-sand-500">✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-sand-400"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink-800 mb-4">
            Published Stories
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sand-400 via-sand-500 to-sand-400 mx-auto mb-6"></div>
          <p className="text-lg text-ink-500 max-w-2xl mx-auto">
            A selection of my published articles covering technology, culture, and current affairs
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              source={article.source}
              date={article.date}
              thumbnail={article.thumbnail}
              link={article.link}
              type={article.type}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 px-10 py-6 text-base font-medium shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublishedStories;
