"use client";

import { Card } from "@/components/ui/card";
import { Users, Building2, Award } from "lucide-react";
import Image from "next/image";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Users,
      title: "Operations Management Experience",
      description:
        "Managed teams of 20-200 people in Distribution Centers with up to 60% temporary workers (operational role)",
    },
    {
      icon: Building2,
      title: "AMZL Network Deployment",
      description:
        "Led the deployment of delivery agencies for the AMZL network across Europe (corporate role)",
    },
    {
      icon: Award,
      title: "Amazon Belgium Launch",
      description:
        "Launched Amazon operations in Belgium: 4 sites, 200 employees, and 600 subcontractors",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* ✅ Background Image (Next.js optimized) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/IMG_1894.JPG" // 👉 Place l'image dans /public/warehouse-bg.jpg
          alt="Amazon warehouse background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* ✅ Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* ✅ Contenu au-dessus */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
              Ex-Amazon Manager
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Tom - Your Amazon Interview Coach
            </h2>
            <p className="text-lg text-white">
              8 years at{" "}
              <span className="text-white font-semibold">Amazon</span> across
              operations and corporate roles. I've been on both sides of the
              interview table.
            </p>
          </div>

          {/* ✅ Cartes d’expérience */}
          <div className="space-y-6 mb-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 border-l-4 border-l-accent/50 hover:border-l-accent transition-colors bg-black/70 border-border/20 backdrop-blur-sm"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-white/80">{achievement.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* ✅ Citation finale */}
          <Card className="p-6 bg-black/30 border-border/20 backdrop-blur-sm">
            <p className="text-white text-lg italic">
              "I know what it takes to succeed at Amazon because I've built
              teams, launched operations, and conducted hundreds of interviews.
              Let me share that knowledge with you."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
