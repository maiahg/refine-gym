"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-green-800">Thank You</h1>
          <p className="text-lg text-green-800">
            Your session has been booked successfully.
          </p>
          <p className="text-sm text-green-800">
            Check your email for a booking confirmation and session details
          </p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
            variant="outline"
            className="w-full hover:bg-gray-200 cursor-pointer"
          >
            Return to Home
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              router.push("/book-session");
            }}
            className="w-full bg-black text-white cursor-pointer"
          >
            Book Another Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Success;
