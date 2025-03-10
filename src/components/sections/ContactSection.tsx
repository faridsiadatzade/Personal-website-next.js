"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ContactInfo } from "@/types/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ContactSectionProps {
  data: ContactInfo;
  className?: string;
}

export function ContactSection({ data, className }: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // TODO: Implement form submission
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={cn("mt-16", className)}
    >
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <motion.div variants={item} className="space-y-6">
          {data.contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-4 p-6 rounded-lg bg-card border"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                {method.icon === "mail" && <Mail className="w-6 h-6" />}
                {method.icon === "phone" && <Phone className="w-6 h-6" />}
                {method.icon === "location" && <MapPin className="w-6 h-6" />}
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-lg">{method.title}</h3>
                <p className="text-muted-foreground mb-2">{method.description}</p>
                <a
                  href={method.link}
                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center group"
                  target={method.icon === "location" ? "_blank" : undefined}
                  rel={method.icon === "location" ? "noopener noreferrer" : undefined}
                >
                  {method.value}
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={item}>
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border">
            <AnimatePresence mode="wait">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg mb-6"
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg mb-6"
                >
                  Something went wrong. Please try again later.
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                {data.form.name.label}
              </label>
              <Input
                id="name"
                placeholder={data.form.name.placeholder}
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                {data.form.email.label}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={data.form.email.placeholder}
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                {data.form.subject.label}
              </label>
              <Input
                id="subject"
                placeholder={data.form.subject.placeholder}
                required
                className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                {data.form.message.label}
              </label>
              <Textarea
                id="message"
                placeholder={data.form.message.placeholder}
                className="min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 transition-all duration-300"
              disabled={isSubmitting}
            >
              <motion.div
                animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Send className="w-4 h-4 mr-2" />
              </motion.div>
              {isSubmitting ? "Sending..." : data.form.submitButton}
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
} 