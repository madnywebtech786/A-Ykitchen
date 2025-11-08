'use client';

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Premium Quality',
      description: 'We use only the finest materials, including premium maple and oak woods, ensuring durability and timeless beauty in every cabinet we create.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Expert Craftsmanship',
      description: 'Our team of skilled artisans brings decades of combined experience, delivering meticulous attention to detail in every project.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Personalized Design',
      description: 'Every kitchen is unique. We work closely with you to create custom solutions that perfectly match your style, space, and lifestyle needs.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sustainable Practices',
      description: 'We are committed to environmental responsibility, sourcing materials sustainably and implementing eco-friendly practices throughout our process.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Timely Delivery',
      description: 'We value your time and guarantee project completion within agreed timelines, without compromising on quality or craftsmanship.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Customer Satisfaction',
      description: 'Your happiness is our priority. We offer comprehensive warranties and ongoing support to ensure you love your cabinets for years to come.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Futuristic Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small Gradient Orbs */}
        <div className="absolute top-1/4 left-16 w-44 h-44 bg-gradient-to-br from-primary/7 to-transparent rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 right-20 w-52 h-52 bg-gradient-to-tl from-primary/6 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-36 h-36 border border-primary/10 rounded-2xl rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-primary/8 rounded-3xl rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-28 h-28 border-2 border-primary/6 rounded-full animate-pulse"></div>

        {/* Hexagons */}
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-primary/4 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 border-2 border-primary/7 rounded-xl rotate-[30deg] animate-float" style={{ animationDelay: '3.5s' }}></div>

        {/* Star Patterns */}
        <svg className="absolute top-1/3 right-16 w-12 h-12 opacity-15 animate-pulse" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0 L7.5 4.5 L12 6 L7.5 7.5 L6 12 L4.5 7.5 L0 6 L4.5 4.5 Z" fill="#8c0c0c"/>
        </svg>

        {/* Connected Dots */}
        <svg className="absolute top-1/2 left-1/3 w-32 h-32 opacity-10" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="2" fill="#8c0c0c"/>
          <circle cx="24" cy="24" r="2" fill="#8c0c0c"/>
          <line x1="8" y1="8" x2="24" y2="24" stroke="#8c0c0c" strokeWidth="1"/>
        </svg>

        {/* Diagonal Lines Pattern */}
        <div className="absolute top-1/3 right-1/3 w-1/3 h-1/3 bg-[linear-gradient(135deg,transparent_48%,rgba(140,12,12,0.02)_48%,rgba(140,12,12,0.02)_52%,transparent_52%)] bg-[size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
            What Makes Us
            <span className="block gradient-text">Stand Out</span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover why homeowners and contractors trust A&Y Cabinets for their kitchen transformation projects
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-primary">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Kitchen?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Let's bring your vision to life with our expertise and craftsmanship
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Start Your Project
                </a>
                <a
                  href="#services"
                  className="bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-full font-semibold transition-all duration-300 border-2 border-primary shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                >
                  View Our Services
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
