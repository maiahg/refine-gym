
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TrainingHero } from "@/components/TrainingHero";
import { TrainingGrid } from "@/components/TrainingGrid";

const Training = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <TrainingHero />
      <TrainingGrid />
      <Footer />
    </div>
  );
};

export default Training;