'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug, servicesData } from '@/data/servicesData';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServiceDetailPage() {
  const params = useParams();
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <TopBar />
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <Link href="/" className="text-primary hover:underline">Return to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  const otherServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      {/* Hero Section with Curved Design */}
      <section className="relative pt-40 pb-40 overflow-hidden bg-white">
        {/* Futuristic Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Small Gradient Orbs */}
          <div className="absolute top-1/4 right-1/4 w-52 h-52 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-2xl animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-tr from-primary/6 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-2/3 right-1/3 w-44 h-44 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>

          {/* Geometric Shapes */}
          <div className="absolute top-1/4 left-20 w-36 h-36 border-2 border-primary/8 rounded-3xl rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-20 w-32 h-32 border border-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 left-1/3 w-28 h-28 bg-primary/4 rounded-2xl rotate-12 animate-float" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-primary/7 rounded-xl rotate-[25deg] animate-float" style={{ animationDelay: '3s' }}></div>

          {/* Service Icons */}
          <svg className="absolute top-1/3 left-16 w-16 h-16 opacity-10 animate-float" style={{ animationDelay: '2.5s' }} xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="12" height="12" rx="2" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
            <path d="M5 7 L7 9 L11 5" stroke="#8c0c0c" strokeWidth="1.5" fill="none"/>
          </svg>

          {/* Tools Icon */}
          <svg className="absolute top-2/3 right-20 w-14 h-14 opacity-8 animate-float" style={{ animationDelay: '4s' }} xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3 L7 7 M7 3 L3 7" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
            <circle cx="10" cy="10" r="2" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
          </svg>

          {/* Diamond Grid */}
          <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-primary/6 rotate-45 animate-pulse"></div>

          {/* Dot Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_3px_3px,rgba(140,12,12,0.03)_1.5px,transparent_1.5px)] bg-[size:50px_50px]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(140,12,12,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,12,12,0.015)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Modern Breadcrumb */}
          <nav className="flex items-center gap-3 text-sm mb-12 animate-fade-in-up">
            <Link href="/" className="text-gray-500 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
            <Link href="/#services" className="text-gray-500 hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
            <span className="text-primary font-semibold">{service.shortTitle}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image Display */}
            <div className="relative animate-slide-in-left flex items-center">
              <div className="relative group w-full mx-auto">
                {/* Tilted Background Shape with Siri-like Wave Effect */}
                <div className="absolute inset-0 bg-primary/40 rounded-3xl transform -rotate-6 scale-100 animate-siri-wave"></div>

                {/* Main Image Container */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={`https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80`}
                    alt={service.shortTitle}
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 animate-slide-in-right">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="font-bold text-primary text-xs uppercase tracking-wider">Premium Service</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                <span className="text-gray-900">{service.fullTitle.split(' ').slice(0, -2).join(' ')}</span>
                <br />
                <span className="gradient-text">{service.fullTitle.split(' ').slice(-2).join(' ')}</span>
              </h1>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {service.detailedDescription}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
                >
                  <span className="relative">Get Started Today</span>
                  <svg className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#details"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg border-2 border-primary/20 hover:border-primary transform hover:-translate-y-1 text-sm"
                >
                  Explore Details
                    <svg className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  { value: '100%', label: 'Satisfaction' },
                  { value: '24/7', label: 'Support' },
                  { value: '15+', label: 'Years' }
                ].map((stat, idx) => (
                  <div key={idx} className="relative text-center p-4 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all">
                    <div className="text-2xl font-extrabold gradient-text">{stat.value}</div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Curved Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" style={{ clipPath: 'ellipse(100% 100% at 50% 100%)' }}></div>
      </section>

      {/* Features Section with Cards */}
      <section id="details" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-bold text-primary uppercase tracking-wider">Features</span>
            </div>
            <h2 className="text-5xl font-extrabold mb-6">
              <span className="text-gray-900">What's </span>
              <span className="gradient-text">Included</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive features designed to exceed your expectations
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {service.detailedFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2">
                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-full`}></div>

                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Highlight Bar */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} w-0 group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-extrabold mb-6">
              <span className="text-gray-900">Explore Other </span>
              <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              Discover our complete range of premium cabinetry solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {otherServices.map((otherService, index) => (
              <Link
                key={otherService.id}
                href={`/services/${otherService.slug}`}
                className="group relative flex"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-primary/30 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 flex flex-col w-full">
                  {/* Top Gradient Bar */}
                  <div className={`h-2 bg-gradient-to-r ${otherService.color}`}></div>

                  <div className="p-8 flex flex-col flex-1">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${otherService.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <div className="w-8 h-8">{otherService.icon}</div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {otherService.shortTitle}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                      {otherService.shortDescription}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all duration-300 text-sm mt-auto">
                      Explore Service
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(140,12,12,0.08),transparent_70%)]"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Floating Icon */}
          <div className="mb-12 inline-block relative">
            <div className={`w-28 h-28 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center text-white shadow-2xl animate-float mx-auto transform hover:scale-110 transition-transform`}>
              <div className="w-14 h-14">{service.icon}</div>
            </div>
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl -z-10"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gray-900">Ready to Get </span>
            <span className="gradient-text">Started?</span>
          </h2>

          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your space with our expert {service.shortTitle.toLowerCase()} service. Contact us today for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
            <a
              href="mailto:info@aycabinets.com"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-primary px-10 py-5 rounded-2xl font-bold transition-all duration-300 border-2 border-primary/20 hover:border-primary shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
