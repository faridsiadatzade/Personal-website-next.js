"use client";

import dynamic from 'next/dynamic';
import { ExperienceItem, EducationItem } from "@/types/experience";
import tadbir from "@/assets/images/companies/tadbir.jpeg";
import parham from "@/assets/images/companies/parham.jpeg";
import nokarto from "@/assets/images/companies/nokarto.jpeg";
// import shirazUni from "@/assets/images/universities/shiraz.jpeg";
// import shahroodUni from "@/assets/images/universities/shahrood.jpeg";

const DynamicTimeline = dynamic(() => 
  import('@/components/Timeline').then(mod => mod.Timeline),
  {
    loading: () => <div className="animate-pulse h-96 w-full bg-gray-200 dark:bg-gray-700 rounded-md"></div>,
    ssr: false,
  }
);

const workExperience: ExperienceItem[] = [
  {
    title: "توسعه دهنده ارشد فرانت‌اند",
    subtitle: "شرکت تدبیر پرداز",
    date: "۱۳۹۹ - تاکنون",
    logo: tadbir,
    location: "تهران، ایران",
    technologies: ["React", "TypeScript", "Redux", "Material-UI"],
    description: [
      "نگهداری و بهبود پلتفرم ادمین پلاس مورد استفاده توسط بیش از ۴۰ کارگزاری",
      "بهبود عملکرد سیستم با بهینه‌سازی کامپوننت‌های React و Redux",
      "توسعه ویژگی‌های جدید و اطمینان از پاسخگویی در دستگاه‌های مختلف",
      "پیاده‌سازی کامپوننت‌های پیچیده با استفاده از TypeScript و React",
      "همکاری با طراحان UX/UI برای ارائه ویژگی‌های کاربرمحور"
    ],
  },
  {
    title: "توسعه دهنده فرانت‌اند",
    subtitle: "شرکت پرهام هوشمند",
    date: "۱۳۹۸ - ۱۳۹۹",
    logo: parham,
    location: "تهران، ایران",
    technologies: ["React", "JavaScript", "SCSS", "RESTful APIs"],
    description: [
      "بهبود طراحی تجربه کاربری برای چندین پروژه مشتری",
      "پیاده‌سازی عناصر UI بی‌نقص و طرح‌های ریسپانسیو",
      "توسعه و نگهداری برنامه‌های سمت کلاینت",
      "همکاری با تیم بک‌اند برای یکپارچه‌سازی API"
    ],
  },
  {
    title: "توسعه دهنده وب",
    subtitle: "نوکارتو",
    date: "۱۳۹۸ - ۱۳۹۸",
    logo: nokarto,
    location: "تهران، ایران",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP"],
    description: [
      "ارائه فرم‌های ارزیابی هوشمند برای شرکت اپلایمن",
      "همکاری در پروژه‌های اتوماسیون سیستم داخلی",
      "توسعه و نگهداری وب‌سایت‌های وردپرس",
      "ارائه پشتیبانی فنی به مشتریان"
    ],
  },
];

const education: EducationItem[] = [
  {
    title: "کارشناسی ارشد تجارت الکترونیک",
    subtitle: "دانشگاه شیراز",
    date: "۱۴۰۰ - ۱۴۰۲",
    // logo: shirazUni,
    location: "شیراز، ایران",
    thesis: "چارچوب مبتنی بر بلاکچین برای تراکنش‌های امن تجارت الکترونیک",
    activities: [
      "دستیار پژوهشی در آزمایشگاه تجارت الکترونیک",
      "انتشار مقاله در مجله بین‌المللی تجارت الکترونیک"
    ],
    description: [
      "سیستم‌ها و فناوری‌های تجارت الکترونیک",
      "بازاریابی دیجیتال و تحلیل کسب‌وکار",
      "اینترنت اشیا (IoT)",
      "امنیت اطلاعات در کسب‌وکار آنلاین",
      "فناوری‌های پیشرفته وب"
    ],
  },
  {
    title: "کارشناسی مهندسی کامپیوتر و فناوری اطلاعات",
    subtitle: "دانشگاه صنعتی شاهرود",
    date: "۱۳۹۴ - ۱۳۹۸",
    // logo: shahroodUni,
    location: "شاهرود، ایران",
    thesis: "پیاده‌سازی سیستم خانه هوشمند مبتنی بر اینترنت اشیا",
    activities: [
      "عضو انجمن مهندسی کامپیوتر",
      "شرکت در مسابقه برنامه‌نویسی ACM"
    ],
    description: [
      "شبکه‌های کامپیوتری و امنیت",
      "مهندسی نرم‌افزار",
      "سیستم‌های مدیریت پایگاه داده",
      "توسعه وب",
    ],
  },
];

export default function Experience() {
  return (
    <section className="mt-5 p-5">
      <div>
        <h3 className="text-4xl font-bold">تجربیات و تحصیلات</h3>
        <span className="block mt-2 w-20 border-b-4 border-primary"></span>
        <span className="block mt-2 w-9 border-b-4 border-primary"></span>
      </div>

      <div className="mt-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-6">تجربیات کاری</h4>
            <DynamicTimeline items={workExperience} />
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-6">تحصیلات</h4>
            <DynamicTimeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
} 