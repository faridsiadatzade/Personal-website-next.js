"use client";

import dynamic from 'next/dynamic';
import { ProfileInfo } from "@/types/profile";
import HeroSectionSkeleton from '@/components/loading/HeroSectionSkeleton';

const profileData: ProfileInfo = {
  fullName: "فرید سیادت زاده",
  role: "توسعه دهنده فرانت‌اند",
  shortBio: "توسعه‌دهنده فرانت‌اند خلاق و پرانرژی با بیش از ۵ سال تجربه در طراحی و پیاده‌سازی رابط‌های کاربری مدرن و قدرتمند برای کسب‌وکارهای پرترافیک. مسلط به React، TypeScript و تکنولوژی‌های به‌روز وب.",
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
    github: "https://github.com/yourusername",
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