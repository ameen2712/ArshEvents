"use client";

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  { Icon: Facebook, href: '#', label: 'Facebook', colorClass: 'text-amber-400 hover:text-amber-300' },
  { Icon: Instagram, href: '#', label: 'Instagram', colorClass: 'text-yellow-400 hover:text-yellow-300' },
  { Icon: Twitter, href: '#', label: 'Twitter', colorClass: 'text-orange-400 hover:text-orange-300' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn', colorClass: 'text-amber-500 hover:text-amber-400' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div>
            <Link href="#home" onClick={(e) => scrollToSection(e, '#home')} className="text-3xl font-bold text-secondary mb-2 block">
              ARSH EVENTS
            </Link>
            <p className="text-sm text-gray-300">We Create Memories That Last a Lifetime.</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-secondary mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ Icon, href, label, colorClass }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ARSH EVENTS on ${label}`}
                  className={`p-2 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-110`}
                >
                  <Icon className={`h-6 w-6 ${colorClass}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {currentYear} ARSH EVENTS. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Crafted with <Heart className="inline h-3 w-3 text-yellow-400" /> by Your Creative Team
          </p>
        </div>
      </div>
    </footer>
  );
}
