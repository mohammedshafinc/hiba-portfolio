import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PublishedStories from '@/components/PublishedStories';
import CopywritingWork from '@/components/CopywritingWork';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PublishedStories />
      <CopywritingWork />
      <Contact />
      <Footer />
    </div>
  );
}
