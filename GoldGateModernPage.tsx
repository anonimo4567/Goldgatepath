import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function GoldGateModernPage() {
  return (
    <main className="min-h-screen w-full font-sans bg-black text-white overflow-x-hidden">
      {/* Hero Image Fullscreen with Mansion Background */}
      <section className="relative h-screen bg-black">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1950&q=80"
          alt="Luxurious Mansion Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12">
          <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400 mb-4 drop-shadow-xl">Gold Gate Path</h1>
          <p className="text-xl md:text-2xl max-w-3xl text-white drop-shadow-md">
            Full residential and commercial cleaning services, debris removal, and more — located in Tampa, FL.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button className="bg-yellow-500 text-black text-lg px-6 py-3 rounded-full">Book Appointment</Button>
            <Button variant="outline" className="text-yellow-400 border-yellow-500 hover:bg-yellow-500 hover:text-black text-lg px-6 py-3 rounded-full">View Services</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
