import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Users } from "lucide-react";

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-black mb-16">
          OUR SERVICES
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 bg-black text-white overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <User className="w-12 h-12 mx-auto text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Personal Training</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're aiming to build muscle, lose weight, or improve performance, our certified trainers design personalized workouts and provide expert guidance every step of the way.
              </p>
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-black hover:bg-gray-200 px-20 text-md cursor-pointer transition-colors"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-black text-black overflow-hidden">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Users className="w-12 h-12 mx-auto text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Group Classes</h3>
              <p className="text-black mb-8 leading-relaxed">
                Sweat, smile, and stay motivated in our dynamic group sessions. Whether it's Bootcamp, Zumba, or Yoga, our classes are designed for all fitness levels and packed with energy, support, and results.
              </p>
              <Button 
                variant="secondary"
                size="lg"
                className=" bg-black text-white hover:bg-gray-700 px-20 cursor-pointer text-md hover:text-white transition-colors"
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};