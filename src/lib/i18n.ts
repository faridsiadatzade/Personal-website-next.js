// Define the supported locales
export type Locale = 'fa' | 'en';

// Translation dictionaries
const fa = {
  home: {
    title: "صفحه اصلی",
    description: "توسعه‌دهنده فرانت‌اند و طراح رابط کاربری"
  },
  notFound: {
    message: "صفحه مورد نظر یافت نشد",
    backToHome: "بازگشت به خانه"
  },
  about: {
    title: "درباره من",
    bio: "بیوگرافی",
    skills: "مهارت‌ها",
    interests: "علایق",
    languages: "زبان‌ها"
  },
  experience: {
    title: "تجربیات",
    work: "تجربیات کاری",
    education: "تحصیلات"
  },
  portfolio: {
    title: "نمونه کارها",
    viewProject: "مشاهده پروژه",
    viewCode: "مشاهده کد"
  },
  contact: {
    title: "تماس",
    name: "نام",
    email: "ایمیل",
    subject: "موضوع",
    message: "پیام",
    send: "ارسال پیام"
  },
  hello_im: "سلام، من",
  more_about_me: "بیشتر درباره من",
  get_in_touch: "تماس با من",
  frontend_developer: "توسعه دهنده فرانت‌اند",
  skills: "مهارت‌ها",
  my_projects: "پروژه‌های من",
  view_all: "نمایش همه",
  about_me: "درباره من",
  my_skills: "مهارت‌های من",
  contact_me: "تماس با من"
};

const en = {
  home: {
    title: "Home",
    description: "Frontend Developer and UI Designer"
  },
  notFound: {
    message: "Page not found",
    backToHome: "Back to home"
  },
  about: {
    title: "About Me",
    bio: "Biography",
    skills: "Skills",
    interests: "Interests",
    languages: "Languages"
  },
  experience: {
    title: "Experience",
    work: "Work Experience",
    education: "Education"
  },
  portfolio: {
    title: "Portfolio",
    viewProject: "View Project",
    viewCode: "View Code"
  },
  contact: {
    title: "Contact",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send Message"
  },
  hello_im: "Hello, I'm",
  more_about_me: "More About Me",
  get_in_touch: "Get in Touch",
  frontend_developer: "Frontend Developer",
  skills: "Skills",
  my_projects: "My Projects",
  view_all: "View All",
  about_me: "About Me",
  my_skills: "My Skills",
  contact_me: "Contact Me"
};

// Dictionaries map
const dictionaries = {
  fa,
  en
};

/**
 * Get translations for a specific locale
 */
export const getTranslations = (locale: Locale) => {
  return dictionaries[locale];
}; 