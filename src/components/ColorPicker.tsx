"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        className="p-2 rounded-full shadow-lg bg-card hover:bg-accent transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <Palette className="w-6 h-6" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Color Picker Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="absolute bottom-full mb-2 right-[-100%] shadow-lg p-2 rounded-lg flex space-x-2 bg-card border border-border z-50"
            >
              {colors.map((color) => (
                <motion.button
                  key={color}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    },
                    scale: { 
                      type: "spring", 
                      stiffness: 500
                    }
                  }}
                  className={`
                    w-8 h-8 rounded-full border-2 transition-all
                    ${primaryColor === color ? "border-primary scale-110" : "border-border"}
                  `}
                  style={{ backgroundColor: `hsl(${color})` }}
                  onClick={() => {
                    setPrimaryColor(color);
                    setIsOpen(false);
                  }}
                />
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
