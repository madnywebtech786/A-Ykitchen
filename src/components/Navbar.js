'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/data/servicesData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/about' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 top-7 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="A&Y Cabinets Logo"
                  width={180}
                  height={80}
                  className="h-12 w-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary font-medium transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary font-medium transition-all duration-300 relative flex items-center gap-1 group">
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isServicesOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up">
                    <div className="py-2">
                      {servicesData.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="block px-4 py-2.5 hover:bg-gray-50 transition-colors group/item"
                        >
                          <p className="text-sm font-medium text-gray-700 group-hover/item:text-primary transition-colors">
                            {service.shortTitle}
                          </p>
                        </Link>
                      ))}
               
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary font-medium transition-all duration-300 relative flex items-center gap-1 group">
                Industries
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isIndustriesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${isIndustriesOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>

              {/* Dropdown Menu */}
              {isIndustriesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up">
                    <div className="py-2">
                      <Link
                        href="/industries/residential"
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors group/item"
                      >
                
                        <div>
                          <p className="text-sm font-medium text-gray-700 group-hover/item:text-primary transition-colors">
                            Residential
                          </p>
                        </div>
                      </Link>
                      <Link
                        href="/industries/commercial"
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors group/item"
                      >
                  
                        <div>
                          <p className="text-sm font-medium text-gray-700 group-hover/item:text-primary transition-colors">
                            Commercial
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/#contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in-up">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {servicesData.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-2 text-gray-600 hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-lg text-sm transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className={`w-6 h-6 bg-gradient-to-br ${service.color} rounded flex items-center justify-center flex-shrink-0 text-white`}>
                          <div className="w-3 h-3">
                            {service.icon}
                          </div>
                        </div>
                        {service.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Industries Dropdown */}
              <div>
                <button
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  className="w-full flex items-center justify-between text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  Industries
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isIndustriesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isIndustriesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      href="/industries/residential"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-lg text-sm transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      Residential
                    </Link>
                    <Link
                      href="/industries/commercial"
                      className="flex items-center gap-2 text-gray-600 hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-lg text-sm transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      Commercial
                    </Link>
                  </div>
                )}
              </div>

              <a
                href="/#contact"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
