import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUsPage from '@/components/AboutUsPage';

export const metadata = {
  title: 'About Us - A&Y Cabinets LTD | Premium Custom Cabinetry in Calgary Since 2010',
  description: 'Discover A&Y Cabinets LTD, Calgary\'s trusted custom cabinetry experts since 2010. We specialize in residential and commercial cabinet solutions with 15+ years of craftsmanship excellence. Serving Calgary, Airdrie, Okotoks, Cochrane, and Chestermere.',
  keywords: 'about A&Y Cabinets, custom cabinetry Calgary, cabinet makers Calgary, kitchen cabinet company, residential cabinetry, commercial cabinetry, Calgary cabinet installation, professional cabinet makers, custom woodworking Calgary',
  openGraph: {
    title: 'About A&Y Cabinets LTD | Calgary\'s Premier Custom Cabinet Experts',
    description: 'Learn about A&Y Cabinets LTD - 15+ years of excellence in custom cabinetry. 2,500+ homes transformed, 98% satisfaction rate. Expert craftsmanship for residential and commercial projects.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <AboutUsPage />
      <Footer />
    </div>
  );
}
