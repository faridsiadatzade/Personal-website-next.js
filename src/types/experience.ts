import { StaticImageData } from "next/image";

export interface ExperienceItem {
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  logo?: StaticImageData;
  location?: string;
  technologies?: string[];
}

export interface EducationItem {
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  logo?: StaticImageData;
  location?: string;
  gpa?: string;
  thesis?: string;
  activities?: string[];
}

export type TimelineItemType = ExperienceItem | EducationItem; 