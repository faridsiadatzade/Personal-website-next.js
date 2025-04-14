"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 bg-card rounded-full shadow-lg hover:bg-accent transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {theme === "dark" ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <Moon className="w-6 h-6" />
          </motion.div>
        ) : (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <Sun className="w-6 h-6" />
          </motion.div>
        )}
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

            {/* Theme Switcher Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="absolute bottom-full mb-2 right-0 bg-card dark:bg-gray-900 shadow-lg p-2 rounded-lg flex space-x-2 border border-border z-50"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center",
                  theme === "light" ? "border-primary bg-primary/10" : "border-border"
                )}
                onClick={() => {
                  if (theme !== "light") toggleTheme();
                  setIsOpen(false);
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  <Sun className="w-4 h-4" />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center",
                  theme === "dark" ? "border-primary bg-primary/10" : "border-border"
                )}
                onClick={() => {
                  if (theme !== "dark") toggleTheme();
                  setIsOpen(false);
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  <Moon className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
