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
  ];

  return (
    <section id="articles" className="py-16 md:py-24">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-text-primary mb-4">
            Published Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

        <div className="text-center">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            Load More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublishedStories;
