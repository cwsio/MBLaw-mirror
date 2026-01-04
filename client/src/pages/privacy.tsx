import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <p className="lead text-xl text-foreground mb-8">
            MB Law ("we," "us," or "our") respects your privacy and is committed to protecting it through our compliance with this policy.
          </p>

          <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">Information We Collect</h2>
          <p>
            We may collect information from you when you visit our website, subscribe to our newsletter, fill out a form, or otherwise communicate with us. The types of information we may collect include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Contact information (such as name, email address, phone number)</li>
            <li>Usage data (such as IP address, browser type, pages visited)</li>
            <li>Any other information you choose to provide to us</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Provide, maintain, and improve our website and services</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our website</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">Sharing of Information</h2>
          <p>
            We do not share your personal information with third parties except as described in this policy or with your consent. We may share information with:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Service providers who perform services on our behalf</li>
            <li>Professional advisors, such as lawyers, auditors, and insurers</li>
            <li>Legal and regulatory authorities, as required by applicable law</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
          </p>

          <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:service@mblawpartners.com" className="text-primary hover:underline">service@mblawpartners.com</a>.
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
