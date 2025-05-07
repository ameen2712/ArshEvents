import type { ServiceItem } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Heart, Briefcase, CakeSlice, Rocket, Paintbrush, Utensils } from 'lucide-react';

const servicesData: ServiceItem[] = [
  {
    id: 'weddings',
    icon: Heart,
    title: 'Enchanting Weddings',
    description: 'Crafting dream weddings with elegance and personalized touches that reflect your unique love story.',
  },
  {
    id: 'corporate',
    icon: Briefcase,
    title: 'Corporate Excellence',
    description: 'Delivering impactful corporate events, from conferences to galas, with professionalism and flair.',
  },
  {
    id: 'birthdays',
    icon: CakeSlice,
    title: 'Birthday Sparkles',
    description: 'Designing memorable birthday celebrations filled with joy, fun, and unforgettable moments.',
  },
  {
    id: 'launches',
    icon: Rocket,
    title: 'Dynamic Product Launches',
    description: 'Creating buzz-worthy product launches that captivate your audience and elevate your brand.',
  },
  {
    id: 'decor',
    icon: Paintbrush,
    title: 'Stunning Decorations',
    description: 'Transforming venues with breathtaking decor concepts tailored to your event\'s theme and style.',
  },
  {
    id: 'catering',
    icon: Utensils,
    title: 'Exquisite Catering',
    description: 'Providing delectable culinary experiences with diverse menus to delight every palate.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold-shine">
            What We Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive event solutions designed to make your occasion extraordinary.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Card 
              key={service.id} 
              className="shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card transform hover:-translate-y-1 group"
            >
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4 transition-colors duration-300 group-hover:bg-primary">
                  <service.icon className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-primary group-hover:text-gradient-gold-shine transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base text-muted-foreground leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
