import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PublishedStories from '@/components/PublishedStories';
import CopywritingWork from '@/components/CopywritingWork';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <PublishedStories />
      <CopywritingWork />
      <Contact />
      <Footer />
    </div>
  );
}
