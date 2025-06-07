"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const sessionTypes = [
  {
    name: "Zumba",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "classes",
    image: "/assets/zumba.png",
  },
  {
    name: "Pilates",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "classes",
    image: "/assets/pilates.png",
  },
  {
    name: "Yoga",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "classes",
    image: "/assets/yoga.png",
  },
  {
    name: "HIIT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "classes",
    image: "/assets/hiit.png",
  },
  {
    name: "Tabata",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "classes",
    image: "/assets/tabata.png",
  },
  {
    name: "Cross-Training",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    type: "classes",
    image: "/assets/cross-training.png",
  },
  {
    name: "Weight Loss",
    description:
      "Comprehensive programs designed to help you achieve sustainable weight loss through personalized nutrition and exercise plans.",
    type: "training",
    image: "assets/weightloss.png",
  },
  {
    name: "Strength Training",
    description:
      "Build muscle mass and increase your overall strength with customized resistance training programs tailored to your goals.",
    type: "training",
    image: "assets/strength-training.png",
  },
  {
    name: "Athletic Performance",
    description:
      "Sport-specific training programs to enhance your performance, speed, agility, and endurance for competitive athletics.",
    type: "training",
    image: "assets/athletic.png",
  },
  {
    name: "Functional Training",
    description:
      "Improve your daily movement patterns and overall functionality with exercises that translate to real-world activities.",
    type: "training",
    image: "assets/functional.png",
  },
  {
    name: "Rehabilitation",
    description:
      "Specialized training programs designed to help you recover from injuries and prevent future problems.",
    type: "training",
    image: "assets/rehab.png",
  },
  {
    name: "Bodybuilding",
    description:
      "Detailed muscle-building programs with precise nutrition guidance to help you achieve your physique goals.",
    type: "training",
    image: "assets/bodybuilding.png",
  },
];

export const ChooseGrid = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredSessions =
    selectedType === "all"
      ? sessionTypes
      : sessionTypes.filter((session) => session.type === selectedType);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 underline-offset-8 underline">
            BOOK A SESSION
          </h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-medium mt-10 mb-5">
              SESSION TYPES
            </h3>
            <div className="flex justify-center space-x-4">
              <Button
                size="lg"
                variant={selectedType === "all" ? "default" : "outline"}
                onClick={() => setSelectedType("all")}
                className={`px-8 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedType === "all"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                All
              </Button>
              <Button
                size="lg"
                variant={selectedType === "classes" ? "default" : "outline"}
                onClick={() => setSelectedType("classes")}
                className={`px-8 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedType === "classes"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                Group Classes
              </Button>
              <Button
                size="lg"
                variant={selectedType === "training" ? "default" : "outline"}
                onClick={() => setSelectedType("training")}
                className={`px-8 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedType === "training"
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-black hover:text-white"
                }`}
              >
                Personal Training
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSessions.map((session, index) => (
            <Card
              key={index}
              className="bg-black text-white overflow-hidden group"
            >
              <div className="relative h-48">
                <img
                  src={session.image}
                  alt={session.name}
                  className="w-full h-full object-cover px-6"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {session.name}
                </h3>
                <p className="text-gray-300 text-sm mb-6 text-center leading-relaxed">
                  {session.description}
                </p>
                <div className="flex space-x-4">
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(
                        session.type === "classes"
                          ? "/details?sessionType=classes"
                          : "/details?sessionType=training"
                      );
                    }}
                    variant="outline"
                    className="flex-1 bg-black border-white text-white hover:bg-white cursor-pointer hover:text-black transition-colors"
                  >
                    Learn More
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/form");
                    }}
                    className="flex-1 bg-white text-black hover:bg-gray-300 cursor-pointer transition-colors"
                  >
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
