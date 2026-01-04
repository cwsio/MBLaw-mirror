import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Disclaimer() {
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
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-primary">Disclaimer</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">No Legal Services or Attorney-Client Relationship</h2>
          <p>
            The information on this website is provided solely for informational purposes and does not constitute legal advice. This information is not intended to create, and receipt of it does not constitute, an attorney-client relationship. Do not send confidential information until you have spoken with one of our attorneys and received authorization to send such information.
          </p>
          <p>
            Providing information to the Firm, whether through email links on this website or otherwise, does not create an attorney-client relationship without an express agreement from the Firm and does not prevent the Firm from representing other parties in related matters. The Firm expressly disclaims all liability with respect to actions taken or not taken based on any content on this website.
          </p>

          <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">No Warranties</h2>
          <p>
            This website and all information provided are offered "as is." The Firm makes no warranties or representations of any kind regarding the accuracy or completeness of the information.
          </p>

          <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">Limitation of Liability</h2>
          <p>
            Your use of this website is at your own risk. Materials may not reflect the most current legal developments and may be updated without notice. The Firm is not responsible for any errors or omissions or for any damages arising from the use or performance of this website.
          </p>

          <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">Email Disclaimer</h2>
          <p>
            Any email sent from the Firm and all attachments are intended only for the named recipient and may contain privileged and confidential information. Unauthorized use, copying, or distribution is prohibited. If you received an email in error, please notify the sender immediately and delete the message.
          </p>

          <h2 className="text-2xl font-serif font-bold text-foreground mt-12 mb-4">Contact Information</h2>
          <p>
            For questions about this website, contact <a href="mailto:service@mblawpartners.com" className="text-primary hover:underline">service@mblawpartners.com</a>.
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
