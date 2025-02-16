"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 bg-card rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {theme === "dark" ? (
          <Moon className="w-6 h-6" />
        ) : (
          <Sun className="w-6 h-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-card dark:bg-gray-900 shadow-lg p-2 rounded-lg flex space-x-2">
          <button
            className={cn(
              "w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center",
              theme === "light" ? "border-primary scale-110" : "border-border"
            )}
            onClick={() => {
              if (theme !== "light") toggleTheme();
              setIsOpen(false);
            }}
          >
            <Sun className="w-5 h-5" />
          </button>

          <button
            className={`
              w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center
              ${theme === "dark" ? "border-primary scale-110" : "border-border"}
            `}
            onClick={() => {
              if (theme !== "dark") toggleTheme();
              setIsOpen(false);
            }}
          >
            <Moon className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
