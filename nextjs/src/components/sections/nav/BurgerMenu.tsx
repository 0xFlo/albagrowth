// nextjs/src/components/BurgerMenu.tsx
"use client";

import { useEffect } from "react";
import { navbarLinks } from "@/components/sections/nav/navigationLinks";

interface BurgerMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ open, setOpen }) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className="group z-50 relative flex items-center cursor-pointer ml-auto"
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
          {navbarLinks.map((link) => (
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
      <style jsx>{`
        .shadow-custom {
          box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.75);
        }
      `}</style>
    </>
  );
};

export default BurgerMenu;
