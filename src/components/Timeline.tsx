"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TimelineItemType } from "@/types/experience";
import { Building2, GraduationCap } from "lucide-react";

interface TimelineItemProps {
  item: TimelineItemType;
  isLast?: boolean;
}

export function TimelineItem({ item, isLast = false }: TimelineItemProps) {
  const renderIcon = () => {
    if ('logo' in item && item.logo) {
      return (
        <Image
          src={item.logo}
          alt={`${item.subtitle} logo`}
          width={32}
          height={32}
          className="rounded-full"
        />
      );
    }
    return 'gpa' in item ? (
      <GraduationCap className="w-5 h-5" />
    ) : (
      <Building2 className="w-5 h-5" />
    );
  };

  return (
    <div className="relative flex gap-6 pb-8">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
          {renderIcon()}
        </div>
        {!isLast && <div className="flex-1 w-[2px] bg-border mt-3"></div>}
      </div>
      <div className="flex flex-col pb-8">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-muted-foreground">{item.subtitle}</p>
          <span className="text-sm text-primary font-medium mt-1">{item.date}</span>
          {'location' in item && item.location && (
            <span className="text-sm text-muted-foreground mt-1">{item.location}</span>
          )}
        </div>
        <div className="mt-3">
          {item.description.map((desc, index) => (
            <p key={index} className="text-muted-foreground mb-2">
              {desc}
            </p>
          ))}
          {'technologies' in item && item.technologies && (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface TimelineProps {
  items: TimelineItemType[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          item={item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
} 