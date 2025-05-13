'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import enTranslations from '@/locales/en.json';
import faTranslations from '@/locales/fa.json';

type Language = 'en' | 'fa';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isReady: boolean;
}

// ایجاد کانتکست با مقدار پیش‌فرض
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  direction: 'ltr',
  changeLanguage: () => {},
  t: (key: string) => key,
  isReady: false
});

// ترجمه‌ها
const translations: Record<Language, Record<string, string>> = {
  en: enTranslations,
  fa: faTranslations
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  
  // برای جلوگیری از خطای هیدراسیون، ابتدا فرض می‌کنیم زبان انگلیسی است
  const [language, setLanguage] = useState<Language>('en');
  const [direction, setDirection] = useState<Direction>('ltr');
  const [isInitialized, setIsInitialized] = useState(false);
  // اضافه کردن متغیر mounted برای کنترل وضعیت مانت شدن کامپوننت
  const [mounted, setMounted] = useState(false);
  
  // در اولین رندر سمت کلاینت، مشخص می‌کنیم که کامپوننت مانت شده است
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // در اولین رندر سمت کلاینت، زبان را براساس مسیر تعیین می‌کنیم
  useEffect(() => {
    if (pathname && mounted) {
      const detectedLanguage: Language = pathname.startsWith('/fa') ? 'fa' : 'en';
      setLanguage(detectedLanguage);
      setDirection(detectedLanguage === 'fa' ? 'rtl' : 'ltr');
    }
    if (mounted) {
      setIsInitialized(true);
    }
  }, [pathname, mounted]);

  // تغییر زبان
  const changeLanguage = (lang: Language) => {
    if (!mounted) return; // اگر کامپوننت هنوز مانت نشده، تغییری ایجاد نمی‌کنیم
    
    setLanguage(lang);
    setDirection(lang === 'fa' ? 'rtl' : 'ltr');
    
    // تغییر مسیر URL با حفظ بخش فعلی
    if (pathname) {
      const currentPath = pathname.replace(/^\/(en|fa)/, '') || '/';
      router.push(`/${lang}${currentPath === '/' ? '' : currentPath}`);
    } else {
      router.push(`/${lang}`);
    }
  };

  // ترجمه کلیدها
  const t = (key: string): string => {
    if (!mounted || !translations[language] || !translations[language][key]) {
      return key;
    }
    return translations[language][key];
  };

  // تنظیم جهت صفحه در کل سند HTML فقط در سمت کلاینت
  useEffect(() => {
    if (typeof document !== 'undefined' && isInitialized && mounted) {
      document.documentElement.dir = direction;
      document.documentElement.lang = language;
      
      // اضافه کردن کلاس rtl برای زبان فارسی
      if (direction === 'rtl') {
        document.documentElement.classList.add('rtl');
      } else {
        document.documentElement.classList.remove('rtl');
      }
    }
  }, [direction, language, isInitialized, mounted]);

  const value = {
    language,
    direction,
    changeLanguage,
    t,
    isReady: mounted && isInitialized
  };

  // در حالت سرور یا قبل از مانت شدن، یک نسخه ساده از content را برمی‌گردانیم
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// هوک برای استفاده آسان از کانتکست
export const useLanguage = () => useContext(LanguageContext); 