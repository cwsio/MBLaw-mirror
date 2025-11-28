import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Scale, FileText, MapPin, Phone, Mail, Shield, Clock, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import heroImage from "@assets/generated_images/abstract_modern_architecture_detail_for_legal_firm_hero.png";

// --- Components ---

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border/40 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`text-2xl font-serif font-bold tracking-tight ${scrolled ? "text-foreground" : "text-white"}`}>
          MBLAW
        </div>
        <div className="hidden md:flex gap-8">
          {["Who We Are", "Services", "Jurisdictions", "Why MBLAW", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={`text-sm font-medium hover:opacity-80 transition-opacity ${scrolled ? "text-foreground" : "text-white/90"}`}
            >
              {item}
            </a>
          ))}
        </div>
        <Button 
          variant={scrolled ? "default" : "secondary"} 
          className="font-medium"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get a Quote
        </Button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background z-10" />
      </div>

      <div className="container relative z-20 px-6 pt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white/80 font-medium tracking-widest uppercase text-sm mb-4">Real Estate Legal Opinion Letters</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6">
              Reliable service.<br />
              Clear guidance.<br />
              <span className="text-white/60">Efficient execution.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
              MBLAW is a boutique legal practice focused exclusively on delivering real estate legal opinion letters for commercial loan transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Request an Opinion
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
                View Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="who-we-are" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif font-bold mb-6"
            >
              Who We Are
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                MBLAW is a boutique legal practice focused exclusively on delivering real estate legal opinion letters for commercial loan transactions.
              </p>
              <p>
                With extensive experience across complex financing structures, MBLAW provides borrowers and lenders with accurate, timely, and meticulously prepared opinion letters that support smooth closings and reduce friction in the deal process.
              </p>
              <p>
                We prioritize clarity, responsiveness, and professional precision—enabling clients to proceed with confidence at every stage of their transaction.
              </p>
            </motion.div>
          </div>
          <div className="relative h-full min-h-[400px] bg-secondary/30 rounded-lg overflow-hidden flex items-center justify-center p-8 border border-border/50">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 grayscale" />
            <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="bg-background p-6 rounded shadow-sm border border-border/40 flex flex-col items-center text-center">
                <Shield className="h-8 w-8 mb-3 text-primary" />
                <span className="font-serif font-semibold">Reliable</span>
              </div>
              <div className="bg-background p-6 rounded shadow-sm border border-border/40 flex flex-col items-center text-center mt-8">
                <Check className="h-8 w-8 mb-3 text-primary" />
                <span className="font-serif font-semibold">Accurate</span>
              </div>
              <div className="bg-background p-6 rounded shadow-sm border border-border/40 flex flex-col items-center text-center -mt-8">
                <Clock className="h-8 w-8 mb-3 text-primary" />
                <span className="font-serif font-semibold">Timely</span>
              </div>
              <div className="bg-background p-6 rounded shadow-sm border border-border/40 flex flex-col items-center text-center">
                <Scale className="h-8 w-8 mb-3 text-primary" />
                <span className="font-serif font-semibold">Precise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    "Enforceability Opinions",
    "Entity & Authority Opinions",
    "Single-Purpose Entity (SPE) / Non-Dissolution Opinions",
    "Substantive Non-Consolidation Opinions",
    "UCC-Related Opinions",
    "Additional opinion matters upon request"
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30 border-y border-border/40">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Opinion Services</h2>
          <p className="text-muted-foreground text-lg">
            MBLAW prepares a range of commonly required real estate opinion letters with a focus on consistency, accuracy, and closing-ready language tailored to the needs of each deal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow duration-300 border-border/60 bg-background">
                <CardContent className="p-6 flex items-start gap-4 pt-6">
                  <div className="mt-1 bg-primary/5 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium text-lg leading-snug">{service}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Jurisdictions = () => {
  return (
    <section id="jurisdictions" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Jurisdictions</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <span className="text-3xl font-serif font-bold">NY</span>
            </div>
            <h3 className="text-2xl font-medium">New York</h3>
          </div>
          <div className="h-px w-24 bg-white/20 md:h-24 md:w-px" />
          <div className="flex flex-col items-center group">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <span className="text-3xl font-serif font-bold">NJ</span>
            </div>
            <h3 className="text-2xl font-medium">New Jersey</h3>
          </div>
        </div>
        <p className="mt-12 text-white/60 italic">
          (Additional jurisdictions may be available upon request.)
        </p>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Responsive Service",
      description: "Transactions move quickly, and so do we. MBLAW is committed to delivering prompt communication and reliable turnaround times."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Competitive, Predictable Fees",
      description: "As a specialized opinion practice, we offer flat-fee opinion services with transparent pricing allowing clients to plan ahead."
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Focused Expertise",
      description: "Our practice is dedicated solely to real estate legal opinion work, allowing us to provide precise, well-crafted opinions."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Seamless Collaboration",
      description: "We work directly with borrower’s counsel, lender’s counsel, and deal teams to streamline the closing process."
    }
  ];

  return (
    <section id="why-mblaw" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center">Why Clients Choose MBLAW</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-5"
            >
              <div className="shrink-0 mt-1">
                <div className="w-12 h-12 rounded bg-secondary flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-background rounded-2xl shadow-sm border border-border/60 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Contact us for fee quotes, availability, or to request an opinion letter.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Phone</p>
                    <p className="font-serif text-lg">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Email</p>
                    <p className="font-serif text-lg">info@mblaw.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Licensed In</p>
                    <p className="font-serif text-lg">New York & New Jersey</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary p-12 text-primary-foreground flex flex-col justify-center">
              <h3 className="text-2xl font-serif font-bold mb-6">MBLAW</h3>
              <div className="space-y-1 mb-8">
                <p className="text-lg font-medium">Manes Blumenfrucht, Esq.</p>
                <p className="text-white/70">Licensed in New York & New Jersey</p>
              </div>
              <Separator className="bg-white/20 mb-8" />
              <p className="text-white/80 leading-relaxed italic">
                "We prioritize clarity, responsiveness, and professional precision—enabling clients to proceed with confidence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-serif font-bold tracking-tight text-primary">
          MBLAW
        </div>
        <div className="text-sm text-muted-foreground text-center md:text-right">
          <p>© 2025 MBLAW. All Rights Reserved.</p>
          <p className="mt-1 text-xs uppercase tracking-wider">Attorney Advertising</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background selection:bg-primary/10 selection:text-primary">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Jurisdictions />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
