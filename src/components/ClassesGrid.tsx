"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const classTypes = [
  {
    name: "Zumba",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    intensity: "low",
    image: "/assets/zumba.png",
  },
  {
    name: "Pilates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    intensity: "medium",
    image: "/assets/pilates.png",
  },
  {
    name: "Yoga",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    intensity: "low",
    image: "/assets/yoga.png",
  },
  {
    name: "HIIT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    intensity: "high",
    image: "/assets/hiit.png",
  },
  {
    name: "Tabata",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    intensity: "high",
    image: "/assets/tabata.png",
  },
  {
    name: "Cross-Training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    intensity: "medium",
    image: "/assets/cross-training.png",
  },
];

export const ClassesGrid = () => {
  const router = useRouter();
  const [selectedIntensity, setSelectedIntensity] = useState<string>("all");

  const filteredClasses =
    selectedIntensity === "all"
      ? classTypes
      : classTypes.filter(
          (classType) => classType.intensity === selectedIntensity
        );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 underline-offset-8 underline">
            EXPLORE CLASSES
          </h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-medium mt-10 mb-5">
              INTENSITY LEVEL
            </h3>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                variant={selectedIntensity === "all" ? "default" : "outline"}
                onClick={() => setSelectedIntensity("all")}
                className={`px-8 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedIntensity === "all"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                All
              </Button>
              <Button
                size="lg"
                variant={selectedIntensity === "low" ? "default" : "outline"}
                onClick={() => setSelectedIntensity("low")}
                className={`px-8 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedIntensity === "low"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                Low
              </Button>
              <Button
                size="lg"
                variant={selectedIntensity === "medium" ? "default" : "outline"}
                onClick={() => setSelectedIntensity("medium")}
                className={`px-8 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedIntensity === "medium"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                Medium
              </Button>
              <Button
                size="lg"
                variant={selectedIntensity === "high" ? "default" : "outline"}
                onClick={() => setSelectedIntensity("high")}
                className={`px-8 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedIntensity === "high"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                High
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((classType, index) => (
            <Card
              key={index}
              className="bg-black text-white overflow-hidden group"
            >
              <div className="relative h-48">
                <img
                  src={classType.image}
                  alt={classType.name}
                  className="w-full h-full object-cover px-6"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {classType.name}
                </h3>
                <p className="text-gray-300 text-sm mb-6 text-center leading-relaxed">
                  {classType.description}
                </p>
                <div className="flex space-x-4">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/details?sessionType=classes");
                    }}
                    variant="outline"
                    className="flex-1 bg-black border-white text-white hover:bg-white cursor-pointer hover:text-black transition-colors"
                  >
                    Learn More
                  </Button>
                  <Button className="flex-1 bg-white text-black hover:bg-gray-300 cursor-pointer transition-colors">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
