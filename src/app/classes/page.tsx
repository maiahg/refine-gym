
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ClassesHero } from "@/components/ClassesHero";
import { ClassesGrid } from "@/components/ClassesGrid";

const Classes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ClassesHero />
      <ClassesGrid />
      <Footer />
    </div>
  );
};

export default Classes;