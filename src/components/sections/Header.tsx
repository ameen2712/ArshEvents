// src/components/sections/Header.tsx
"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';

const NAV_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#events', label: 'Events' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); 
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 shadow-xl backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" onClick={(e) => handleNavLinkClick(e, '#home')} className="text-3xl font-bold text-gradient-gold-shine">
            ARSH EVENTS
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1"> {/* Reduced space for denser links if underline adds visual space */}
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className="font-medium text-foreground hover:text-primary transition-colors duration-200 relative group px-3 py-2" // Added px-3, py-2
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
            <ThemeToggleButton />
          </nav>

          <div className="md:hidden flex items-center">
            <ThemeToggleButton />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                <div className="flex flex-col space-y-2"> {/* Reduced space-y for denser mobile menu */}
                  <SheetClose asChild>
                    <Link href="#home" onClick={(e) => handleNavLinkClick(e, '#home')} className="text-2xl font-bold text-gradient-gold-shine self-start mb-4">
                      ARSH EVENTS
                    </Link>
                  </SheetClose>
                  {NAV_ITEMS.map((item) => (
                    <SheetClose key={item.label} asChild>
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavLinkClick(e, item.href)}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200 py-3 px-2 block" // Added py-3, px-2
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
