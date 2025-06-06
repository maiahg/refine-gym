import React from 'react';

export const ClassesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/assets/classes-hero-bg.jpg')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold mb-5 tracking-wide">
              9 STUDIOS
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-wide">
              350 CLASSES
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
