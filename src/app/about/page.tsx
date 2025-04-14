"use client";

import dynamic from 'next/dynamic';
import { AboutInfo } from "@/types/about";
import AboutSectionSkeleton from '@/components/loading/AboutSectionSkeleton';

const DynamicAboutSection = dynamic(() => import('@/components/sections/AboutSection').then(mod => mod.AboutSection), {
  loading: () => <AboutSectionSkeleton />,
  ssr: false,
});

const aboutData: AboutInfo = {
  title: "About Me",
  subtitle: "Frontend Developer & UI/UX Enthusiast",
  description: [
    "I am a passionate frontend developer with over 5 years of experience in creating modern and responsive web applications. My journey in web development started with a curiosity about how websites work and evolved into a deep love for creating beautiful, user-friendly interfaces.",
    "I specialize in React and TypeScript, with a strong focus on building scalable and maintainable applications. I'm particularly interested in micro-frontend architecture and modern web technologies.",
  ],
  personalInfo: {
    "Name": "Farid Siadatzadeh",
    "Age": "28",
    "Location": "Tehran, Iran",
    "Experience": "5+ Years",
    "Email": "fsiadatzade@gmail.com",
    "Languages": "Persian (Native), English (Professional)",
    "Availability": "Open to Opportunities",
    "Remote": "Available for Remote Work"
  },
  services: [
    {
      title: "Frontend Development",
      description: "Building responsive and performant web applications using modern technologies and best practices.",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with a focus on user experience and accessibility.",
      icon: "🎨"
    },
    {
      title: "Code Review",
      description: "Providing detailed code reviews and mentoring to ensure high-quality, maintainable code.",
      icon: "📝"
    },
    {
      title: "Performance Optimization",
      description: "Optimizing web applications for better speed, performance, and user experience.",
      icon: "⚡"
    },
    {
      title: "Technical Consultation",
      description: "Offering expert advice on frontend architecture, technology choices, and best practices.",
      icon: "💡"
    },
    {
      title: "Team Collaboration",
      description: "Working effectively in agile teams and contributing to project success through clear communication.",
      icon: "🤝"
    }
  ],
  skills: [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Redux", level: 90 },
        { name: "TailwindCSS", level: 95 }
      ]
    },
    {
      name: "Other Skills",
      skills: [
        { name: "Git & Version Control", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "Testing (Jest, RTL)", level: 80 },
        { name: "UX", level: 60 },
        { name: "Agile Methodologies", level: 85 }
      ]
    }
  ]
};

export default function About() {
  return (
    <div className="container mx-auto py-8">
      <DynamicAboutSection data={aboutData} />
    </div>
  );
}
