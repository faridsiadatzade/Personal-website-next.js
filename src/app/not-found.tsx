"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mt-4 mb-8">
            The page you are looking for does not exist or has been moved to a different address.
        </p>
        <Link href="/">
          <Button size="lg">
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
} 