"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Palette } from "lucide-react";

const colors = [
  "346.8 77.2% 49.8%",
  "221.2 83.2% 53.3%",
  "142.1 76.2% 36.3%",
  "47.9 95.8% 53.1%",
  "262.1 83.3% 57.8%",
];

export default function ColorPicker() {
  const { primaryColor, setPrimaryColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 rounded-full shadow-lg bg-card"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Palette className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 shadow-lg p-2 rounded-lg flex space-x-2 bg-card transition-transform duration-600 translate-b-0">
          {colors.map((color) => (
            <button
              key={color}
              className={`
                w-8 h-8 rounded-full border-2 transition-all
                ${
                  primaryColor === color
                    ? "border-primary scale-110"
                    : "border-border"
                }
              `}
              style={{ backgroundColor: `hsl(${color})` }}
              onClick={() => {
                setPrimaryColor(color);
                setIsOpen(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
