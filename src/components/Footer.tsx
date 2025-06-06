import React from "react";
import { Mail, Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wider">
            REFINE OTTAWA
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div className="space-y-2 text-gray-300">
              <p>1234 Laurier Avenue, Ottawa</p>
              <p>Ontario, A1A B1B</p>
              <p className="underline hover:text-white"><a href="mailto:someone@example.com">ottawa@refine.com</a></p>
              <p className="underline hover:text-white"><a href="tel:+16131234567">613-123-4567</a></p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Monday to Friday: 6:30 to 22:00</p>
              <p>Saturday to Sunday: 8:00 to 21:00</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Mail className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-md">
            &copy; {new Date().getFullYear()} Designed by Mai Anh Hoang
          </p>
        </div>
      </div>
    </footer>
  );
};
