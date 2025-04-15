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
  title: "Portfolio",
  subtitle: "My Projects",
  description: "Here are some of my recent projects. Each project showcases different skills and technologies I've worked with.",
  projects: [
    {
      title: "Personal Website",
      description: "A modern personal website built with Next.js, TypeScript, and Tailwind CSS. Features include dark mode, animations, and responsive design.",
      image: personalWeb,
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://faridsi.ir",
      github: "https://github.com/faridsiadatzade/personal-website-next.js",
    },
    {
      title: "Admin Plus",
      description: "A full-stack e-commerce platform with features like product management, shopping cart, and user authentication.",
      image: adminplus,
      technologies: ["React", "TypeScript", "Redux", "material-ui"],
      link: "https://adminplus.refahbroker.ir",
    //   github: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "Hamrah Plus",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
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