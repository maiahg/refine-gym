"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DetailsHero } from "@/components/DetailsHero";
import { DetailsContent } from "@/components/DetailsContent";
import { useSearchParams } from "next/navigation";

const Details = () => {
  const searchParams = useSearchParams();
  const sessionType = searchParams.get("sessionType");
  console.log("Session Type:", sessionType);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <DetailsHero sessionType={sessionType!}/>
      <DetailsContent sessionType={sessionType!} />
      <Footer />
    </div>
  );
};

export default Details;
