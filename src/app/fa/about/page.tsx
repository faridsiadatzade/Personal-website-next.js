"use client";

import dynamic from 'next/dynamic';
import { AboutInfo } from "@/types/about";
import AboutSectionSkeleton from '@/components/loading/AboutSectionSkeleton';

const DynamicAboutSection = dynamic(() => import('@/components/sections/AboutSection').then(mod => mod.AboutSection), {
  loading: () => <AboutSectionSkeleton />,
  ssr: false,
});

const aboutData: AboutInfo = {
  title: "درباره من",
  subtitle: "توسعه دهنده فرانت‌اند و علاقه‌مند به UI/UX",
  description: [
    "من یک توسعه دهنده فرانت‌اند با بیش از ۵ سال تجربه در ایجاد وب اپلیکیشن‌های مدرن و ریسپانسیو هستم. سفر من در توسعه وب با کنجکاوی درباره نحوه کار وب‌سایت‌ها آغاز شد و به عشق عمیق به ایجاد رابط‌های کاربری زیبا و کاربرپسند تبدیل شد.",
    "من در React و TypeScript تخصص دارم، با تمرکز قوی بر ساخت برنامه‌های مقیاس‌پذیر و قابل نگهداری. به ویژه به معماری میکرو-فرانت‌اند و فناوری‌های مدرن وب علاقه‌مندم.",
  ],
  personalInfo: {
    "نام": "فرید سیادت زاده",
    "سن": "۲۸",
    "موقعیت": "تهران، ایران",
    "تجربه": "بیش از ۵ سال",
    "ایمیل": "fsiadatzade@gmail.com",
    "زبان‌ها": "فارسی (مادری)، انگلیسی (حرفه‌ای)",
    "وضعیت همکاری": "آماده برای فرصت‌های شغلی",
    "کار از راه دور": "امکان کار از راه دور"
  },
  services: [
    {
      title: "توسعه فرانت‌اند",
      description: "ساخت وب اپلیکیشن‌های ریسپانسیو و کارآمد با استفاده از فناوری‌های مدرن و بهترین شیوه‌ها.",
      icon: "💻"
    },
    {
      title: "طراحی UI/UX",
      description: "ایجاد رابط‌های کاربری بدیهی و زیبا با تمرکز بر تجربه کاربری و دسترسی‌پذیری.",
      icon: "🎨"
    },
    {
      title: "بررسی کد",
      description: "ارائه بررسی‌های دقیق کد و مربیگری برای اطمینان از کد با کیفیت بالا و قابل نگهداری.",
      icon: "📝"
    },
    {
      title: "بهینه‌سازی عملکرد",
      description: "بهینه‌سازی وب اپلیکیشن‌ها برای سرعت، عملکرد و تجربه کاربری بهتر.",
      icon: "⚡"
    },
    {
      title: "مشاوره فنی",
      description: "ارائه مشاوره تخصصی در زمینه معماری فرانت‌اند، انتخاب فناوری و بهترین شیوه‌ها.",
      icon: "💡"
    },
    {
      title: "همکاری تیمی",
      description: "کار موثر در تیم‌های چابک و مشارکت در موفقیت پروژه از طریق ارتباط واضح.",
      icon: "🤝"
    }
  ],
  skills: [
    {
      name: "توسعه فرانت‌اند",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Redux", level: 90 },
        { name: "TailwindCSS", level: 95 }
      ]
    },
    {
      name: "مهارت‌های دیگر",
      skills: [
        { name: "Git و کنترل نسخه", level: 90 },
        { name: "Node.js", level: 75 },
        { name: "تست (Jest، RTL)", level: 80 },
        { name: "UX", level: 60 },
        { name: "متدولوژی‌های چابک", level: 85 }
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