"use client";

import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PortfolioInfo } from "@/types/portfolio";
import { motion } from "framer-motion";

const portfolioData: PortfolioInfo = {
  title: "Portfolio",
  subtitle: "My Projects",
  description: "Here are some of my recent projects. Each project showcases different skills and technologies I've worked with.",
  projects: [
    {
      title: "Personal Website",
      description: "A modern personal website built with Next.js, TypeScript, and Tailwind CSS. Features include dark mode, animations, and responsive design.",
      image: "/projects/personal-website.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/yourusername/personal-website",
    //   github: "https://github.com/yourusername/personal-website",
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with features like product management, shopping cart, and user authentication.",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://ecommerce-demo.com",
      github: "https://github.com/yourusername/ecommerce"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/projects/task-manager.jpg",
      technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
      link: "https://task-manager-demo.com",
      github: "https://github.com/yourusername/task-manager"
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
      <PortfolioSection data={portfolioData} />
    </section>
  );
}
