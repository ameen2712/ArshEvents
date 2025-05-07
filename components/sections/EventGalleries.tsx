"use client";

import Image from 'next/image';
import type { GalleryMediaItem } from '@/types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const galleryData: GalleryMediaItem[] = [
  { id: '1', type: 'image', src: 'https://picsum.photos/seed/wedding1/600/400', alt: 'Wedding decoration', caption: 'Wedding Bliss', category: 'Weddings', dataAiHint: 'wedding decoration' },
  { id: '2', type: 'image', src: 'https://picsum.photos/seed/corporate1/600/400', alt: 'Corporate event setup', caption: 'Corporate Grandeur', category: 'Corporate Events', dataAiHint: 'corporate event' },
  { id: '3', type: 'image', src: 'https://picsum.photos/seed/birthday1/600/400', alt: 'Birthday party setup', caption: 'Birthday Sparkle', category: 'Birthdays', dataAiHint: 'birthday party' },
  { id: '4', type: 'image', src: 'https://picsum.photos/seed/wedding2/600/400', alt: 'Wedding reception', caption: 'Elegant Receptions', category: 'Weddings', dataAiHint: 'wedding reception' },
  { id: '5', type: 'image', src: 'https://picsum.photos/seed/corporate2/600/400', alt: 'Conference meeting', caption: 'Productive Conferences', category: 'Corporate Events', dataAiHint: 'conference meeting' },
  { id: '6', type: 'image', src: 'https://picsum.photos/seed/birthday2/600/400', alt: 'Kids birthday party', caption: 'Joyful Celebrations', category: 'Birthdays', dataAiHint: 'kids party' },
];

export default function EventGalleries() {
  return (
    <section id="gallery" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold-shine">
            Our Portfolio of Memories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the magical events we've brought to life.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {galleryData.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300">
                    <CardContent className="relative aspect-[3/2] p-0">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        layout="fill"
                        objectFit="cover"
                        className="transform transition-transform duration-500 group-hover:scale-110"
                        data-ai-hint={item.dataAiHint || ""}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                        <h3 className="text-xl font-semibold text-white mb-1">{item.caption}</h3>
                        <p className="text-sm text-gray-300">{item.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 text-primary-foreground hover:bg-primary" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/80 text-primary-foreground hover:bg-primary" />
        </Carousel>
      </div>
    </section>
  );
}
