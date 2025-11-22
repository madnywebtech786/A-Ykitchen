'use client';

import { useState } from 'react';

export default function WorkingAreas() {
  const [activeArea, setActiveArea] = useState(0);

  const areas = [
    {
      name: 'Calgary',
      description: 'Our main hub of operations, serving all quadrants of the city with premium cabinetry solutions.',
      coverage: 'Full Coverage',
      projects: '500+',
      responseTime: '24 Hours',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: 'from-primary to-primary-dark',
    },
    {
      name: 'Airdrie',
      description: 'Expert service for residential and commercial projects in Airdrie and nearby communities.',
      coverage: 'Full Coverage',
      projects: '150+',
      responseTime: '24 Hours',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      gradient: 'from-primary-light to-primary',
    },
    {
      name: 'Okotoks',
      description: 'Premium cabinetry installations bringing modern elegance to Okotoks homes and businesses.',
      coverage: 'Full Coverage',
      projects: '120+',
      responseTime: '24-48 Hours',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      gradient: 'from-primary to-primary-light',
    },
    {
      name: 'Cochrane',
      description: 'Transforming spaces in Cochrane with custom-designed cabinetry that combines style and functionality.',
      coverage: 'Full Coverage',
      projects: '100+',
      responseTime: '24-48 Hours',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: 'from-primary-dark to-primary',
    },
    {
      name: 'Chestermere',
      description: 'Delivering exceptional cabinetry solutions to the lakeside community of Chestermere.',
      coverage: 'Full Coverage',
      projects: '80+',
      responseTime: '24-48 Hours',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      gradient: 'from-primary-light to-primary-dark',
    },
    {
      name: 'High River',
      description: 'Providing top-quality cabinet installations and renovations to High River residents and businesses.',
      coverage: 'Full Coverage',
      projects: '70+',
      responseTime: '24-48 Hours',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      gradient: 'from-primary/60 to-primary',
    },
  ];

  return (
    <section id="working-areas" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-16 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8c0c0c03_1px,transparent_1px),linear-gradient(to_bottom,#8c0c0c03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Service Areas</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gray-900">Where We </span>
            <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-xl text-gray-600">
            Bringing exceptional cabinetry to Calgary and surrounding communities
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {areas.map((area, idx) => (
            <div
              key={idx}
              onClick={() => setActiveArea(idx)}
              className={`relative group cursor-pointer animate-fade-in-up`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`relative bg-white rounded-3xl p-6 shadow-lg border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                activeArea === idx ? 'border-primary scale-105' : 'border-gray-200'
              }`}>
                {/* Gradient Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${area.gradient} opacity-10 rounded-full blur-2xl`}></div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <div className="w-8 h-8 text-white">
                    {area.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{area.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="font-bold text-gray-700">{area.projects}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-gray-600">{area.responseTime}</span>
                    </div>
                  </div>
                </div>

                {/* Active Indicator */}
                {activeArea === idx && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Details Section */}
        <div className="relative animate-slide-in-left mb-16">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-200">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

            {/* Active Area Display */}
            <div className="relative space-y-6">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 p-6 border-2 border-primary/20">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${areas[activeArea].gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <div className="w-8 h-8 text-white">
                        {areas[activeArea].icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-gray-900">{areas[activeArea].name}</h3>
                      <p className="text-sm text-primary font-semibold">{areas[activeArea].coverage}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    {areas[activeArea].description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
                      <div className="text-2xl font-extrabold gradient-text">{areas[activeArea].projects}</div>
                      <div className="text-xs text-gray-600 mt-1">Projects</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center shadow-md border border-gray-100">
                      <div className="text-2xl font-extrabold gradient-text">{areas[activeArea].responseTime}</div>
                      <div className="text-xs text-gray-600 mt-1">Response</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-0"></div>
              </div>

              {/* Area Selection Pills */}
              <div className="flex flex-wrap gap-2">
                {areas.map((area, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveArea(idx)}
                    className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                      activeArea === idx
                        ? 'bg-primary text-white shadow-lg scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {area.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: '6', label: 'Service Areas', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
            { value: '1000+', label: 'Total Projects', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
            { value: '100%', label: 'Coverage Rate', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            { value: '24/7', label: 'Availability', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-3xl font-extrabold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 text-lg shadow-xl hover:shadow-2xl group"
          >
            <span>Request Service in Your Area</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
