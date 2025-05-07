import Image from 'next/image';
import type { EventTileItem } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Info } from 'lucide-react';

const eventData: EventTileItem[] = [
  {
    id: 'event1',
    imageUrl: 'https://picsum.photos/seed/eventtile1/500/350',
    title: 'Grand Charity Gala 2024',
    date: 'November 15, 2024',
    details: 'An evening of elegance and philanthropy to support local communities. Featuring live music, auctions, and gourmet dining.',
    dataAiHint: 'gala event'
  },
  {
    id: 'event2',
    imageUrl: 'https://picsum.photos/seed/eventtile2/500/350',
    title: 'Summer Music Festival',
    date: 'July 20-22, 2024',
    details: 'Three days of non-stop music, food, and fun under the sun. Lineup includes top international and local artists.',
    dataAiHint: 'music festival'
  },
  {
    id: 'event3',
    imageUrl: 'https://picsum.photos/seed/eventtile3/500/350',
    title: 'Tech Innovators Conference',
    date: 'September 5-7, 2024',
    details: 'Join industry leaders and visionaries to explore the future of technology. Keynotes, workshops, and networking opportunities.',
    dataAiHint: 'tech conference'
  },
];

export default function UpcomingEventsSection() {
  return (
    <section id="events" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold-shine">
            Upcoming Events & Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest and greatest planned occasions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map((event) => (
            <Card key={event.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col">
              <CardHeader className="p-0">
                <div className="relative aspect-[5/3.5] w-full overflow-hidden">
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={event.dataAiHint || ""}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-2xl text-primary mb-2 group-hover:text-gradient-gold-shine transition-colors duration-300">{event.title}</CardTitle>
                {event.date && (
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <CalendarDays className="h-4 w-4 mr-2 text-secondary" />
                    {event.date}
                  </div>
                )}
                {event.details && (
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {event.details}
                  </p>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <Info className="mr-2 h-4 w-4" /> Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
