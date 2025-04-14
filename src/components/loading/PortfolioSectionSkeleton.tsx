"use client";

import { cn } from "@/lib/utils";

export default function PortfolioSectionSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-12", className)}>
      {/* Header Skeleton */}
      <div className="space-y-3">
        <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-6 w-72 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-4 w-full md:w-2/3 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mt-4"></div>
      </div>

      {/* Projects Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="border rounded-xl overflow-hidden">
            {/* Project Image Skeleton */}
            <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
            
            {/* Project Content Skeleton */}
            <div className="p-6 space-y-4">
              <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
              </div>
              
              {/* Technologies Skeleton */}
              <div className="flex flex-wrap gap-2">
                {[...Array(4)].map((_, techIndex) => (
                  <div 
                    key={techIndex} 
                    className="h-8 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                  ></div>
                ))}
              </div>
              
              {/* Links Skeleton */}
              <div className="flex space-x-4 mt-4">
                <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                <div className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 