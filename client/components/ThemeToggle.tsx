import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative w-14 h-8 rounded-full transition-all duration-300 ease-in-out 
        ${theme === "dark" 
          ? "bg-gray-700 border-2 border-gray-600" 
          : "bg-gray-200 border-2 border-gray-300"
        }
        hover:shadow-lg transform hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
      `}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {/* Toggle Circle */}
      <div
        className={`
          absolute top-1 w-6 h-6 rounded-full transition-all duration-300 ease-in-out
          flex items-center justify-center shadow-md
          ${theme === "dark"
            ? "translate-x-6 bg-gray-900 text-yellow-400"
            : "translate-x-1 bg-white text-gray-700"
          }
        `}
      >
        {theme === "dark" ? (
          <Moon className="w-3 h-3" />
        ) : (
          <Sun className="w-3 h-3" />
        )}
      </div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Sun 
          className={`w-3 h-3 transition-opacity duration-300 ${
            theme === "light" ? "opacity-0" : "opacity-40 text-yellow-400"
          }`} 
        />
        <Moon 
          className={`w-3 h-3 transition-opacity duration-300 ${
            theme === "dark" ? "opacity-0" : "opacity-40 text-gray-600"
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
