"use client";

import { cn } from "@/lib/utils";

export default function AboutSectionSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-12", className)}>
      {/* Header Skeleton */}
      <div className="space-y-3">
        <div className="h-10 w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-6 w-72 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>

      {/* Description Skeleton */}
      <div className="space-y-4">
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>

      {/* Personal Info Skeleton */}
      <div className="grid md:grid-cols-2 gap-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Services Skeleton */}
      <div>
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mb-6"></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="p-6 border rounded-lg space-y-4">
              <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
              <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Skeleton */}
      <div>
        <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse mb-6"></div>
        <div className="space-y-8">
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="space-y-4">
              <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
              <div className="space-y-5">
                {[...Array(5)].map((_, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                      <div className="h-4 w-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 