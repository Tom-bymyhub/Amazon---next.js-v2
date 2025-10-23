"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import coachPortrait from "@/assets/coach-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ✅ Background image optimisée */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/gfdgfdgfd.jpg"
          alt="Warehouse background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center blur-3xl scale-110"
          aria-hidden="true"
        />
        {/* ✅ Overlay sombre pour le contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Contenu principal */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : texte */}
          <div className="text-primary-foreground">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Prepare for Amazon Interviews with a Former Amazon Manager
            </h1>

            <div className="space-y-3 mb-8">
              <p className="text-xl md:text-2xl font-semibold text-accent">
                Ex-Amazon manager. 200 interviews led. Now on your side.
              </p>

              <div className="flex flex-wrap gap-3 text-lg text-primary-foreground/90">
                <span>1:1 Preparation</span>
                <span className="text-accent">•</span>
                <span>Interview Simulation</span>
                <span className="text-accent">•</span>
                <span>STAR Method</span>
                <span className="text-accent">•</span>
                <span>Direct Feedback</span>
              </div>
            </div>

            {/* Bouton Cal.com */}
            <Button
              size="lg"
              variant="cta"
              className="text-lg h-14 px-8 group"
              data-cal-link="tomlouvieaux/introduction"
              data-cal-namespace="introduction"
              data-cal-config='{"layout":"month_view"}'
            >
              Book your free intro call
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Colonne droite : image du coach */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <img
                src="/IMG_0413-2.jpg"
                alt="Amazon Interview Coach - Ex-Manager"
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-6">
                <div className="text-primary-foreground">
                  <p className="text-sm font-semibold text-accent mb-1">Your Coach</p>
                  <p className="font-medium">8 years at Amazon | 200+ interviews led</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to learn more</span>
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
