import React from "react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/assets/hero-bg.jpg')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide">
          NO CROWDS. NO NOISE
        </h2>
        <h3 className="text-2xl md:text-4xl font-light mb-64 tracking-wide">
          JUST A SPACE THAT'S BUILD FOR RESULTS
        </h3>
        
        <Button 
          size="lg"
          variant="outline"
          className="border-white bg-foreground/60 text-white hover:bg-white cursor-pointer hover:text-black transition-all duration-300 my-10 px-8 py-5 text-xl tracking-wider"
        >
          START YOUR FITNESS JOURNEY
        </Button>
      </div>
    </section>
  );
};