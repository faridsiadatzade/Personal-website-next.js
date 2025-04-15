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
}

// ایجاد کانتکست با مقدار پیش‌فرض
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  direction: 'ltr',
  changeLanguage: () => {},
  t: (key: string) => key,
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
  
  // در اولین رندر سمت کلاینت، زبان را براساس مسیر تعیین می‌کنیم
  useEffect(() => {
    if (pathname) {
      const detectedLanguage: Language = pathname.startsWith('/fa') ? 'fa' : 'en';
      setLanguage(detectedLanguage);
      setDirection(detectedLanguage === 'fa' ? 'rtl' : 'ltr');
    }
    setIsInitialized(true);
  }, [pathname]);

  // تغییر زبان
  const changeLanguage = (lang: Language) => {
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
    if (!translations[language] || !translations[language][key]) {
      return key;
    }
    return translations[language][key];
  };

  // تنظیم جهت صفحه در کل سند HTML فقط در سمت کلاینت
  useEffect(() => {
    if (typeof document !== 'undefined' && isInitialized) {
      document.documentElement.dir = direction;
      document.documentElement.lang = language;
      
      // اضافه کردن کلاس rtl برای زبان فارسی
      if (direction === 'rtl') {
        document.documentElement.classList.add('rtl');
      } else {
        document.documentElement.classList.remove('rtl');
      }
    }
  }, [direction, language, isInitialized]);

  const value = {
    language,
    direction,
    changeLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// هوک برای استفاده آسان از کانتکست
export const useLanguage = () => useContext(LanguageContext); 