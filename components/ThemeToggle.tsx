"use client";

import { useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="bg-purple-500 px-4 py-2 rounded-md">
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
