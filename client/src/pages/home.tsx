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
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif font-bold tracking-tight text-primary">
            MBLAW
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© 2025 MBLAW. All Rights Reserved.</p>
            <p className="mt-1 text-xs uppercase tracking-wider opacity-70">Attorney Advertising</p>
          </div>
        </div>
        
        <Separator className="my-8 opacity-50" />
        
        {/* CWS Credit Section */}
        <div className="flex justify-center items-center gap-2">
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <p className="text-[16px] text-muted-foreground font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>Website By</p>
            <a href="https://www.cwsexpress.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
              <div className="w-8 h-8">
                <svg viewBox="0 0 51 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M12.0487 13.775L18.5529 7.01811C19.1661 6.38121 19.1621 5.34386 18.5439 4.71315L14.3921 0.470711C13.774 -0.161012 12.7671 -0.15585 12.1549 0.479997L1.21631 11.8427L0.464897 12.6107C0.152303 12.9296 -0.0019856 13.3528 1.92881e-05 13.775C-0.0019856 14.1972 0.152303 14.6204 0.464897 14.9394L1.21731 15.7084L12.1539 27.0701C12.7671 27.7069 13.774 27.7111 14.3911 27.0794L18.5429 22.8369C19.1611 22.2052 19.1651 21.1678 18.5519 20.532L12.0487 13.775Z" fill="url(#paint1_linear_101_4)"/>
                  <path d="M6.99418 34.6301C8.2235 34.6301 9.45181 34.6281 10.6811 34.6301C11.4506 34.6321 11.6349 34.7839 11.9045 35.5312C13.5465 40.0864 16.6174 43.1749 21.0116 44.8791C23.0084 45.6543 25.0903 45.9185 27.2083 45.7482C30.4384 45.4881 33.3048 44.269 35.7884 42.1179C37.8233 40.3548 39.2981 38.1841 40.2188 35.6138C40.4973 34.8366 40.7849 34.6301 41.5934 34.6291C43.9228 34.6281 46.2522 34.6291 48.5815 34.6291C48.6677 34.6291 48.7529 34.6281 48.839 34.6311C49.5584 34.6539 49.9581 35.1329 50.1982 35.7954C50.9324 37.8184 50.8403 39.8661 49.9176 41.8087C48.3364 45.1378 45.8691 47.7884 42.8126 49.8826C39.1121 52.4182 34.9801 54.0844 30.5691 54.8967C26.7867 55.5932 23.0163 55.4811 19.2628 54.5459C15.5891 53.6306 12.242 51.9839 9.30058 49.6104C6.18561 47.0968 3.82916 44.0204 2.22896 40.2882C1.40118 38.3582 1.35315 36.3551 2.08339 34.3411C2.31548 33.7006 2.70163 33.2429 3.39691 33.2201C4.59139 33.1814 5.79288 33.1953 6.99418 34.6301Z" fill="url(#paint0_linear_101_4)"/>
                  <path d="M38.9513 13.775L32.4471 7.01811C31.8339 6.38121 31.8379 5.34386 32.4561 4.71315L36.6079 0.470711C37.226 -0.161012 38.2329 -0.15585 38.8451 0.479997L49.7837 11.8427L50.5351 12.6107C50.8477 12.9296 51.002 13.3528 51 13.775C51.002 14.1972 50.8477 14.6204 50.5351 14.9394L49.7827 15.7084L38.8461 27.0701C38.2329 27.7069 37.226 27.7111 36.6089 27.0794L32.4571 22.8369C31.8389 22.2052 31.8349 21.1678 32.4481 20.532L38.9513 13.775Z" fill="url(#paint2_linear_101_4)"/>
                  <defs>
                    <linearGradient id="paint0_linear_101_4" x1="0" y1="0" x2="50" y2="57" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#069494" />
                      <stop offset="1" stopColor="#BBE900" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_101_4" x1="0" y1="0" x2="50" y2="57" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#069494" />
                      <stop offset="1" stopColor="#BBE900" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_101_4" x1="0" y1="0" x2="50" y2="57" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#069494" />
                      <stop offset="1" stopColor="#BBE900" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-[16px] font-semibold text-[#069494]" style={{ fontFamily: 'Poppins, sans-serif' }}>CWS</span>
            </a>
          </div>
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
