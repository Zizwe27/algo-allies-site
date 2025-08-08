import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // or Heroicons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linksStyling = "text-black hover:text-blue-600 transition";

  return (
    <header className="w-full bg-white shadow-sm">

      <div className="flex justify-between items-center px-6 py-4">

        <span className="text-2xl font-bold italic text-blue-600">
          Algo Allies
        </span>

        <nav className="hidden md:flex space-x-6 text-sm">
          <a href="#about" className="text-blue-600 font-semibold">About</a>
          <a href="#resume" className={linksStyling}>Resume Drop</a>
          <a href="#interviews" className={linksStyling}>Interview Prep</a>
          <a href="#contact" className={linksStyling}>Book an Interview</a>
        </nav>

        <div className="hidden md:flex space-x-3">
          <button className="px-4 py-1.5 border border-gray-300 rounded-md text-sm text-black hover:bg-gray-100 transition">
            Sign In
          </button>
          <button className="px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 space-y-4 border-t border-gray-200">
          <a href="#about" className="text-blue-600 font-semibold">About</a>
          <a href="#resume" className={linksStyling}>Resume Drop</a>
          <a href="#interviews" className={linksStyling}>Interview Prep</a>
          <a href="#contact" className={linksStyling}>Book an Interview</a>
          <button className="px-4 py-1.5 border border-gray-300 rounded-md text-sm text-black hover:bg-gray-100 transition">
            Sign In
          </button>
          <button className="px-4 py-1.5 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
