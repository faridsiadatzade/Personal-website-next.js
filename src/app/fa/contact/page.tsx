"use client";

import dynamic from 'next/dynamic';
import { ContactInfo } from "@/types/contact";
import { motion } from "framer-motion";
import ContactSectionSkeleton from '@/components/loading/ContactSectionSkeleton';

const DynamicContactSection = dynamic(() => 
  import('@/components/sections/ContactSection').then(mod => mod.ContactSection),
  {
    loading: () => <ContactSectionSkeleton />,
    ssr: false,
  }
);

const contactData: ContactInfo = {
  title: "تماس با من",
  subtitle: "ارتباط با من",
  description: "من همیشه آماده بحث در مورد پروژه‌های جدید، ایده‌های خلاقانه یا فرصت‌هایی برای مشارکت در اهداف شما هستم. لطفاً از طریق فرم زیر یا سایر کانال‌ها با من تماس بگیرید.",
  contactMethods: [
    {
      title: "ایمیل",
      description: "برای پیشنهادات کاری و همکاری",
      icon: "mail",
      value: "fsiadatzade@gmail.com",
      link: "mailto:fsiadatzade@gmail.com"
    },
    {
      title: "تلفن",
      description: "برای ارتباط مستقیم",
      icon: "phone",
      value: "۰۹۳۶۰۰۱۰۲۵۱",
      link: "tel:+989360010251"
    },
    {
      title: "موقعیت",
      description: "ساکن تهران، ایران",
      icon: "location",
      value: "تهران، ایران",
      link: "https://maps.google.com"
    }
  ],
  form: {
    name: {
      label: "نام کامل",
      placeholder: "نام کامل خود را وارد کنید"
    },
    email: {
      label: "آدرس ایمیل",
      placeholder: "آدرس ایمیل خود را وارد کنید"
    },
    subject: {
      label: "موضوع",
      placeholder: "این در مورد چیست؟"
    },
    message: {
      label: "پیام",
      placeholder: "درباره پروژه یا ایده خود به من بگویید"
    },
    submitButton: "ارسال پیام"
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
      <DynamicContactSection data={contactData} />
    </section>
  );
} 