'use client';

import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/data/servicesData';

export default function Services() {
  const services = servicesData;

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Futuristic Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-tl from-primary/7 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-44 h-44 bg-gradient-to-br from-primary/6 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-40 h-40 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-xl animate-float"></div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-1/3 right-1/4 w-36 h-36 border-2 border-primary/8 rounded-3xl rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-16 w-28 h-28 bg-primary/4 rounded-2xl rotate-12 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/4 left-20 w-24 h-24 border-2 border-primary/7 rounded-xl rotate-[25deg] animate-float" style={{ animationDelay: '3s' }}></div>

        {/* Plus Signs */}
        <svg className="absolute top-1/3 left-1/4 w-16 h-16 opacity-10 animate-float" style={{ animationDelay: '2.5s' }} xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0 L8 16 M0 8 L16 8" stroke="#8c0c0c" strokeWidth="2"/>
        </svg>

        {/* Diamond Shapes */}
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-primary/6 rotate-45 animate-pulse"></div>

        {/* Grid Pattern with Dots */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[radial-gradient(circle_at_4px_4px,rgba(140,12,12,0.08)_2px,transparent_2px)] bg-[size:20px_20px]"></div>

        {/* Curved Lines */}
        <svg className="absolute top-2/3 left-1/4 w-40 h-40 opacity-8" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20 Q20 0 40 20" stroke="#8c0c0c" strokeWidth="1.5" fill="none"/>
        </svg>

        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(140,12,12,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,12,12,0.015)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Comprehensive Cabinet
            <span className="block gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-gray-600">
            From design to installation, we offer complete cabinetry services to bring your dream kitchen to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.shortTitle}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20`}></div>

                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {service.icon}
                </div>
              </div>

              <div className="p-8">

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.shortTitle}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Hover Effect Decoration */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer custom solutions for unique projects. Contact us to discuss your specific requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
