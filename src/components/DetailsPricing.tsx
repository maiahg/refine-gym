"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, DollarSign, Clock, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface DetailsPricingProps {
  sessionType?: string;
}

const DetailsPricing = ({ sessionType }: DetailsPricingProps) => {
  const router = useRouter();
  const pricingData = {
    training: [
      {
        name: "Single Session",
        price: "$85",
        duration: "Per session",
        features: [
          "60-minute one-on-one session",
          "Customized workout plan",
          "Technique coaching",
          "Progress tracking",
        ],
      },
      {
        name: "4-Session Package",
        price: "$320",
        duration: "Valid for 6 weeks",
        features: [
          "Four 60-minute sessions",
          "Personalized nutrition guide",
          "Workout plan to take home",
          "Progress assessments",
        ],
      },
      {
        name: "8-Session Package",
        price: "$600",
        duration: "Valid for 12 weeks",
        features: [
          "Eight 60-minute sessions",
          "Comprehensive nutrition coaching",
          "Body composition analysis",
          "Custom meal planning",
        ],
      },
    ],
    classes: [
      {
        name: "Drop-In Class",
        price: "$25",
        duration: "Per class",
        features: [
          "Single class access",
          "All equipment included",
          "Professional instruction",
          "Modification guidance",
        ],
      },
      {
        name: "Monthly Unlimited",
        price: "$149",
        duration: "Per month",
        features: [
          "Unlimited class access",
          "Priority booking",
          "Guest pass included",
          "Nutrition workshop access",
        ],
      },
      {
        name: "3-Month Package",
        price: "$399",
        duration: "3 months",
        features: [
          "Unlimited class access",
          "Personal fitness assessment",
          "Custom nutrition plan",
          "2 guest passes per month",
        ],
      },
    ],
  };

  const pricing =
    sessionType === "training" ? pricingData.training : pricingData.classes;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-6 h-6" />
            {sessionType === "training"
              ? "Personal Training Pricing"
              : "Group Class Pricing"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-8">
            Choose the perfect package to fit your fitness journey. Whether you
            prefer personalized training or dynamic group classes, we have
            options for every level and goal.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((pkg, index) => (
              <Card key={index} className="relative">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">
                      {pkg.price}
                    </div>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/book-session");
                    }}
                    className="w-full hover:text-white hover:bg-black cursor-pointer"
                    variant="outline"
                  >
                    Book Your Session Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailsPricing;
