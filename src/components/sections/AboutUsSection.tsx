import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutUsSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold-shine">
            Crafting Unforgettable Moments
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At ARSH EVENTS, we turn visions into vibrant realities.
          </p>
        </div>

        <Card className="overflow-hidden shadow-xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 items-center">
              <div className="relative h-64 md:h-[500px] w-full">
                <Image
                  src="https://picsum.photos/seed/arsheventsabout/800/600"
                  alt="Team planning an event"
                  layout="fill"
                  objectFit="cover"
                  className="transform transition-transform duration-500 hover:scale-105"
                  data-ai-hint="event planning team"
                />
              </div>
              <div className="p-8 md:p-12 lg:p-16">
                <h3 className="text-3xl font-semibold text-primary mb-6">Our Passion for Perfection</h3>
                <p className="text-foreground mb-4 text-lg leading-relaxed">
                  ARSH EVENTS is built on a foundation of passion, creativity, and meticulous attention to detail. We believe that every event is a unique story waiting to be told, and our mission is to craft an unforgettable narrative for you and your guests.
                </p>
                <p className="text-foreground mb-4 text-lg leading-relaxed">
                  From intimate gatherings to grand celebrations, our experienced team works tirelessly to ensure every element is flawless. We blend innovative design with seamless execution, creating moments that resonate long after the applause fades.
                </p>
                <p className="text-foreground text-lg leading-relaxed">
                  Let us take the stress out of planning, so you can fully immerse yourself in the joy of your special occasion. Your dream event starts here.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
