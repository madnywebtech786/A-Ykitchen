'use client';

import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Futuristic Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-gradient-to-tr from-primary/6 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-36 h-36 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-20 w-32 h-32 border-2 border-primary/10 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 border border-primary/8 rounded-2xl rotate-12 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 border-2 border-primary/6 rounded-full animate-pulse"></div>

        {/* Triangular Shapes */}
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-primary/3 rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-16 w-16 h-16 border-2 border-primary/7 rotate-[30deg] animate-float" style={{ animationDelay: '2.5s' }}></div>

        {/* Dot Clusters */}
        <div className="absolute top-1/4 left-20">
          <div className="relative">
            <div className="absolute w-3 h-3 bg-primary/20 rounded-full"></div>
            <div className="absolute w-2 h-2 bg-primary/15 rounded-full top-6 left-4"></div>
            <div className="absolute w-2 h-2 bg-primary/15 rounded-full top-3 left-7"></div>
          </div>
        </div>

        {/* Lines and Paths */}
        <svg className="absolute top-1/3 right-1/4 w-40 h-40 opacity-10" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10 L30 30 M30 10 L10 30" stroke="#8c0c0c" strokeWidth="2" fill="none"/>
        </svg>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(140,12,12,0.02)_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-2 gap-2">
                  {/* First two images side by side */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/images/gallery/img1.jpeg"
                      alt="Kitchen Cabinet Project 1"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src="/images/gallery/img2.jpeg"
                      alt="Kitchen Cabinet Project 2"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Third image spanning full width */}
                  <div className="relative aspect-[2/1] overflow-hidden col-span-2">
                    <Image
                      src="/images/gallery/img3.jpeg"
                      alt="Kitchen Cabinet Project 3"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-primary rounded-tl-3xl z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-4 border-primary rounded-br-3xl z-0"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 animate-float hidden lg:block z-20">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text">15+</div>
                <div className="text-sm text-gray-600 mt-1">Years of</div>
                <div className="text-sm text-gray-600">Excellence</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
                Crafting Quality
                <span className="block gradient-text">Since 2010</span>
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              At A&Y Kitchen Cabinets, we've been crafting high-quality cabinetry since 2010.
              We specialize in Canadian-inspired designs that blend natural woods like maple and oak
              with modern finishes.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our team of expert designers and craftsmen is dedicated to delivering personalized
              solutions that reflect your unique style and needs. With a commitment to sustainability,
              we source materials responsibly and prioritize eco-friendly practices in every project.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/40 to-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Craftsmen</h3>
                  <p className="text-sm text-gray-600">Skilled professionals</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Premium Materials</h3>
                  <p className="text-sm text-gray-600">Natural woods</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Eco-Friendly</h3>
                  <p className="text-sm text-gray-600">Sustainable practices</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/60 to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">100% Satisfaction</h3>
                  <p className="text-sm text-gray-600">Guaranteed results</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
