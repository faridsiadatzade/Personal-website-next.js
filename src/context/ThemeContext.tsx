"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  isReady: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // متغیر mounted برای کنترل وضعیت مانت شدن کامپوننت
  const [mounted, setMounted] = useState(false);
  
  // مقادیر پیش‌فرض برای استفاده در سرور
  const defaultPrimaryColor = "346.8 77.2% 49.8%";
  const defaultTheme = "light";
  
  const [primaryColor, setPrimaryColor] = useState<string>(defaultPrimaryColor);
  const [theme, setTheme] = useState<"light" | "dark">(defaultTheme);

  // مانت شدن کامپوننت را کنترل می‌کنیم
  useEffect(() => {
    // فقط در کلاینت ساید مقادیر را از localStorage می‌خوانیم
    const storedColor = localStorage.getItem("primary-color") || defaultPrimaryColor;
    const storedTheme = (localStorage.getItem("theme") as "light" | "dark") || defaultTheme;
    
    setPrimaryColor(storedColor);
    setTheme(storedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // تنظیم کلاس dark فقط در کلاینت
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    // تنظیم رنگ اصلی فقط در کلاینت
    document.documentElement.style.setProperty("--primary", primaryColor);
    document.documentElement.style.setProperty("--ring", primaryColor);
    localStorage.setItem("primary-color", primaryColor);
  }, [primaryColor, mounted]);

  const toggleTheme = () => {
    if (!mounted) return;
    
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // اگر کامپوننت هنوز مانت نشده، فقط children را نمایش می‌دهیم
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider
      value={{ 
        primaryColor, 
        setPrimaryColor, 
        theme, 
        toggleTheme,
        isReady: mounted 
      }}
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
