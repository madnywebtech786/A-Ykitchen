'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  // Generate gallery images array (gallery1.jpeg to gallery84.jpeg)
  const totalImages = 84;
  const galleryImages = Array.from({ length: totalImages }, (_, i) => ({
    id: i + 1,
    src: `/images/allImgs/gallery${i + 1}.jpeg`,
    title: `Kitchen Cabinet Project ${i + 1}`,
    category: i % 3 === 0 ? 'modern' : i % 3 === 1 ? 'classic' : 'luxury',
  }));

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'modern', name: 'Modern' },
    { id: 'classic', name: 'Classic' },
    { id: 'luxury', name: 'Luxury' },
  ];

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-tr from-primary/6 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(190,31,39,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(190,31,39,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-primary/20 shadow-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              <span className="text-gray-900">Explore Our </span>
              <span className="gradient-text">Portfolio</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover 84+ stunning custom kitchen cabinet projects showcasing our commitment to quality,
              craftsmanship, and innovative design. Each project represents our dedication to transforming
              spaces into beautiful, functional works of art.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
                <div className="text-4xl font-black gradient-text mb-2">84+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Showcased</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
                <div className="text-4xl font-black gradient-text mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
                <div className="text-4xl font-black gradient-text mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Custom Made</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-xl scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg border-2 border-gray-200 hover:border-primary/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Showing <span className="font-bold text-primary">{filteredImages.length}</span> projects
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Modern Grid Layout with Column Spans */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4">
            {filteredImages.map((image, index) => {
              // Define creative span patterns for visual interest
              const getSpanClass = () => {
                const pattern = index % 12;
                if (pattern === 0) return 'md:col-span-4 lg:col-span-8'; // Extra Wide
                if (pattern === 1) return 'md:col-span-2 lg:col-span-4'; // Regular
                if (pattern === 2) return 'md:col-span-3 lg:col-span-6'; // Wide
                if (pattern === 3) return 'md:col-span-3 lg:col-span-6'; // Wide
                if (pattern === 4) return 'md:col-span-2 lg:col-span-4'; // Regular
                if (pattern === 5) return 'md:col-span-4 lg:col-span-8'; // Extra Wide
                if (pattern === 6) return 'md:col-span-3 lg:col-span-5'; // Medium
                if (pattern === 7) return 'md:col-span-3 lg:col-span-7'; // Medium-Wide
                if (pattern === 8) return 'md:col-span-2 lg:col-span-4'; // Regular
                if (pattern === 9) return 'md:col-span-2 lg:col-span-4'; // Regular
                if (pattern === 10) return 'md:col-span-2 lg:col-span-4'; // Regular
                if (pattern === 11) return 'md:col-span-6 lg:col-span-12'; // Full Width
                return 'md:col-span-3 lg:col-span-4';
              };

              return (
                <div
                  key={image.id}
                  className={`group relative cursor-pointer animate-fade-in-up ${getSpanClass()}`}
                  style={{ animationDelay: `${(index % 12) * 0.05}s` }}
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Card Container - Same Height for All */}
                  <div className="relative h-80 rounded-2xl overflow-hidden border-2 border-gray-200 bg-white hover:border-primary/40 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">

                    {/* Image */}
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="relative">
                        <div className="inline-block px-3 py-1 bg-white/90 rounded-full text-xs font-bold text-primary mb-2">
                          {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {image.title}
                        </h3>
                        <p className="text-white/90 text-sm">
                          Click to view full image
                        </p>
                      </div>

                      {/* Corner Accents */}
                      <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-white/80"></div>
                      <div className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-white/80"></div>
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-white/80"></div>
                      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-white/80"></div>
                    </div>

                    {/* Scan Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent translate-y-full group-hover:translate-y-[-100%] transition-transform duration-700 pointer-events-none"></div>

                    {/* Futuristic Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-gradient-to-br from-primary via-primary-dark to-primary rounded-3xl p-12 md:p-16 shadow-2xl text-center overflow-hidden relative">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.1)_50%,transparent_52%)] bg-[length:20px_20px]"></div>
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Ready to Start Your Custom Cabinet Project?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                Join thousands of satisfied clients who have transformed their spaces with our exceptional
                craftsmanship and personalized service. Let's create something beautiful together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group text-lg"
                >
                  <span>Get Free Consultation</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 border-2 border-white/30 hover:border-white transform hover:scale-105 text-lg"
                >
                  <span>Learn More About Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 group z-10"
            >
              <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Info */}
            <div className="absolute -top-12 left-0 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <p className="text-white font-bold">{selectedImage.title}</p>
            </div>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Navigation Hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <p className="text-white text-sm">Click anywhere to close</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
