export interface ProfileInfo {
  fullName: string;
  role: string;
  shortBio: string;
  skills: string[];
  socialLinks: {
    github?: string;
    linkedin?: string;
    phone?: string;
  };
}

export interface HeroSectionProps {
  profile: ProfileInfo;
  className?: string;
} 