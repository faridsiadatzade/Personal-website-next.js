export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

export interface AboutInfo {
  title: string;
  subtitle: string;
  description: string[];
  services: ServiceItem[];
  skills: SkillCategory[];
  personalInfo: {
    [key: string]: string;
  };
} 