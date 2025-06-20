"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-sm border-b border-white">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-20">
            <a
              onClick={(e) => {
                e.preventDefault();
                router.push("/");
              }}
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                router.push("/classes");
              }}
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors cursor-pointer"
            >
              Classes
            </a>
            <a
              onClick={(e) => {
                e.preventDefault();
                router.push("/training");
              }}
              className="text-white text-lg font-semibold hover:text-gray-300 transition-colors cursor-pointer"
            >
              Training
            </a>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-4xl font-extrabold text-white tracking-wider">
              REFINE
            </h1>
          </div>

          <div className="flex items-center space-x-20">
            <a
              href="#footer"
              className="text-white text-lg font-semibold hover:text-gray-300 cursor-pointer transition-colors"
            >
              CONTACT
            </a>
            <Button
              onClick={(e) => {
                e.preventDefault();
                router.push("/book-session");
              }}
              variant="outline"
              size="lg"
              className="border-white bg-black/75 text-white text-lg font-semibold hover:bg-white cursor-pointer hover:text-black/75 transition-all duration-300"
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
