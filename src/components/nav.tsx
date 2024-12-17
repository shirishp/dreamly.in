import React from "react";
import { Book } from "lucide-react";

export default function Nav() {
  return (
    <header className="container mx-auto px-4 py-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Book className="h-8 w-8" />
          <span>Dreamly</span>
        </div>
      </nav>
    </header>
  );
}
