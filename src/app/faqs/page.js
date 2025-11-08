import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <FAQs />
      <Footer />
    </div>
  );
}
