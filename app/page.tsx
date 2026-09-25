import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoBanner from './components/PromoBanner';
import InstagramFeed from './components/InstagramFeed';
import Services from './components/Services';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <PromoBanner />
      <InstagramFeed />
      <Services />
      <Footer />
    </>
  );
}