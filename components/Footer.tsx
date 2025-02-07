import { Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Scissors className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-semibold">Elegance Tailoring</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Crafting perfection, one stitch at a time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="#about" className="text-sm text-muted-foreground hover:text-primary">About</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary">Services</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Monday - Friday: 9am - 6pm</li>
              <li>Saturday: 10am - 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Fashion Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@elegancetailoring.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Elegance Tailoring. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;