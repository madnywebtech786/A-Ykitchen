'use client';

import { useState } from 'react';

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of cabinetry do you specialize in?',
      answer: 'We specialize in custom kitchen cabinets, bathroom vanities, closet systems, entertainment centers, and commercial cabinetry. Each project is tailored to your specific needs, style preferences, and space requirements.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      question: 'How long does a typical cabinet installation take?',
      answer: 'The timeline varies based on project complexity and scope. A standard kitchen remodel typically takes 4-6 weeks from design approval to installation. We provide detailed timelines during consultation and keep you updated throughout the process.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      question: 'Do you offer free consultations and estimates?',
      answer: 'Yes! We offer complimentary in-home consultations where we assess your space, discuss your vision, and provide detailed estimates. This allows us to understand your needs and deliver accurate pricing with no obligation.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      question: 'What materials do you use for cabinet construction?',
      answer: 'We use only premium materials including solid hardwoods (maple, oak, cherry), high-quality plywood, and durable hardware. All materials are sourced from trusted suppliers and come with manufacturer warranties for your peace of mind.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      question: 'Can you match existing cabinetry or work with my current design?',
      answer: 'Absolutely! We can match existing finishes, styles, and hardware to seamlessly integrate new cabinets with your current setup. Our team excels at color matching and replicating designs to ensure a cohesive look.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      question: 'What warranty do you offer on your work?',
      answer: 'We stand behind our craftsmanship with a comprehensive warranty covering materials and workmanship. Cabinet construction is warranted for 5 years, hardware for 2 years, and installation for 1 year. Extended warranties are available upon request.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      question: 'Do you handle permits and inspections?',
      answer: 'Yes, we manage all necessary permits and coordinate required inspections for your project. Our team is familiar with local building codes and regulations, ensuring your installation meets all compliance requirements.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      question: 'What is your payment structure?',
      answer: 'We require a deposit upon contract signing, progress payments at key milestones, and final payment upon completion. We accept various payment methods including credit cards, checks, and financing options through our partners.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8c0c0c03_1px,transparent_1px),linear-gradient(to_bottom,#8c0c0c03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">FAQs</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gray-900">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our cabinetry services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div
                className={`relative bg-white rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                  activeIndex === index
                    ? 'border-primary shadow-2xl scale-[1.02]'
                    : 'border-gray-200 shadow-lg hover:border-primary/30 hover:shadow-xl'
                }`}
              >
                {/* Gradient Background on Active */}
                {activeIndex === index && (
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl animate-pulse"></div>
                )}

                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left group/btn relative z-10"
                >
                  {/* Icon and Question */}
                  <div className="flex items-center gap-4 flex-1">
                    {/* Icon Circle */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        activeIndex === index
                          ? 'bg-gradient-to-br from-primary to-primary-dark shadow-lg scale-110'
                          : 'bg-gray-100 group-hover/btn:bg-primary/10'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 transition-colors duration-500 ${
                          activeIndex === index ? 'text-white' : 'text-primary'
                        }`}
                      >
                        {faq.icon}
                      </div>
                    </div>

                    {/* Question Text */}
                    <h3
                      className={`text-lg font-bold transition-colors duration-300 ${
                        activeIndex === index ? 'text-primary' : 'text-gray-900'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Toggle Icon */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeIndex === index
                        ? 'bg-primary rotate-180 scale-110'
                        : 'bg-gray-100 group-hover/btn:bg-gray-200'
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 transition-colors duration-500 ${
                        activeIndex === index ? 'text-white' : 'text-gray-600'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Section */}
                <div
                  className={`relative z-10 transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-[88px]">
                    {/* Decorative Line */}
                    <div className="h-px bg-gradient-to-r from-primary/20 via-primary/10 to-transparent mb-4"></div>

                    {/* Answer Text */}
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                {activeIndex === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-light to-primary"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl border border-gray-200 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our team is here to help! Contact us for personalized answers and expert guidance on your cabinetry project.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl group"
              >
                <span>Contact Us Today</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
