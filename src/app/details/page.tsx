"use client";

import React, { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DetailsHero } from "@/components/DetailsHero";
import { DetailsContent } from "@/components/DetailsContent";
import { useSearchParams } from "next/navigation";

const DetailsContentWrapper = () => {
  const searchParams = useSearchParams();
  const sessionType = searchParams.get("sessionType");

  return (
    <>
      <DetailsHero sessionType={sessionType!} />
      <DetailsContent sessionType={sessionType!} />
    </>
  );
};

const Details = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <DetailsContentWrapper />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Details;
