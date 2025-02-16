"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [primaryColor, setPrimaryColor] = useState<string>("346.8 77.2% 49.8%");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedColor = localStorage.getItem("primary-color");
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedColor) {
      setPrimaryColor(storedColor);
    }
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", primaryColor);
    document.documentElement.style.setProperty("--ring", primaryColor);
    localStorage.setItem("primary-color", primaryColor);
  }, [primaryColor]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ primaryColor, setPrimaryColor, theme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
