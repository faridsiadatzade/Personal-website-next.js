export interface PortfolioInfo {
  title: string;
  subtitle: string;
  description: string;
  projects: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    github?: string;
  }[];
} 