// nextjs/src/components/Header.tsx
"use client";

import { useState } from "react";
import { navbarLinks } from "@/sections/nav/navigationLinks";
import BurgerMenu from "@/sections/nav/BurgerMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center p-4 z-20">
      <div className="flex items-center z-30">
        <div className="w-12 h-12 rounded-full bg-gradient-to-b from-yellow-400 to-red-500 relative">
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-blue-500"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-200 rounded-full"></div>
        </div>
        <span className="text-xl font-bold ml-2">albagrowth</span>
      </div>
      <div className="flex flex-grow justify-center">
        <div className="hidden md:flex items-center space-x-4">
          {navbarLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-lg font-medium hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <BurgerMenu open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Navbar;
