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
  title: "Farid Siadatzade - Frontend Developer | فرید سیادت زاده",
  description: "Experienced Frontend Developer specializing in React, TypeScript, and Next.js with 5+ years of experience creating responsive web applications.",
  keywords: "frontend developer, react developer, typescript, next.js, web development, farid siadatzade, frontend engineer",
  authors: [{ name: "Farid Siadatzade", url: "https://faridsi.ir" }],
  creator: "Farid Siadatzade",
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg' }
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faridsi.ir",
    siteName: "Farid Siadatzade - Frontend Developer",
    title: "Farid Siadatzade - Frontend Developer Portfolio",
    description: "Experienced Frontend Developer specializing in React, TypeScript, and Next.js with 5+ years of experience creating responsive web applications.",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Farid Siadatzade - Frontend Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Farid Siadatzade - Frontend Developer",
    description: "Frontend Developer specializing in React, TypeScript, and Next.js",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://faridsi.ir"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="h-full">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Farid Siadatzade",
              "url": "https://faridsi.ir",
              "image": "https://faridsi.ir/images/personeli.png",
              "jobTitle": "Frontend Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Tadbir Pardaz IT Co."
              },
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "name": "Shiraz University"
                }
              ],
              "knowsAbout": [
                "React", 
                "TypeScript", 
                "Next.js", 
                "Redux", 
                "Material-UI", 
                "Tailwind CSS", 
                "Web Development"
              ],
              "sameAs": [
                "https://github.com/faridsiadatzade",
                "https://linkedin.com/in/farid-siadatzadeh"
              ]
            })
          }}
        />
      </head>
      <body className={`h-full ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen bg-background">
            <Sidebar />
            <main className="flex-1 overflow-auto">
              <div className="container mx-auto md:p-8 p-4 pt-16 md:pt-8">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
