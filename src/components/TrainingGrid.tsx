"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const trainingTypes = [
  {
    name: "Weight Loss",
    description:
      "Comprehensive programs designed to help you achieve sustainable weight loss through personalized nutrition and exercise plans.",
    level: "beginner",
    image: "assets/weightloss.png",
  },
  {
    name: "Strength Training",
    description:
      "Build muscle mass and increase your overall strength with customized resistance training programs tailored to your goals.",
    level: "intermediate",
    image: "assets/strength-training.png",
  },
  {
    name: "Athletic Performance",
    description:
      "Sport-specific training programs to enhance your performance, speed, agility, and endurance for competitive athletics.",
    level: "advanced",
    image: "assets/athletic.png",
  },
  {
    name: "Functional Training",
    description:
      "Improve your daily movement patterns and overall functionality with exercises that translate to real-world activities.",
    level: "beginner",
    image: "assets/functional.png",
  },
  {
    name: "Rehabilitation",
    description:
      "Specialized training programs designed to help you recover from injuries and prevent future problems.",
    level: "beginner",
    image: "assets/rehab.png",
  },
  {
    name: "Bodybuilding",
    description:
      "Detailed muscle-building programs with precise nutrition guidance to help you achieve your physique goals.",
    level: "advanced",
    image: "assets/bodybuilding.png",
  },
];

export const TrainingGrid = () => {
  const router = useRouter();
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  const filteredTraining =
    selectedLevel === "all"
      ? trainingTypes
      : trainingTypes.filter((training) => training.level === selectedLevel);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 underline-offset-8 underline">
            TRAINING PROGRAMS
          </h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-medium mt-10 mb-5">
              EXPERIENCE LEVEL
            </h3>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                variant={selectedLevel === "all" ? "default" : "outline"}
                onClick={() => setSelectedLevel("all")}
                className={`px-8 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedLevel === "all"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                All
              </Button>
              <Button
                size="lg"
                variant={selectedLevel === "beginner" ? "default" : "outline"}
                onClick={() => setSelectedLevel("beginner")}
                className={`px-8 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedLevel === "beginner"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                Beginner
              </Button>
              <Button
                size="lg"
                variant={
                  selectedLevel === "intermediate" ? "default" : "outline"
                }
                onClick={() => setSelectedLevel("intermediate")}
                className={`px-8 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedLevel === "intermediate"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                Intermediate
              </Button>
              <Button
                size="lg"
                variant={selectedLevel === "advanced" ? "default" : "outline"}
                onClick={() => setSelectedLevel("advanced")}
                className={`px-8 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedLevel === "advanced"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                Advanced
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTraining.map((training, index) => (
            <Card
              key={index}
              className="bg-black text-white overflow-hidden group"
            >
              <div className="relative h-48">
                <img
                  src={training.image}
                  alt={training.name}
                  className="w-full h-full object-cover px-6"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {training.name}
                </h3>
                <p className="text-gray-300 text-sm mb-6 text-center leading-relaxed">
                  {training.description}
                </p>
                <div className="flex space-x-4">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/details?sessionType=training");
                    }}
                    variant="outline"
                    className="flex-1 bg-black border-white text-white hover:bg-white cursor-pointer hover:text-black transition-colors"
                  >
                    Learn More
                  </Button>
                  <Button className="flex-1 bg-white text-black hover:bg-gray-300 cursor-pointer transition-colors">
                    Book Session
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
