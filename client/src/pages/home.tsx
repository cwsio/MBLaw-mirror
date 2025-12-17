import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Scale, FileText, MapPin, Phone, Mail, Shield, Clock, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Assets
import heroVideo from "@assets/Hero_-_Video_-_1_1765991718863.mp4";
import interiorImage from "@assets/Image_interior_1765991718862.jpg";
import skyscraperImage from "@assets/Image_outside_-_2_1765991718862.jpg";
import abstractImage from "@assets/Image_outside_1765991718863.jpg";

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
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
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
              <Button size="lg" className="h-14 px-8 text-base bg-white text-primary hover:bg-white/90" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
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
          <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden flex items-end p-8 shadow-xl">
            <div className="absolute inset-0">
               <img 
                src={interiorImage} 
                alt="Modern Law Firm Interior" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4 w-full">
              <div className="flex items-center gap-3 text-white">
                <Shield className="h-5 w-5 text-accent" />
                <span className="font-serif font-medium">Reliable</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Check className="h-5 w-5 text-accent" />
                <span className="font-serif font-medium">Accurate</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Clock className="h-5 w-5 text-accent" />
                <span className="font-serif font-medium">Timely</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Scale className="h-5 w-5 text-accent" />
                <span className="font-serif font-medium">Precise</span>
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
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/60 bg-background group hover:-translate-y-1">
                <CardContent className="p-6 flex items-start gap-4 pt-6">
                  <div className="mt-1 bg-primary/5 p-2 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <FileText className="h-5 w-5 text-primary group-hover:text-white" />
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
    <section id="jurisdictions" className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
       {/* Background Image with Overlay */}
       <div className="absolute inset-0 z-0">
        <img 
          src={abstractImage} 
          alt="Abstract Architecture" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-primary/90 z-10" />
      </div>

      <div className="container relative z-20 mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Jurisdictions</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
          <div className="flex flex-col items-center group cursor-default">
            <div className="w-32 h-32 rounded-full border-2 border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-all duration-300 group-hover:scale-110">
              <span className="text-4xl font-serif font-bold">NY</span>
            </div>
            <h3 className="text-2xl font-medium tracking-wide">New York</h3>
          </div>
          <div className="h-px w-24 bg-white/20 md:h-24 md:w-px" />
          <div className="flex flex-col items-center group cursor-default">
            <div className="w-32 h-32 rounded-full border-2 border-white/20 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-primary transition-all duration-300 group-hover:scale-110">
              <span className="text-4xl font-serif font-bold">NJ</span>
            </div>
            <h3 className="text-2xl font-medium tracking-wide">New Jersey</h3>
          </div>
        </div>
        <p className="mt-12 text-white/60 italic font-light">
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
    <section id="why-mblaw" className="py-0 bg-background overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[400px] lg:h-auto min-h-full">
          <img 
            src={skyscraperImage} 
            alt="Skyscraper Architecture" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 lg:bg-transparent" />
        </div>
        
        <div className="p-12 lg:p-24 flex flex-col justify-center bg-background">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">Why Clients Choose MBLAW</h2>
          <div className="space-y-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-5"
              >
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-background rounded-2xl shadow-xl border border-border/60 overflow-hidden flex flex-col md:flex-row">
            <div className="p-12 md:w-3/5 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-10 text-lg">
                Contact us for fee quotes, availability, or to request an opinion letter.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Phone</p>
                    <p className="font-serif text-xl">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Email</p>
                    <p className="font-serif text-xl">info@mblaw.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Licensed In</p>
                    <p className="font-serif text-xl">New York & New Jersey</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary p-12 md:w-2/5 text-primary-foreground flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Scale className="w-32 h-32" />
              </div>
              <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">MBLAW</h3>
              <div className="space-y-2 mb-8 relative z-10">
                <p className="text-xl font-medium">Manes Blumenfrucht, Esq.</p>
                <p className="text-white/70">Licensed in New York & New Jersey</p>
              </div>
              <Separator className="bg-white/20 mb-8 relative z-10" />
              <p className="text-white/80 leading-relaxed italic relative z-10">
                "We prioritize clarity, responsiveness, and professional precision—enabling clients to proceed with confidence."
              </p>
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
          <p className="mt-1 text-xs uppercase tracking-wider opacity-70">Attorney Advertising</p>
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
