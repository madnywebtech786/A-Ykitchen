import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WorkingAreas from '@/components/WorkingAreas';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <Process />
      <WorkingAreas />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
