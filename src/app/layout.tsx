import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farid Siadatzade - فرید سیادت زاده",
  description: "Farid Siadatzade Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem("theme");
                  const storedColor = localStorage.getItem("primary-color");
                  if (theme === "dark") document.documentElement.classList.add("dark");
                  if (storedColor) {
                    document.documentElement.style.setProperty("--primary", storedColor);
                    document.documentElement.style.setProperty("--ring", storedColor);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`h-full ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen bg-background">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <div className="container mx-auto">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
