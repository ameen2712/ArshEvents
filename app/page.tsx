import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import EventGalleries from '@/components/sections/EventGalleries';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import UpcomingEventsSection from '@/components/sections/UpcomingEventsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <EventGalleries />
        <TestimonialsSection />
        <UpcomingEventsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
