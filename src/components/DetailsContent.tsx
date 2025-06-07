import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, Star, Users } from "lucide-react";
import DetailsSchedule from "./DetailsSchedule";   
import DetailsPricing from "./DetailsPricing";

interface DetailsContentProps {
  sessionType?: string;
}

export const DetailsContent = ({ sessionType }: DetailsContentProps) => {
  const serviceData = {
    description:
      "Experience professional fitness training designed to help you achieve your goals. Our programs are tailored to provide effective workouts in a focused, distraction-free environment.",
    features: [
      "Professional instruction",
      "Personalized approach",
      "Flexible scheduling",
      "Progress tracking",
      "Nutritional guidance",
      "Supportive environment",
    ],
  };
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-300 rounded-lg">
            <TabsTrigger value="overview" className="text-black data-[state=active]:text-black data-[state=active]:bg-white">Overview</TabsTrigger>
            <TabsTrigger value="schedule" className="text-black data-[state=active]:text-black data-[state=active]:bg-white">Schedule</TabsTrigger>
            <TabsTrigger value="pricing" className="text-black data-[state=active]:text-black data-[state=active]:bg-white">Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">About This Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6">
                  {serviceData.description}
                </p>

                <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <CardTitle>Duration</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    45 - 60 minutes per session
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <CardTitle>Group Size</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {sessionType === "training" ? "1-on-1" : "Up to 10 participants"}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <CardTitle>Intensity</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {sessionType === "training"
                      ? "Tailored to your fitness level"
                      : "Adaptable for all levels"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="schedule">
            <DetailsSchedule sessionType={sessionType || "training"} />
          </TabsContent>

          <TabsContent value="pricing">
            <DetailsPricing sessionType={sessionType || "training"} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
