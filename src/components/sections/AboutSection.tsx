"use client";

import { motion } from "framer-motion";
import { AboutInfo } from "@/types/about";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  data: AboutInfo;
  className?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function AboutSection({ data, className }: AboutSectionProps) {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className={cn("space-y-12", className)}
    >
      {/* About Me */}
      <motion.div variants={item} className="space-y-4">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <h2 className="text-2xl text-primary">{data.subtitle}</h2>
        {data.description.map((paragraph, index) => (
          <p key={index} className="text-muted-foreground leading-relaxed">
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* Personal Info */}
      <motion.div variants={item} className="grid md:grid-cols-2 gap-8">
        {Object.entries(data.personalInfo).map(([key, value], index) => (
          <div key={index} className="flex gap-2">
            <span className="font-semibold min-w-[120px]">{key}:</span>
            <span className="text-muted-foreground">{value}</span>
          </div>
        ))}
      </motion.div>

      {/* Services */}
      <motion.div variants={item}>
        <h2 className="text-2xl font-bold mb-6">What I Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div variants={item}>
        <h2 className="text-2xl font-bold mb-6">My Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={item}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
} 