"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  MessagesSquare,
  Home,
  User,
  GraduationCap,
  BriefcaseBusiness,
  Globe,
} from "lucide-react";
import Logo from "./Logo";
import ColorPicker from "./ColorPicker";
import ThemeSwitcher from "./ThemeSwitcher";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useLanguage } from "@/context/LanguageContext";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { language, changeLanguage, t, direction } = useLanguage();

  useEffect(() => {
    if (isDesktop) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isDesktop]);

  interface MenuItem {
    name: string;
    path: string;
    icon: React.ElementType;
    translationKey: string;
  }

  const menuItems: MenuItem[] = [
    { name: t('home'), icon: Home, path: "/", translationKey: 'home' },
    { name: t('about'), icon: User, path: "/about", translationKey: 'about' },
    { name: t('portfolio'), icon: BriefcaseBusiness, path: "/portfolio", translationKey: 'portfolio' },
    { name: t('experience'), icon: GraduationCap, path: "/experience", translationKey: 'experience' },
    { name: t('contact'), icon: MessagesSquare, path: "/contact", translationKey: 'contact' },
  ];

  // تغییر مسیر برای زبان‌های مختلف
  const getLocalizedPath = (path: string) => {
    return `/${language}${path === '/' ? '' : path}`;
  };
  
  // بررسی می‌کند آیا یک منو فعال است
  const isActiveMenuItem = (menuPath: string) => {
    if (!pathname) return false;
    
    // حذف پیشوند زبان از pathname فعلی
    const currentPathWithoutLang = pathname.replace(/^\/(en|fa)/, '');
    // تبدیل مسیر منو به مسیر بدون پیشوند زبان
    const menuPathWithoutLang = menuPath === '/' ? '' : menuPath;
    
    // مقایسه مسیر فعلی با مسیر منو
    return currentPathWithoutLang === menuPathWithoutLang || 
           (currentPathWithoutLang === '' && menuPathWithoutLang === '');
  };
  
  // تغییر زبان
  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'fa' : 'en');
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-sm border-b border-border z-40 flex md:hidden items-center px-4">
        <button
          className="p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
        className={`fixed top-0 bottom-0 ${direction === 'rtl' ? 'right-0' : 'left-0'} w-64 z-50 bg-background ${direction === 'rtl' ? 'border-l' : 'border-r'} border-border`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-center pt-8">
            <Logo />
          </div>

          <nav className="flex-1 mt-12">
            <ul className="px-4 space-y-2">
              {menuItems?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={getLocalizedPath(item.path)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      transition-colors duration-200
                      hover:bg-primary/10 hover:text-primary
                      ${isActiveMenuItem(item.path) ? "bg-primary/10 text-primary" : "text-foreground"}
                    `}
                    onClick={() => !isDesktop && setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{t(item.translationKey)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-border">
            <div className="flex gap-4 justify-center">
              <ThemeSwitcher />
              <ColorPicker />
              <div className="relative">
                <button
                  onClick={toggleLanguage}
                  className="p-2 rounded-full shadow-lg bg-card hover:bg-accent transition-colors"
                  title={language === 'en' ? 'تغییر به فارسی' : 'Switch to English'}
                >
                  <div className="flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                    <span className="ml-1 text-xs font-bold">{language === 'en' ? 'FA' : 'EN'}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>

      <div className={`${direction === 'rtl' ? 'md:pr-64' : 'md:pl-64'}`} />

      {pathname && pathname !== '/' && pathname !== '/fa' && pathname !== '/en' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://faridsi.ir'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': (() => {
                    const pageName = pathname?.split('/')?.pop() || '';
                    return pageName.charAt(0).toUpperCase() + pageName.substring(1);
                  })(),
                  'item': `https://faridsi.ir${pathname || ''}`
                }
              ]
            })
          }}
        />
      )}
    </>
  );
};

export default Sidebar;
