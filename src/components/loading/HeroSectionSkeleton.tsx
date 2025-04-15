"use client";

import { cn } from "@/lib/utils";

export default function HeroSectionSkeleton({ className }: { className?: string }) {
  return (
    <section className={cn("min-h-[calc(100vh-2rem)] grid lg:grid-cols-2 gap-8 items-center py-8 px-4", className)}>
      {/* Text Content Skeleton */}
      <div className="order-2 lg:order-1 space-y-6">
        {/* Name Skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          <div className="h-10 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>
        
        {/* Role Skeleton */}
        <div className="h-6 w-48 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>

        {/* Bio Skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>

        {/* Skills Skeleton */}
        <div className="flex flex-wrap gap-3 mt-6">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
            ></div>
          ))}
        </div>

        {/* Buttons Skeleton */}
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        </div>

        {/* Social Links Skeleton */}
        <div className="flex gap-4 mt-8">
          <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>
      </div>

      {/* Photo Skeleton */}
      <div className="order-1 lg:order-2 flex justify-center items-center">
        <div className="h-80 w-80 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
} 