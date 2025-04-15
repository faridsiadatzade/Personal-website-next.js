import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// فونت وزیر به عنوان فونت محلی
const vazirFont = localFont({
  src: [
    {
      path: '../../public/fonts/vazir/Vazir.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/vazir/Vazir-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/vazir/Vazir-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/vazir/Vazir-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-vazir',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://faridsi.ir"),
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
}: {
  children: React.ReactNode
}) {
  return (
    <html>
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
      <body className={`h-full ${geistSans.variable} ${geistMono.variable} ${vazirFont.variable} antialiased`}>
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
      </body>
    </html>
  );
}
