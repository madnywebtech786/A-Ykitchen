'use client';

import { useState, useEffect } from 'react';

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState('mission');
  const tabs = ['mission', 'vision', 'values'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 10000); // Switch every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // The interval will be reset automatically because the component re-renders
  };

  const stats = [
    {
      value: '2,500+',
      label: 'Projects Completed',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
    },
    {
      value: '15+',
      label: 'Years Experience',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      value: '98%',
      label: 'Satisfaction Rate',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
    },
    {
      value: '50+',
      label: 'Expert Team Members',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'We use only premium materials and employ skilled artisans who take pride in every detail. Our commitment to quality ensures cabinets that stand the test of time.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Customer First',
      description: 'Your vision drives our work. We listen carefully, communicate clearly, and deliver solutions that exceed expectations while respecting your budget and timeline.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-rose-500 to-pink-500',
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge design trends and manufacturing techniques while honoring traditional woodworking methods. The result is timeless beauty with modern functionality.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-yellow-500 to-amber-500',
    },
    {
      title: 'Sustainability',
      description: 'Environmental responsibility guides our material sourcing and waste management. We partner with sustainable suppliers and implement eco-friendly practices throughout our process.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-500 to-teal-500',
    },
  ];

  const timeline = [
    {
      year: '2010',
      title: 'A&Y Cabinets Founded',
      description: 'Started with a vision to bring exceptional custom cabinetry to Calgary homes and businesses.',
    },
    {
      year: '2013',
      title: 'Expanded Services',
      description: 'Grew our team and capabilities to serve both residential and commercial markets across Alberta.',
    },
    {
      year: '2016',
      title: 'Innovation Award',
      description: 'Recognized for implementing sustainable practices and innovative design solutions in the cabinetry industry.',
    },
    {
      year: '2019',
      title: 'Regional Expansion',
      description: 'Extended our services to Airdrie, Okotoks, Cochrane, and Chestermere with full coverage support.',
    },
    {
      year: '2022',
      title: '2,000+ Projects',
      description: 'Celebrated completing over 2,000 successful projects with a 98% customer satisfaction rate.',
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Established as Calgary\'s premier custom cabinetry provider with 50+ expert team members and cutting-edge facilities.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white relative overflow-hidden">
        {/* Futuristic Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Small Gradient Orbs */}
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/3 left-1/4 w-44 h-44 bg-gradient-to-tr from-primary/6 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/3 w-40 h-40 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

          {/* Geometric Shapes */}
          <div className="absolute top-1/4 left-20 w-32 h-32 border-2 border-primary/10 rounded-2xl rotate-45 animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-28 h-28 border border-primary/8 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 left-1/3 w-24 h-24 border-2 border-primary/6 rounded-3xl rotate-12 animate-float" style={{ animationDelay: '2.5s' }}></div>

          {/* Document Icons */}
          <svg className="absolute top-1/3 right-20 w-16 h-16 opacity-10 animate-float" style={{ animationDelay: '3s' }} xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="2" width="8" height="12" rx="1" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
            <line x1="6" y1="5" x2="10" y2="5" stroke="#8c0c0c" strokeWidth="0.5"/>
            <line x1="6" y1="7" x2="10" y2="7" stroke="#8c0c0c" strokeWidth="0.5"/>
          </svg>

          {/* Award Badge */}
          <svg className="absolute top-1/2 left-16 w-14 h-14 opacity-8 animate-pulse" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="6" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
            <path d="M7 2 L8 5 L11 5 L9 7 L10 10 L7 8 L4 10 L5 7 L3 5 L6 5 Z" fill="#8c0c0c"/>
          </svg>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(140,12,12,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,12,12,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="animate-slide-in-left">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-bold text-primary uppercase tracking-wider">About A&Y Cabinets</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                <span className="text-gray-900">Crafting Excellence in </span>
                <span className="gradient-text">Custom Cabinetry</span>
                <span className="text-gray-900"> Since 2010</span>
              </h1>

              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  A&Y Cabinets LTD is Calgary's premier custom cabinetry company, transforming homes and businesses with exceptional craftsmanship and innovative design solutions. For over 15 years, we've been the trusted choice for discerning clients who demand nothing but the best.
                </p>
                <p>
                  Our journey began with a simple mission: to create beautiful, functional cabinets that enhance everyday living. Today, we're proud to have completed over 2,500 projects across Calgary and surrounding communities, maintaining an impressive 98% customer satisfaction rate.
                </p>
                <p>
                  From luxurious kitchen renovations to sophisticated commercial installations, our team of 50+ expert craftsmen brings unmatched expertise, premium materials, and attention to detail to every project we undertake.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl group"
                >
                  <span>Start Your Project</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg border-2 border-primary/20 hover:border-primary transform hover:-translate-y-1"
                >
                  <span>Our Services</span>
                </a>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative animate-slide-in-right">
              <div className="relative group">
                {/* Tilted Background with Siri Wave */}
                <div className="absolute inset-0 bg-primary/40 rounded-3xl transform rotate-6 scale-100 animate-siri-wave"></div>

                {/* Main Image */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
                    alt="A&Y Cabinets Premium Custom Cabinetry Workshop"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-8 py-4 shadow-2xl border border-gray-200 animate-float">
                  <p className="text-sm text-gray-600 mb-1">Trusted Since</p>
                  <p className="text-4xl font-black gradient-text">2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <div className="w-8 h-8 text-white">
                      {stat.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>

                  {/* Decorative Blob */}
                  <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="text-gray-900">What Drives </span>
              <span className="gradient-text">Us Forward</span>
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow border border-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'mission' && (
              <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200 animate-fade-in-up">
                <h3 className="text-3xl font-extrabold mb-6 gradient-text">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To transform spaces and enrich lives through exceptional custom cabinetry that combines timeless craftsmanship with innovative design. We are committed to delivering superior quality, personalized service, and sustainable solutions that exceed our clients' expectations while building lasting relationships based on trust and integrity.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Every cabinet we create is a testament to our dedication to excellence, from the initial consultation to final installation. We believe that beautiful, functional cabinetry has the power to transform not just spaces, but the way people live and work within them.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200 animate-fade-in-up">
                <h3 className="text-3xl font-extrabold mb-6 gradient-text">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To be recognized as Western Canada's most trusted and innovative custom cabinetry company, setting the industry standard for quality, design excellence, and customer satisfaction. We envision a future where A&Y Cabinets is synonymous with superior craftsmanship and transformative design solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We aim to expand our reach while maintaining the personalized attention and meticulous quality control that have become our hallmarks. Through continuous innovation, sustainable practices, and unwavering commitment to our clients, we will shape the future of custom cabinetry in Canada.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="space-y-6 animate-fade-in-up">
                {values.map((value, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                  >
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <div className="w-8 h-8 text-white">
                          {value.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="text-gray-900">15 Years of </span>
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to industry leadership - our story of growth and innovation
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary-light to-primary hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative animate-fade-in-up ${
                    idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  }`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className={`lg:grid lg:grid-cols-2 gap-8 items-center ${
                    idx % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Content */}
                    <div className={idx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'}>
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                        <div className="inline-flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg">
                            <span className="text-white font-black text-lg">{item.year}</span>
                          </div>
                          <h3 className="text-2xl font-extrabold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Year Dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                      <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 md:p-16 shadow-2xl border border-gray-200 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="text-gray-900">Ready to Transform Your Space with </span>
              <span className="gradient-text">A&Y Cabinets</span>
              <span className="text-gray-900">?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Join thousands of satisfied clients who have trusted us with their custom cabinetry needs. Let's bring your vision to life with exceptional craftsmanship and personalized service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl group text-lg"
              >
                <span>Get Free Consultation</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/faqs"
                className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-primary px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-lg border-2 border-primary/20 hover:border-primary transform hover:-translate-y-1 text-lg"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
