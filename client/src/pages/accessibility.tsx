import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Accessibility() {
  const [_, setLocation] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="w-16 md:w-20 cursor-pointer" onClick={() => setLocation("/")}>
             <img src="/logos/MBLaw-Logo-Color.svg" alt="MB LAW" className="w-full h-full" />
          </div>
          <Button variant="ghost" size="sm" onClick={() => setLocation("/")} className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">Accessibility</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p>
            MB Law is committed to providing a website that is accessible to all users. We follow Web Content Accessibility Guidelines (WCAG 2.0) and ARIA specifications to ensure a positive experience for all visitors, including those using assistive technologies.
          </p>
          <p className="mt-4">
            If you experience difficulty accessing any part of this website, please contact us at <a href="mailto:service@mblawpartners.com" className="text-primary hover:underline">service@mblawpartners.com</a> and we will gladly assist you.
          </p>
        </div>
      </main>

      <footer className="bg-secondary/30 py-12 border-t border-border mt-auto">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2025 MB Law. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
