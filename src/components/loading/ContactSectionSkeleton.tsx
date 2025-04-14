"use client";

import { cn } from "@/lib/utils";

export default function ContactSectionSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-12", className)}>
      {/* Header Skeleton */}
      <div className="space-y-3">
        <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-1 w-20 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        <div className="h-1 w-9 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="md:col-span-1 space-y-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="p-6 border rounded-lg space-y-3">
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
              <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
              <div className="h-5 w-40 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            </div>
          ))}
        </div>
        
        {/* Contact Form */}
        <div className="md:col-span-2 border rounded-lg p-6 space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          </div>
          
          {/* Email Field */}
          <div className="space-y-2">
            <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          </div>
          
          {/* Subject Field */}
          <div className="space-y-2">
            <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          </div>
          
          {/* Message Field */}
          <div className="space-y-2">
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
            <div className="h-32 w-full bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
          </div>
          
          {/* Submit Button */}
          <div className="h-12 w-40 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
} 