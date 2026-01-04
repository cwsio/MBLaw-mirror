import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Terms() {
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
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">Terms of Use</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="lead text-xl text-foreground mb-8">
            The term "the Firm" on this website refers to MB Law, a limited liability partnership. Your use of this website is subject to the following terms and conditions. By accessing this website, you acknowledge that you have read and accept these terms and conditions.
          </p>

          <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">Copyright Notice</h2>
          <p>
            All website content including design, text, and graphics is the property of MB Law. You may view, copy, download, and print materials for personal, non-commercial use only, provided that copyright and permission notices remain intact and no modifications are made.
          </p>

          <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">No Legal Services</h2>
          <p>
            The information on this website is provided solely for informational purposes and does not constitute legal advice. Please refer to our <a href="/disclaimer" className="text-primary hover:underline">Disclaimer</a> for more information.
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
