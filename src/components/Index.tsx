import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import OfferSection from "@/components/OfferSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AchievementsSection />
      <OfferSection />
      <FinalCTASection />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-primary-foreground/70">
            © 2025 Amazon Interview Coaching. Not affiliated with Amazon.com, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
