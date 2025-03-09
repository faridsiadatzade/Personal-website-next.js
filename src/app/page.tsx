import { HeroSection } from "@/components/sections/HeroSection";
import { ProfileInfo } from "@/types/profile";

const profileData: ProfileInfo = {
  fullName: "Farid Siadatzadeh",
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
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/farid-siadatzadeh",
    phone: "tel:+989360010251",
  }
};

export default function Home() {
  return <HeroSection profile={profileData} />;
}
