'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Gallery() {
  const kitchenProjects = [
    {
      id: 1,
      title: 'Modern Kitchen Design',
      description: 'Custom cabinetry with elegant finishes',
      image: '/images/gallery/img1.jpeg',
    },
    {
      id: 2,
      title: 'Contemporary Kitchen',
      description: 'Sleek design with premium materials',
      image: '/images/gallery/img2.jpeg',
    },
    {
      id: 3,
      title: 'Classic Kitchen',
      description: 'Timeless elegance meets functionality',
      image: '/images/gallery/img3.jpeg',
    },
    {
      id: 4,
      title: 'Luxury Kitchen',
      description: 'High-end cabinetry and craftsmanship',
      image: '/images/gallery/img4.jpeg',
    },
    {
      id: 5,
      title: 'Traditional Kitchen',
      description: 'Warm wood tones and classic details',
      image: '/images/gallery/img5.jpeg',
    },
    {
      id: 6,
      title: 'Modern Classic Kitchen',
      description: 'Beautiful blend of style and function',
      image: '/images/gallery/img6.jpeg',
    },
    {
      id: 7,
      title: 'Designer Kitchen',
      description: 'Premium finishes and custom features',
      image: '/images/gallery/img7.jpeg',
    },
    {
      id: 8,
      title: 'Elegant Kitchen',
      description: 'Sophisticated design with attention to detail',
      image: '/images/gallery/img8.jpeg',
    },
    {
      id: 9,
      title: 'Custom Kitchen',
      description: 'Tailored solutions for your dream space',
      image: '/images/gallery/img9.jpeg',
    },
  ];

  return (
    <section id="gallery" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(140,12,12,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(140,12,12,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Animated Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-primary/20 shadow-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Kitchen Gallery</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gray-900">Our Kitchen </span>
            <span className="gradient-text">Creations</span>
          </h2>
          <p className="text-xl text-gray-600">
            Explore our collection of beautifully crafted custom kitchen cabinets
          </p>
        </div>

        {/* Gallery Grid with Creative Spans - 6 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {kitchenProjects.map((project, index) => {
            // Define creative span patterns for visual interest
            const getSpanClass = () => {
              if (index === 0) return 'md:col-span-3'; // Wide
              if (index === 1) return 'md:col-span-3'; // Wide
              if (index === 2) return 'md:col-span-2'; // Regular
              if (index === 3) return 'md:col-span-2'; // Regular
              if (index === 4) return 'md:col-span-2'; // Regular
              if (index === 5) return 'md:col-span-3'; // Wide
              if (index === 6) return 'md:col-span-3'; // Wide
              if (index === 7) return 'md:col-span-3'; // Wide
              if (index === 8) return 'md:col-span-3'; // Wide
              return '';
            };

            return (
              <div
                key={project.id}
                className={`group relative ${getSpanClass()}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Container */}
                <div className="relative w-full h-[350px] rounded-2xl overflow-hidden border-2 border-gray-200 bg-white hover:border-primary/40 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">

                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent transition-opacity duration-500"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/50 via-black/40 to-transparent">
                    <div className="relative">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-sm mb-4">
                        {project.description}
                      </p>

                      {/* Futuristic Corner Accents - Always Visible */}
                      <div className="absolute -top-6 -left-6 w-8 h-8 border-l-2 border-t-2 border-white/80 transition-all duration-300 group-hover:border-primary"></div>
                      <div className="absolute -top-6 -right-6 w-8 h-8 border-r-2 border-t-2 border-white/80 transition-all duration-300 group-hover:border-primary"></div>
                      <div className="absolute -bottom-6 -left-6 w-8 h-8 border-l-2 border-b-2 border-white/80 transition-all duration-300 group-hover:border-primary"></div>
                      <div className="absolute -bottom-6 -right-6 w-8 h-8 border-r-2 border-b-2 border-white/80 transition-all duration-300 group-hover:border-primary"></div>
                    </div>
                  </div>

                  {/* Hover Scan Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent translate-y-full group-hover:translate-y-[-100%] transition-transform duration-700 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Futuristic Design */}
        <div className="mt-24 relative">
          <div className="relative bg-gradient-to-r from-primary via-primary-dark to-primary rounded-3xl p-12 overflow-hidden shadow-2xl">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.1)_50%,transparent_52%)] bg-[length:20px_20px]"></div>
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to See More Amazing Designs?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Explore our complete portfolio of stunning kitchen transformations
              </p>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 text-lg group shadow-xl hover:shadow-2xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>View Full Gallery</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
