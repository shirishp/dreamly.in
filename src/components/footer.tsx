import React from "react";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">Dreamly</span>
            </div>
            <p className="mt-4 text-gray-400">
              Crafting magical bedtime stories that inspire imagination and
              create lasting memories for families around the world.
            </p>
          </div>
          <div></div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-purple-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Dreamly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
