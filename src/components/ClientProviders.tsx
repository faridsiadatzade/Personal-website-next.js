'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import Sidebar from "@/components/Sidebar";

interface ClientProvidersProps {
  children: React.ReactNode;
}

const ClientProviders: React.FC<ClientProvidersProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // محتوای ساده قبل از هیدراسیون که مشابه با ساختار اصلی است
    return (
      <div className="flex min-h-screen bg-background">
        <div className="fixed top-0 bottom-0 left-0 w-64 z-50 bg-background border-r border-border opacity-0"></div>
        <div className="md:pl-64"></div>
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto md:p-8 p-4 pt-16 md:pt-8">
            {children}
          </div>
        </main>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="flex min-h-screen bg-background">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto md:p-8 p-4 pt-16 md:pt-8">
              {children}
            </div>
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default ClientProviders; 