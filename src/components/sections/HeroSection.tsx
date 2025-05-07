"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <Image
        src="https://picsum.photos/seed/arsheventshero/1920/1080"
        alt="Elegant event setup"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="z-0 filter brightness-50"
        data-ai-hint="event gala"
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="relative z-20 p-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
            ARSH EVENTS
          </span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 max-w-2xl text-gray-200">
          We Create Memories
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105"
            onClick={() => scrollToSection('contact')}
            aria-label="Plan Your Event"
          >
            Plan Your Event <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-secondary text-secondary hover:bg-secondary/10 shadow-lg transform transition-transform hover:scale-105"
            onClick={() => scrollToSection('gallery')}
            aria-label="Explore Our Work"
          >
            Explore Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
