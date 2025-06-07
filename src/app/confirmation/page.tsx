import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import React from "react";
import Success from "@/components/Success";

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Success />
      <Footer />
    </div>
  );
};

export default Confirmation;
