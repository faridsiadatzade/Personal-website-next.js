"use client";

import { ContactSection } from "@/components/sections/ContactSection";
import { ContactInfo } from "@/types/contact";
import { motion } from "framer-motion";

const contactData: ContactInfo = {
  title: "Contact Me",
  subtitle: "Get in Touch",
  description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through the form below or connect with me through other channels.",
  contactMethods: [
    {
      title: "Email",
      description: "For business inquiries and collaborations",
      icon: "mail",
      value: "fsiadatzade@gmail.com",
      link: "mailto:fsiadatzade@gmail.com"
    },
    {
      title: "Phone",
      description: "For direct communication",
      icon: "phone",
      value: "+98 936 001 0251",
      link: "tel:+989360010251"
    },
    {
      title: "Location",
      description: "Based in Tehran, Iran",
      icon: "location",
      value: "Tehran, Iran",
      link: "https://maps.google.com"
    }
  ],
  form: {
    name: {
      label: "Full Name",
      placeholder: "Enter your full name"
    },
    email: {
      label: "Email Address",
      placeholder: "Enter your email address"
    },
    subject: {
      label: "Subject",
      placeholder: "What's this about?"
    },
    message: {
      label: "Message",
      placeholder: "Tell me about your project or idea"
    },
    submitButton: "Send Message"
  }
};

export default function Contact() {
  return (
    <section className="mt-5 p-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-4xl font-bold">{contactData.title}</h3>
        <span className="block mt-2 w-20 border-b-4 border-primary"></span>
        <span className="block mt-2 w-9 border-b-4 border-primary"></span>
      </motion.div>
      <ContactSection data={contactData} />
    </section>
  );
}
