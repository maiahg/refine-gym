import React from "react";
import { Clock, Users, Star } from "lucide-react";

interface DetailsHeroProps {
  sessionType?: string;
}

export const DetailsHero = ({ sessionType }: DetailsHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/assets/hero-bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-5 tracking-wide">
              {sessionType === "training"
                ? "Personal Training"
                : "Group Classes"}
            </h2>
            <h3 className="text-4xl font-regular tracking-wide">
              {sessionType === "training"
                ? "Tailored to Your Goals"
                : "Join the Community"}
            </h3>
            <div className="flex flex-wrap justify-center gap-8 text-sm mt-10">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg bg-white text-black">
                <Clock className="w-4 h-4" />
                <span>45-60 minutes per session</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg bg-white text-black">
                <Users className="w-4 h-4" />
                <span>{sessionType === "training" ? "1-on-1" : "Small groups"}</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg bg-white text-black">
                <Star className="w-4 h-4 " />
                <span>Adaptable to your level</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
