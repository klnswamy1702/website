"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 shadow-lg p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MyPortfolio</h1>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>☰</button>

        <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          {["Home", "About", "Projects", "Experience", "Resume", "Contact"].map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase()}`} className="hover:text-purple-400">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
