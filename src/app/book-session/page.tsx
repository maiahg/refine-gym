
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChooseHero } from "@/components/ChooseHero";
import { ChooseGrid } from "@/components/ChooseGrid";

const Choose = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ChooseHero />
      <ChooseGrid />
      <Footer />
    </div>
  );
};

export default Choose;