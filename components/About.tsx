import { motion } from 'framer-motion';
import { Ruler, Scissors, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Ruler className="h-8 w-8 md:h-10 md:w-10" />,
      title: 'Perfect Fit',
      description: 'Every garment is meticulously measured and fitted to your exact specifications.',
    },
    {
      icon: <Scissors className="h-8 w-8 md:h-10 md:w-10" />,
      title: 'Expert Craftsmanship',
      description: 'Years of experience in creating beautiful, lasting garments.',
    },
    {
      icon: <Heart className="h-8 w-8 md:h-10 md:w-10" />,
      title: 'Personal Touch',
      description: 'We take time to understand your style and preferences.',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-24 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Our Story
          </h2>
          <p className="text-lg sm:text-xl md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience in bespoke tailoring, we've built our reputation on
            creating perfectly fitted garments that make our clients feel confident and beautiful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50 hover:border-primary/20"
            >
              <div className="h-16 w-16 md:h-20 md:w-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto transition-colors duration-300 group-hover:bg-primary/20">
                <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl md:text-2xl font-semibold mb-3 text-center">{feature.title}</h3>
              <p className="text-muted-foreground text-center text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;