"use client";

import { cn } from "@/lib/utils";

export default function ExperienceSectionSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-12", className)}>
      {/* Header Skeleton */}
      <div className="space-y-3">
        <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-1 w-9 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>

      {/* Experience and Education Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Work Experience Column */}
        <div>
          <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mb-6"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8">
            {[...Array(3)].map((_, index) => (
              <TimelineItemSkeleton key={index} />
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mb-6"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8">
            {[...Array(2)].map((_, index) => (
              <TimelineItemSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItemSkeleton() {
  return (
    <div className="relative pl-8 pb-8 border-l border-gray-200 dark:border-gray-700">
      {/* Circle */}
      <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      
      {/* Header with logo */}
      <div className="flex items-center gap-4 mb-2">
        <div className="h-12 w-12 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        <div>
          <div className="h-6 w-52 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          <div className="h-4 w-36 mt-1 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>
      </div>
      
      {/* Date and Location */}
      <div className="flex items-center justify-between mb-3">
        <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>
      
      {/* Description */}
      <div className="space-y-2 mb-3">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        ))}
      </div>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        ))}
      </div>
    </div>
  );
} 