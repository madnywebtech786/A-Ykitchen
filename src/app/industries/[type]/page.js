'use client';

import { useParams } from 'next/navigation';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { industriesData } from '@/data/industriesData';

export default function IndustryPage() {
  const params = useParams();
  const type = params.type;
  const industry = industriesData[type];

  if (!industry) {
    return <div>Industry not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8c0c0c03_1px,transparent_1px),linear-gradient(to_bottom,#8c0c0c03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8 animate-fade-in-up">
            <a href="/" className="text-gray-500 hover:text-primary transition-colors">Home</a>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
            <span className="text-gray-500">Industries</span>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
            <span className="text-primary font-semibold">{industry.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="animate-slide-in-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-bold text-primary uppercase tracking-wider">{industry.title}</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                <span className="gradient-text">{industry.heading}</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {industry.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {industry.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-4 text-center shadow-lg border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-2xl font-extrabold gradient-text mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl group"
                >
                  <span>Get Started</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="/#services"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg border-2 border-primary/20 hover:border-primary transform hover:-translate-y-1"
                >
                  <span>View Services</span>
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
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover aspect-[4/3]"
                  />

                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-xl border border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Trusted by</p>
                    <p className="text-2xl font-extrabold gradient-text">{industry.stats[0].value.replace('+', '')}+ Clients</p>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-primary text-white rounded-2xl px-6 py-4 shadow-2xl transform rotate-3 animate-float">
                  <p className="text-xs font-semibold opacity-90 mb-1">Success Rate</p>
                  <p className="text-3xl font-black">{industry.stats[1].value}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Specialized Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="text-gray-900">Industries We </span>
              <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cabinetry solutions tailored to your specific industry needs
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.industries.map((item, idx) => (
              <div
                key={idx}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl p-6 shadow-lg border-2 border-gray-200 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
                  {/* Gradient Background Blob */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-20`}></div>

                  {/* Icon */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <div className="w-8 h-8 text-white">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg font-extrabold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                    <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-xl border border-gray-200 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                  <span className="text-gray-900">Ready to Transform Your </span>
                  <span className="gradient-text">{type === 'residential' ? 'Home' : 'Business'}</span>
                  <span className="text-gray-900">?</span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and create a custom solution that exceeds your expectations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl group text-lg"
                  >
                    <span>Schedule Consultation</span>
                    <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="/faqs"
                    className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-primary px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-lg border-2 border-primary/20 hover:border-primary transform hover:-translate-y-1 text-lg"
                  >
                    <span>View FAQs</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
