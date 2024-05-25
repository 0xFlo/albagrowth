// components/header.tsx
"use client";

import { useState } from "react";
import MobileNav from "@/components/Navigation"; // Use the correct casing

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 z-20">
      <div className="flex items-center z-30">
        <div className="w-12 h-12 rounded-full bg-gradient-to-b from-yellow-400 to-red-500 relative">
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-blue-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-200 rounded-full"></div>
        </div>
        <span className="text-xl font-bold ml-2">albagrowth</span>
      </div>
      <MobileNav open={open} setOpen={setOpen} />
      <div
        className="group z-50 relative flex items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center border border-black rounded-md p-2 shadow-custom">
          <span className="text-lg font-medium mr-2">Menu</span>
          <div className="flex flex-col items-end justify-between w-6 h-4">
            <span
              className={`h-0.5 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? "w-0" : "w-full"
              }`}
            />
            <span
              className={`h-0.5 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .shadow-custom {
          box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.75);
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
