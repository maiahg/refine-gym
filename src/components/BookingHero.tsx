import React from 'react';

export const BookingHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/assets/training-hero-bg.png')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-5 tracking-wide">
                BOOK YOUR SESSION
            </h2>
            <h3 className="text-2xl md:text-3xl font-regular tracking-wide">
              Choose your preferred time and date, <br />then provide your details to secure your spot.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};