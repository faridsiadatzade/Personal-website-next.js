"use client";

import dynamic from 'next/dynamic';
import { PortfolioInfo } from "@/types/portfolio";
import { motion } from "framer-motion";
import personalWeb from "@/assets/images/portfolio/personal-website.png";
import hamrahplus from "@/assets/images/portfolio/hamrahplus.png";
import adminplus from "@/assets/images/portfolio/adminplus.png";
import PortfolioSectionSkeleton from '@/components/loading/PortfolioSectionSkeleton';

const DynamicPortfolioSection = dynamic(() => 
  import('@/components/sections/PortfolioSection').then(mod => mod.PortfolioSection),
  {
    loading: () => <PortfolioSectionSkeleton />,
    ssr: false,
  }
);

const portfolioData: PortfolioInfo = {
  title: "نمونه کارها",
  subtitle: "پروژه‌های من",
  description: "در اینجا برخی از پروژه‌های اخیر من را می‌بینید. هر پروژه نشان‌دهنده مهارت‌ها و فناوری‌های مختلفی است که با آنها کار کرده‌ام.",
  projects: [
    {
      title: "وب‌سایت شخصی",
      description: "یک وب‌سایت شخصی مدرن با استفاده از Next.js، TypeScript و Tailwind CSS. ویژگی‌هایی مانند حالت تاریک، دو زبانه بودن، انیمیشن و طراحی ریسپانسیو و ... دارد.",
      image: personalWeb,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://faridsi.ir",
      github: "https://github.com/faridsiadatzade/personal-website-next.js",
    },
    {
      title: "ادمین پلاس",
      description: "یک پلتفرم تجارت الکترونیک کامل با ویژگی‌هایی مانند مدیریت محصول، سبد خرید و احراز هویت کاربر.",
      image: adminplus,
      technologies: ["React", "TypeScript", "Redux", "material-ui"],
      link: "https://adminplus.refahbroker.ir",
    //   github: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "همراه پلاس",
      description: "در همراه پلاس می‌توانید انواع اوراق بهادار  مانند سهام، حق تقدم سهام، اوراق با درآمد ثابت، اختیار معامله و همچنین صندوق‌های قابل معامله (ETF) را خرید و فروش کنید.",
      image: hamrahplus,
      technologies: ["JavaScript", "PWA",],
      link: "https://mobile.ipb.ir",
    //   github: "https://github.com/yourusername/task-manager"
    }
  ]
};

export default function Portfolio() {
  return (
    <section className="mt-5 p-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-4xl font-bold">{portfolioData.title}</h3>
        <span className="block mt-2 w-20 border-b-4 border-primary"></span>
        <span className="block mt-2 w-9 border-b-4 border-primary"></span>
      </motion.div>
      <DynamicPortfolioSection data={portfolioData} />
    </section>
  );
} 