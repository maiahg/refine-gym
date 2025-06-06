import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section className="py-20 bg-gray-700 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              ABOUT REFINE
            </h2>
            
            <div className="space-y-6 text-white text-lg font-regular leading-relaxed">
              <p>
                At Refine, we believe that fitness is more than just a routine — it's a personal evolution. We're a private gym designed for individuals who want focused, intentional progress in a supportive and distraction-free environment.
              </p>
              
              <p>
                Whether you're here to build strength, boost confidence, or transform your lifestyle, our certified trainers and custom programs are tailored to your goals. From one-on-one personal training to energizing small group sessions, every detail at Refine is built to help you push past limits and refine your best self.
              </p>
              
              <p className="font-semibold text-lg text-white">
                No crowds. No noise. <br/> Just you, your goals, and a space that's built for results.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="/assets/about.jpg" 
                alt="Modern gym equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};