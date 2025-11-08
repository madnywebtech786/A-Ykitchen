'use client';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We begin with an in-depth consultation to understand your vision, needs, and budget. Our experts assess your space and discuss design possibilities.',
      buttonText: 'Book Free Consultation',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our designers create detailed 3D renderings and plans, ensuring every element aligns with your style and functional requirements.',
      buttonText: 'View Design Gallery',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Build',
      description: 'Using premium materials and expert craftsmanship, we construct your custom cabinetry with precision and attention to every detail.',
      buttonText: 'Explore Craftsmanship',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Install',
      description: 'Professional installation ensures flawless integration into your space. We handle everything, leaving you with a stunning finished product.',
      buttonText: 'Schedule Installation',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-32 bg-white relative overflow-hidden">
      {/* Futuristic Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-primary/7 to-transparent rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-52 h-52 bg-gradient-to-tl from-primary/6 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-44 h-44 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

        {/* Floating Shapes */}
        <div className="absolute top-1/3 right-32 w-40 h-40 border-2 border-primary/8 rounded-[3rem] rotate-[25deg] animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-20 w-36 h-36 border border-primary/7 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-32 h-32 bg-primary/4 rounded-2xl rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/4 right-1/3 w-28 h-28 border-2 border-primary/6 rounded-3xl rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Tech Elements */}
        <svg className="absolute top-1/3 left-1/4 w-20 h-20 opacity-12 animate-float" style={{ animationDelay: '3.5s' }} xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="8" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
          <circle cx="10" cy="10" r="3" fill="#8c0c0c"/>
        </svg>

        {/* Arrow Shapes */}
        <svg className="absolute top-1/2 right-1/4 w-24 h-24 opacity-10 animate-float" style={{ animationDelay: '2.5s' }} xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12 L20 12 L16 8 M20 12 L16 16" stroke="#8c0c0c" strokeWidth="2" fill="none"/>
        </svg>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="process-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="#8c0c0c"/>
              <line x1="40" y1="40" x2="80" y2="40" stroke="#8c0c0c" strokeWidth="0.5"/>
              <line x1="40" y1="40" x2="40" y2="80" stroke="#8c0c0c" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-grid)"/>
        </svg>

        {/* Wavy Lines */}
        <svg className="absolute top-2/3 left-1/4 w-48 h-24 opacity-8" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12 Q12 0 24 12 T48 12" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gray-900">From Vision to </span>
            <span className="gradient-text">Reality</span>
          </h2>
          <p className="text-xl text-gray-600">
            A streamlined journey from initial consultation to final installation
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Main Card Container */}
                <div className="relative">
                  {/* Number Badge - Top Right Outside */}
                  <div className="absolute -top-3 -right-3 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg z-30 border-4 border-primary">
                    <span className="text-primary font-black text-lg">{step.number}</span>
                  </div>

                  {/* White Card */}
                  <div className="bg-white rounded-3xl p-6 pt-8 pb-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative overflow-visible">
                    {/* Icon with border */}
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center text-gray-700 bg-white">
                        <div className="w-8 h-8">{step.icon}</div>
                      </div>
                    </div>

                    {/* Title in Red */}
                    <h3 className="text-lg font-bold text-primary mb-3 text-center">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-xs leading-relaxed text-center mb-6 px-2">
                      {step.description}
                    </p>

                    {/* Button Container with curved bottom */}
                    <div className="relative -mx-6 mt-4">
                      {/* Button */}
                      <div className="px-6 pb-3">
                        <button className="group/btn w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-4 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105  flex items-center justify-center gap-2">
                          <span>{step.buttonText}</span>
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                      {/* Curved Bottom Background - Matches card color */}
                      <div className="h-12 bg-gradient-to-r from-primary via-primary-light to-primary rounded-b-3xl relative overflow-hidden">
                        {/* Inner curve cutout */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-white rounded-b-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 text-lg group"
          >
            <span>Start Your Project Today</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
