import { StaticImageData } from "next/image";

export interface PortfolioInfo {
  title: string;
  subtitle: string;
  description: string;
  projects: {
    title: string;
    description: string;
    image: StaticImageData;
    technologies: string[];
    link: string;
    github?: string;
  }[];
} 