"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSectionProps } from "@/types/profile";
import MyPhoto from "@/components/MyPhoto";
import { Github, Linkedin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection({ profile, className }: HeroSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className={cn("min-h-[calc(100vh-2rem)] grid lg:grid-cols-2 gap-8 items-center py-8 px-4", className)}
    >
      {/* Text Content */}
      <motion.div variants={item} className="order-2 lg:order-1">
        <motion.h1 
          variants={item} 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Hello, I&apos;m{" "}
          <span className="font-serif italic text-primary">
            {profile.fullName}
          </span>
        </motion.h1>
        
        <motion.h2 
          variants={item}
          className="text-2xl md:text-3xl text-muted-foreground mt-4"
        >
          {profile.role}
        </motion.h2>

        <motion.p 
          variants={item}
          className="mt-6 text-lg text-muted-foreground leading-relaxed"
        >
          {profile.shortBio}
        </motion.p>

        <motion.div 
          variants={item}
          className="flex flex-wrap gap-3 mt-6"
        >
          {profile.skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        <motion.div 
          variants={item}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link href="/about">
            <Button size="lg" className="rounded-full">
              More About Me
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="rounded-full">
              Get in Touch
            </Button>
          </Link>
        </motion.div>

        <motion.div 
          variants={item}
          className="mt-8 flex gap-4"
        >
          {profile.socialLinks.phone && (
            <Link 
              href={profile.socialLinks.phone}
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Phone className="w-6 h-6" />
            </Link>
          )}
          {profile.socialLinks.github && (
            <Link 
              href={profile.socialLinks.github}
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
          )}
          {profile.socialLinks.linkedin && (
            <Link 
              href={profile.socialLinks.linkedin}
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          )}
        </motion.div>
      </motion.div>

      {/* Photo */}
      <motion.div 
        variants={item}
        className="order-1 lg:order-2 flex justify-center items-center"
      >
        <MyPhoto />
      </motion.div>
    </motion.section>
  );
} 