import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryPage from '@/components/GalleryPage';

export const metadata = {
  title: 'Gallery - A&Y Cabinets LTD | Browse Our Custom Kitchen Cabinet Projects',
  description: 'Explore our stunning portfolio of custom kitchen cabinets and cabinetry projects. See the quality craftsmanship and innovative designs that make A&Y Cabinets Calgary\'s premier choice for residential and commercial solutions.',
  keywords: 'kitchen cabinet gallery, custom cabinet portfolio, Calgary cabinet projects, kitchen renovation gallery, cabinet design ideas, custom cabinetry showcase, A&Y Cabinets portfolio',
  openGraph: {
    title: 'Custom Cabinet Gallery | A&Y Cabinets LTD Calgary',
    description: 'Browse our extensive portfolio of custom kitchen cabinets and cabinetry projects. From modern to traditional, see the exceptional quality and craftsmanship that defines A&Y Cabinets.',
    type: 'website',
  },
};

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <GalleryPage />
      <Footer />
    </div>
  );
}
