import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Video, TrendingUp } from "lucide-react";

const OfferSection = () => {
  const offers = [
    {
      icon: Target,
      title: "Complete 1:1 Preparation",
      description: "Master the STAR method, Amazon's 16 Leadership Principles, and optimize your CV for maximum impact.",
      features: [
        "STAR method framework mastery",
        "Leadership Principles breakdown",
        "CV optimization for Amazon",
        "Behavioral question bank"
      ]
    },
    {
      icon: Video,
      title: "Amazon Mock Interview",
      description: "Full simulation with real-time feedback – exactly like the real thing",
      features: [
        "60-min realistic simulation",
        "Immediate actionable feedback",
        "Bar raiser perspective",
        "Detailed scoring breakdown"
      ]
    },
    {
      icon: TrendingUp,
      title: "Intensive Half-Day Amazon Training",
      description: "In-person immersive training session with hands-on practice and direct coaching",
      features: [
        "4-hour face-to-face session",
        "Multiple mock interviews",
        "Real-time coaching & corrections",
        "Personalized action plan"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How I help you get hired
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three focused approaches to pass your Amazon interview with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <Card key={index} className={`border-2 hover:border-accent transition-all duration-300 hover:shadow-premium flex flex-col h-full ${index === 1 ? 'bg-orange-50/50 dark:bg-orange-950/20' : ''}`}>
              <CardHeader>
                {index === 1 && (
                  <Badge className="w-fit mb-2 bg-orange-500 hover:bg-orange-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                  <offer.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl mb-2">{offer.title}</CardTitle>
                <CardDescription className="text-base">{offer.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {offer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
