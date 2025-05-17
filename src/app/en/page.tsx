"use client";

import dynamic from 'next/dynamic';
import { ProfileInfo } from "@/types/profile";
import HeroSectionSkeleton from '@/components/loading/HeroSectionSkeleton';

const profileData: ProfileInfo = {
  fullName: "Farid Siadatzade",
  role: "Frontend Developer",
  shortBio: "Passionate and creative frontend developer with over 5 years of experience developing cutting-edge and robust code for high-volume businesses. Skilled in React, TypeScript, and modern web technologies.",
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Redux",
    "Material-UI",
    "Tailwind CSS",
    "Node.js",
    "Git"
  ],
  socialLinks: {
    github: "https://github.com/faridsiadatzade",
    linkedin: "https://linkedin.com/in/farid-siadatzadeh",
    phone: "tel:+989360010251",
  }
};

const DynamicHeroSection = dynamic(() => import('@/components/sections/HeroSection'), {
  loading: () => <HeroSectionSkeleton />,
  ssr: false,
});

export default function Home() {
  return <DynamicHeroSection profile={profileData} />;
} 