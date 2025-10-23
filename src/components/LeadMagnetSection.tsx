'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, FileText, AlertCircle, Target } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const LeadMagnetSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Guide sent! Check your inbox.");
      setEmail("");
    }
  };

  const benefits = [
    {
      icon: AlertCircle,
      text: "Top 5 mistakes candidates make"
    },
    {
      icon: Target,
      text: "STAR method mini-canvas"
    },
    {
      icon: FileText,
      text: "Leadership Principles cheat sheet"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 border-2 border-accent/20 shadow-premium">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Download className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Free Amazon Interview Prep Guide
            </h2>
            <p className="text-lg text-muted-foreground">
              Get insider tips, common mistakes, and a STAR method canvas — straight from someone who's led 200+ Amazon interviews.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg">
                <benefit.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit.text}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="your.email@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base"
            />
            <Button type="submit" variant="cta" size="lg" className="h-12 px-8">
              Get the Guide
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            No spam. Unsubscribe anytime. Your email stays private.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
