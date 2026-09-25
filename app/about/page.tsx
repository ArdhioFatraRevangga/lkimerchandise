import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';
import Services from '../components/Services';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <About />
      </main>
      <Services />
      <Footer />
    </>
  );
}