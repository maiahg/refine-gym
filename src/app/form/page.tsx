
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookingHero } from "@/components/BookingHero";
import BookingForm from "@/components/BookingForm";

const Choose = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BookingHero />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Choose;