import React from "react";
import { Sparkles, Mail } from "lucide-react";

export default function Hero() {
  return (
    <div>
      <div className="absolute inset-0 opacity-10 bg-cover bg-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-purple-800/50 rounded-full px-4 py-2">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm">
              Magical stories for your little ones
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Personalized Bedtime Stories,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Delivered Daily
            </span>
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            Every night, a new magical adventure crafted specially for your
            child, delivered straight to your inbox. Watch their imagination
            soar with stories that feature them as the hero.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
