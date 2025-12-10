'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Hide preloader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Rotating Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] border-2 border-primary/10 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 w-[600px] h-[600px] border-2 border-primary/20 rounded-full animate-spin-reverse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 w-[600px] h-[600px] border border-primary/5 rounded-full animate-spin-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float-particle"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/60 rounded-full animate-float-particle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-primary/80 rounded-full animate-float-particle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-primary/40 rounded-full animate-float-particle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float-particle" style={{ animationDelay: '2s' }}></div>

        {/* Pulse Waves */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary/30 rounded-full animate-pulse-wave"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary/20 rounded-full animate-pulse-wave" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary/10 rounded-full animate-pulse-wave" style={{ animationDelay: '2s' }}></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(190,31,39,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(190,31,39,0.02)_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-move"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container with Glow Effect */}
        <div className="relative mb-12 animate-logo-pulse">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-glow"></div>

          {/* Hexagon Frame */}
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Animated Hexagon Border */}
            <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#be1f27" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#f31e24" stopOpacity="1" />
                  <stop offset="100%" stopColor="#be1f27" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <polygon
                points="50,5 90,30 90,70 50,95 10,70 10,30"
                fill="none"
                stroke="url(#hexGradient)"
                strokeWidth="2"
                strokeDasharray="300"
                strokeDashoffset="0"
                className="animate-draw-hexagon"
              />
            </svg>

            {/* Logo */}
            <div className="relative bg-white rounded-2xl p-2 shadow-2xl w-48 h-48 flex items-center justify-center animate-scale-pulse">
              <Image
                src="/images/logo.jpg"
                alt="A&Y Cabinets Logo"
                width={200}
                height={200}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold gradient-text mb-2 animate-fade-in">
            A&Y Cabinets LTD
          </h2>
          <p className="text-gray-600 text-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Crafting Excellence Since 2010
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden relative">
          {/* Progress Bar Fill */}
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-300 relative"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Percentage */}
        <div className="mt-4 text-primary font-bold text-lg tabular-nums">
          {progress}%
        </div>

        {/* Loading Dots */}
        <div className="flex gap-2 mt-6">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 animate-corner-expand"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30 animate-corner-expand" style={{ animationDelay: '0.3s' }}></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30 animate-corner-expand" style={{ animationDelay: '0.6s' }}></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 animate-corner-expand" style={{ animationDelay: '0.9s' }}></div>
    </div>
  );
}
