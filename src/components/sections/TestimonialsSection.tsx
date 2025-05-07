"use client";

import Image from 'next/image';
import type { TestimonialItem } from '@/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";

const testimonialsData: TestimonialItem[] = [
  {
    id: '1',
    photoUrl: 'https://picsum.photos/seed/person1/100/100',
    name: 'Priya Sharma',
    designation: 'Happy Bride',
    quote: 'ARSH EVENTS made our wedding day absolutely magical! Their attention to detail and creative vision exceeded all our expectations. Truly unforgettable!',
    dataAiHint: "woman smiling"
  },
  {
    id: '2',
    photoUrl: 'https://picsum.photos/seed/person2/100/100',
    name: 'Rajesh Kumar',
    designation: 'CEO, Tech Solutions Ltd.',
    quote: 'Our corporate gala was a massive success, thanks to the ARSH team. Professional, organized, and delivered a stunning event. Highly recommend!',
    dataAiHint: "man professional"
  },
  {
    id: '3',
    photoUrl: 'https://picsum.photos/seed/person3/100/100',
    name: 'Anjali Singh',
    designation: 'Birthday Girl\'s Mom',
    quote: 'They threw the most amazing birthday party for my daughter! The decorations, activities, everything was perfect. The kids had a blast!',
    dataAiHint: "woman happy"
  },
  {
    id: '4',
    photoUrl: 'https://picsum.photos/seed/person4/100/100',
    name: 'Vikram Patel',
    designation: 'Grateful Groom',
    quote: 'From start to finish, ARSH EVENTS was a dream to work with. They handled everything flawlessly, allowing us to truly enjoy our special day.',
    dataAiHint: "man formal"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold-shine">
            Words From Our Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why our clients love the ARSH EVENTS experience.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="p-1">
                  <Card className="shadow-xl overflow-hidden bg-card">
                    <CardContent className="p-8 md:p-12 flex flex-col items-center text-center">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-primary shadow-md">
                        <Image
                          src={testimonial.photoUrl}
                          alt={testimonial.name}
                          layout="fill"
                          objectFit="cover"
                          data-ai-hint={testimonial.dataAiHint || ""}
                        />
                      </div>
                      <Quote className="w-10 h-10 text-primary mb-4 transform rotate-180" />
                      <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <h3 className="text-xl font-semibold text-primary">{testimonial.name}</h3>
                      {testimonial.designation && (
                        <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-primary/80 text-primary-foreground hover:bg-primary hidden md:flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-primary/80 text-primary-foreground hover:bg-primary hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
