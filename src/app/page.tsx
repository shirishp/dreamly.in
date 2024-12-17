import React from "react";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
