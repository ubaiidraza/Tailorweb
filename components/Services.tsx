import { motion } from 'framer-motion';
import {
  Scissors,
  Ruler,
  Heart,
  Crown,
  Clock,
  Shirt,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: 'Custom Tailoring',
      description: 'Bespoke garments crafted to your exact measurements and style preferences.',
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: 'Bridal Wear',
      description: 'Exquisite wedding dresses and bridal party attire, perfectly fitted for your special day.',
    },
    {
      icon: <Shirt className="h-8 w-8" />,
      title: 'Formal Wear',
      description: 'Elegant suits, dresses, and evening wear for any formal occasion.',
    },
    {
      icon: <Ruler className="h-8 w-8" />,
      title: 'Alterations',
      description: 'Expert alterations to ensure your existing garments fit perfectly.',
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Express Service',
      description: 'Quick turnaround options available for urgent requirements.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Style Consultation',
      description: 'Professional advice on styles, fabrics, and designs that suit you best.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From bespoke tailoring to quick alterations, we offer a comprehensive range
            of services to meet all your clothing needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;