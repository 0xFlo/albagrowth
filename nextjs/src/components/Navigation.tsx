// components/Navigation.tsx
"use client";

import { useEffect } from "react";

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const links = [
  { name: "Home", url: "/" },
  { name: "Case Studies", url: "case-studies/" },
  { name: "Team", url: "team/" },
  // Add more links here as needed
];

function MobileNav({ open, setOpen }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div style={{ overflowX: "hidden", width: "100vw" }}>
      <div
        className={`absolute top-0 left-0 w-full bg-gradient-to-br from-yellow-400 to-red-500 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter z-20 rounded-lg`}
        style={{ height: "90vh" }}
      >
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "100%" }}
        >
          {links.map((link) => (
            <a
              key={link.name}
              className="text-2xl font-bold my-4 hover:text-red-500"
              href={link.url}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      {/* Secondary Menu */}
      <div
        className={`fixed bottom-0 right-0 w-full bg-blue-500 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out filter z-10 rounded-lg`}
        style={{ height: "10vh" }}
      >
        <div
          className="flex justify-end items-end p-4"
          style={{ height: "100%" }}
        >
          <a
            className="text-xl font-bold text-yellow-200 hover:text-white"
            href="#"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
