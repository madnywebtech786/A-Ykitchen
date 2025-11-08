'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Client Designation',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod sit tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      color: 'from-green-400 to-green-500',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Michael Chen',
      role: 'Client Designation',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod sit tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      color: 'from-cyan-400 to-cyan-500',
      bgColor: 'bg-cyan-50',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Client Designation',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod sit tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      color: 'from-orange-400 to-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      name: 'David Thompson',
      role: 'Client Designation',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod sit tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      color: 'from-purple-400 to-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      name: 'Jessica Williams',
      role: 'Client Designation',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod sit tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      color: 'from-pink-400 to-pink-500',
      bgColor: 'bg-pink-50',
    },
    {
      name: 'Robert Martinez',
      role: 'Client Designation',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod sit tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
      color: 'from-blue-400 to-blue-500',
      bgColor: 'bg-blue-50',
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(testimonials.length - 2, 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
      {/* Futuristic Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small Gradient Spheres */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-44 h-44 bg-gradient-to-tr from-primary/6 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-40 h-40 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

        {/* Geometric Accents */}
        <div className="absolute top-1/4 left-1/3 w-36 h-36 border-2 border-primary/7 rounded-[2.5rem] rotate-[35deg] animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-primary/8 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 left-1/4 w-28 h-28 bg-primary/4 rounded-3xl rotate-12 animate-float" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 border-2 border-primary/6 rounded-2xl rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Quote Marks */}
        <svg className="absolute top-1/3 left-16 w-16 h-16 opacity-8 animate-float" style={{ animationDelay: '3s' }} xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="12" fontSize="20" fill="#8c0c0c" fontFamily="serif">"</text>
        </svg>

        {/* Star Rating Icons */}
        <svg className="absolute top-1/2 left-1/3 w-12 h-12 opacity-10 animate-pulse" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0 L7.5 4.5 L12 6 L7.5 7.5 L6 12 L4.5 7.5 L0 6 L4.5 4.5 Z" fill="#8c0c0c"/>
        </svg>

        {/* Heart Shape */}
        <svg className="absolute top-2/3 right-1/4 w-14 h-14 opacity-8 animate-float" style={{ animationDelay: '4s' }} xmlns="http://www.w3.org/2000/svg">
          <path d="M7 12 C7 6, 2 2, 2 5 C2 8, 7 12, 7 12 C7 12, 12 8, 12 5 C12 2, 7 6, 7 12 Z" stroke="#8c0c0c" strokeWidth="1" fill="none"/>
        </svg>

        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_3px_3px,rgba(140,12,12,0.03)_1.5px,transparent_1.5px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="text-gray-900">What Our </span>
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from satisfied customers who trusted us with their dream projects
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Quote Icon with Gradient Circle */}
                  <div className="absolute -top-6 left-8">
                    <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-8">
                    {/* Client Name */}
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h4>

                    {/* Role */}
                    <p className="text-sm text-gray-500 mb-4">
                      {testimonial.role}
                    </p>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-orange-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {testimonial.text}
                    </p>

                    {/* Quote Icon Bottom Right */}
                    <div className="flex justify-end">
                      <svg className="w-10 h-10 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative Gradient Blob */}
                  <div className={`absolute -bottom-4 -right-4 w-24 h-24 ${testimonial.bgColor} rounded-full blur-2xl opacity-30 -z-10`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2">
            {testimonials.slice(0, testimonials.length - 2).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-10 h-3 bg-primary'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
