import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            You've got <span className="text-accent">one shot</span>
            <br />
            Make it count.
          </h2>

          <p className="text-xl md:text-2xl text-primary-foreground font-semibold mb-4 max-w-2xl mx-auto">
            If you're not ready, someone else is. And they'll get the job.
          </p>

          <p className="text-lg text-primary-foreground/70 mb-8">Don't let that happen.</p>

          <div className="flex flex-col items-center gap-4 mb-8">
            <Button 
              size="lg" 
              variant="cta" 
              className="text-lg h-14 px-10 group font-bold uppercase tracking-wide"
              data-cal-link="tomlouvieaux/introduction"
              data-cal-namespace="introduction"
              data-cal-config='{"layout":"month_view"}'
            >
              👊 Let's get you hired
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-primary-foreground/80">
              Free 15-minute intro call • No commitment • Just results
            </p>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/70 mb-4">
              Questions? Want to know more about my background or approach?
            </p>
            <p className="text-base font-medium text-primary-foreground/90">
              Email:{" "}
              <a href="mailto:contact@alwaysday1.eu" className="text-accent hover:underline">
                contact@alwaysday1.eu
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
