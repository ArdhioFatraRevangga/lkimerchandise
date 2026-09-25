import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Footer from '../components/Footer';
import HowToOrder from '../components/HowToOrder';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Contact />
      </main>
      <Services />
      <Footer />
    </>
  );
}