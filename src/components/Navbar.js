"use client";
import Link from "next/link";
import { useState } from "react";

import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.style.overflow = isDrawerOpen ? "auto" : "hidden"; // Prevent scrolling when drawer is open
  };

  return (
    <header className="bg-[#060608] text-white fixed top-0 left-0 right-0 z-[9999] px-5 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center md:py-8 py-5">
        {/* LOGO */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-0.5 bg-white"></div>
          <Link href="/" className="text-lg font-semibold">
            DENEX
          </Link>
        </div>

        {/* Nav - Desktop */}
        <div>
          <p className="text-[#86868D] hidden md:block text-sm md:text-base">
            Full Stack Developer
            <br />
            based in India
          </p>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#experience"
            className="hover:underline hover:text-gray-300"
          >
            Experience
          </Link>
          <Link
            href="#collaborate"
            className="hover:underline hover:text-gray-300"
          >
            Hire Me
          </Link>
        </div>
        {/* Contact Button */}
        <div className="hidden md:flex items-center justify-end">
          <Link
            href="mailto:denex8online@gmail.com"
            className="bg-gray-700 px-5 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleDrawer}
            className="text-2xl hover:opacity-70 transition-all duration-300 ease-in"
          >
            {isDrawerOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-900 text-white transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-[9998] p-5 md:hidden`}
      >
        <button
          onClick={toggleDrawer}
          className="absolute top-5 right-5 text-2xl"
        >
          <RxCross2 />
        </button>
        <div className="mt-16 space-y-6 text-lg">
          <p className="text-[#86868D]">
            Full Stack Developer <br /> based in India
          </p>

          <Link
            href="#experience"
            className="block hover:underline hover:text-gray-300"
            onClick={toggleDrawer}
          >
            Experience
          </Link>
          <Link
            href="#collaborate"
            className="block hover:underline hover:text-gray-300"
            onClick={toggleDrawer}
          >
            Hire Me
          </Link>
          <button
            href="mailto:denex8online@gmail.com"
            className="bg-gray-700 px-5 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in w-full text-center"
            onClick={toggleDrawer}
          >
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
